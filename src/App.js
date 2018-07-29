import React, { Component } from 'react';
import './App.css';

import Header from './components/Header.js';
import MapContainer from './components/MapContainer';
import SideBar from './components/SideBar';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <main>
          <SideBar />
          <MapContainer />
        </main>
        <Footer />
      </div>

    );
  }
}

export default App;
