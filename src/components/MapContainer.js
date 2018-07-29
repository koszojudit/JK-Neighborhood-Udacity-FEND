import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import preloader from '../images/preloader.svg';
import Marker from './Marker'
import InfoWindow from './InfoWindow'

import '../App.css';

// import PropTypes from 'prop-types';
// import MapTheme from '../styles/map-style.json';
// import * as data from '../data/locations.json';


class MapContainer extends Component {

  static defaultProps = {
    style: require("../data/map-style.json"),
  };

  state = {
    isLoading: true
  }

  eventHandler = (location, position) => {
    this.setState({ marker: location });
    this.props.eventHandler(location, position)
  }

  componentDidMount() {
    this.setState({isLoading: false})

    /*setTimeout(function() {
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
        <div className="map" role="application">

          <GoogleMapReact
              bootstrapURLKeys={{ key: 'AIzaSyBy0vYHXw7H4DaAfYbsgPwk8b5GFPFyv_o' }}
              center={this.props.center}
              zoom={this.props.zoom}
              role="application"
              options={{ styles: this.props.style
              }}
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
