import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class Header extends Component {
  render() {
    return (
        <header className="header" role="header">
          <img className="logo" alt="logo" src={logo}/>
          <div>
            <h1 className="app-title">Budapest, Baby!</h1>
            <p className ="app-slogan">Explore with an eye of a mother</p>
          </div>
        </header>
    );
  }
}

export default Header;
