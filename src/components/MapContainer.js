import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import preloader from '../images/preloader.svg';
import Marker from './Marker'
import InfoWindow from './InfoWindow'

import '../App.css';
import { MAP_KEY } from '../data/api-keys';

class MapContainer extends Component {

  static defaultProps = {
    style: require("../data/map-style.json"),
  };

  state = {
    isLoading: true
  }

  componentDidMount() {
    this.setState({isLoading: false})

    /* Test if preloader works with setTimeout
    setTimeout(function() {
      console.log(this.state.isLoading);
      this.setState({ isLoading: false });
    }
    .bind(this),
    3000
    );
    console.log(this.state.isLoading);
    */
  }

  eventHandler = (location, position) => {
    this.setState({ marker: location });
    this.props.eventHandler(location, position)
  }

  render() {

    const { locations, marker, infoWindow, closeInfoWindow, isLoading } = this.props

    if(isLoading) {
      return (
        <div className="loading-message">
          <p>Your map is loading...</p>
          <img src={preloader} className="preloader" alt="loading indicator" />
        </div>
      );
    }

    return (
      <div>
        <div className="map">

          <GoogleMapReact
              bootstrapURLKeys={{ key: MAP_KEY }}
              center={this.props.center}
              zoom={this.props.zoom}
              options={{ styles: this.props.style}}
              role="application"
              tabIndex="-1"
            >

            {locations.map(location => (
              <Marker
                key={location.id}
                lat={location.position.lat}
                lng={location.position.lng}
                name={location.name}
                address={location.address}
                type={location.type}
                location={location}
                eventHandler={this.eventHandler}
                marker={marker}
              />
            ))}

            {marker.length !== 0 && infoWindow && (
              <InfoWindow
                info={marker}
                lat={marker.position.lat}
                lng={marker.position.lng}
                eventHandler={this.eventHandler}
                closeInfoWindow={closeInfoWindow}
              />

            )}

          </GoogleMapReact>



        </div>

      </div>
    );
  }
}

export default MapContainer;
