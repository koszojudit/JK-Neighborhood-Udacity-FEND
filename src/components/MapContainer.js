import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import preloader from '../images/preloader.svg';
import Marker from './Marker'

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

  state = {
    isLoading: true
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

  eventHandler = (location, pos) => {
    this.setState({ marker: location });
    this.props.eventHandler(location, pos)
  }

  render() {

    const { locations, marker, isLoading } = this.props

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
                type={location.type}
                location={location}

                //eventHandler={this.eventHandler}
                marker={marker}
              />
            ))}


          </GoogleMapReact>



        </div>

      </div>
    );
  }
}

export default MapContainer;
