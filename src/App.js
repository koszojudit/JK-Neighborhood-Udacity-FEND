import React, { Component } from 'react';
import './App.css';

import Header from './components/Header.js';
import MapContainer from './components/MapContainer';
import SideBar from './components/SideBar';
import Footer from './components/Footer';

import * as data from './data/locations.json';

class App extends Component {

  state = {
    locations: []
  }

  componentDidMount () {
    this.loadLocations();
  }

  loadLocations = () => {
    let locations = [];
    locations.push(...data);
    this.setState({ locations: locations });
    console.log(locations);
  }


  render() {
    const { locations } = this.state

    return (

      <div className="app">
        <Header />
        <main>
          <SideBar />
          <MapContainer locations={locations} />
        </main>
        <Footer />
      </div>

    );
  }
}

export default App;
