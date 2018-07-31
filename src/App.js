import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import MapContainer from './components/MapContainer';
import SideBar from './components/SideBar';
import Footer from './components/Footer';

import * as data from './data/locations.json';
import {getFsVenue} from './api/foursquare';

class App extends Component {

  state = {
    locations: [],
    filteredLocations: null,
    selectMarker: [],
    infoWindow: false,
    center: {
      lat: 47.497912,
      lng: 19.040235
    },
    zoom: 13,
  }

  componentDidMount () {
    this.loadLocations();
  }

  // Load search/filter input into the state of the component, so only those markers are rendered to the map
  updateLocations = filteredLocations => {
    this.setState({filteredLocations: filteredLocations});
  }

  // Load locations array from JSON or updateLocation results
  loadLocations = () => {
    let locations = [];
    locations.push(...data);

    // Get photoUrl and rating from Foursquare, refresh state
    // NOTE: this solution is sending venues 1 by 1 - to reduce costs, might be better to make a batch (bulk request)?

    locations.forEach(location => {
      getFsVenue(location)
      .then(fsData => {
        location.rating = fsData.fsRating;
        location.photoUrl = fsData.fsPhotoUrl;
        this.setState({ locations: locations });
      })
    });

    this.setState({ locations: locations });
  }

  // Center the map when a location is selected, zoom the map and open an infoWindow
  centerMap = (location, position) => {
    this.setState({ center: position, zoom: 14 });
    console.log(this.state.zoom);
    this.openInfoWindow(location);
  }

  // Open and close infoWindow
  openInfoWindow = (marker) => {
    this.setState({ selectMarker: marker, infoWindow: true })
  }
  closeInfoWindow = () => {
    this.setState({ selectMarker: [], infoWindow: false })
  }

  // Render component

  render() {
    const { locations, filteredLocations, selectMarker, infoWindow, center, zoom } = this.state
    const currentLocations = filteredLocations || locations;

    return (

      <div className="app">
        <Header />
        <main>
          <SideBar
            locations={locations}
            center={center}
            zoom={zoom}
            marker={selectMarker}
            infoWindow={infoWindow}
            closeInfoWindow={this.closeInfoWindow}
            eventHandler={this.centerMap}
            updateLocations = {this.updateLocations}
          />
          <MapContainer
            locations={currentLocations}
            center={center}
            zoom={zoom}
            marker={selectMarker}
            infoWindow={infoWindow}
            closeInfoWindow={this.closeInfoWindow}
            eventHandler={this.centerMap}
          />
        </main>
        <Footer />
      </div>

    );
  }
}

export default App;

/* ToDo:
- selected list item changes color
- clear filter and search (show full list again)
*/
