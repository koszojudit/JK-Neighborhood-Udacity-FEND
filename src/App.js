import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import MapContainer from './components/MapContainer';
import SideBar from './components/SideBar';
import Footer from './components/Footer';

import * as data from './data/locations.json';

class App extends Component {

  state = {
    locations: [],
    selectMarker: [],
    infoWindow: false,
    center: {
      lat: 47.497912,
      lng: 19.040235
    },
    zoom: 13
  }

  componentDidMount () {
    this.loadLocations();
  }

  loadLocations = () => {
    let locations = [];
    locations.push(...data);
    this.setState({ locations: locations });
  }

  centerMap = (location, position) => {
    this.setState({ center: position, zoom: 14 });
    console.log(this.state.zoom);
    this.openInfoWindow(location);
  }

  openInfoWindow = (marker) => {
    this.setState({ selectMarker: marker, infoWindow: true })
  }
  closeInfoWindow = () => {
    this.setState({ selectMarker: [], infoWindow: false })
  }


  render() {
    const { locations, selectMarker, infoWindow, center, zoom } = this.state

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
          />
          <MapContainer
            locations={locations}
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
