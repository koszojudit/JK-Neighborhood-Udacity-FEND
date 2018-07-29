import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import preloader from '../images/preloader.svg';

import '../App.css';

// import PropTypes from 'prop-types';
// import MapTheme from '../styles/map-style.json';
// import * as data from '../data/locations.json';


class MapContainer extends Component {

  static defaultProps = {
    center: {
      lat: 47.497912,
      lng: 19.040235},
    zoom: 13,
    style: require("../data/map-style.json"),
  };


  render() {
    const { isLoaded } = this.props
    return (
      <div>
        <div className="map" role="map">
          <GoogleMapReact
              bootstrapURLKeys={{ key: 'AIzaSyBy0vYHXw7H4DaAfYbsgPwk8b5GFPFyv_o' }}
              center={this.props.center}
              zoom={this.props.zoom}
              role="application"
              options={{ styles: this.props.style
              }}
            >
          </GoogleMapReact>
        </div>

        <div className="loading-message" role="loading message">
          <p>Your map is loading...</p>
          <img src={preloader} className="preloader" alt="loading indicator" />
        </div>
      </div>
    );
  }
}

export default MapContainer;
