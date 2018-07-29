import React, { Component } from 'react';

import '../App.css';
import nature from '../images/nature.svg';
import culture from '../images/culture.svg';
import leisure from '../images/leisure.svg';
import playground from '../images/playground.svg';

class SideBar extends Component {

  render () {

    return (
      <aside className="sidebar">
        <input className="search-input"
          type="text"
          placeholder="Search by name"
          role="search"
          aria-label="text filter"
          tabIndex="0"
        />

        <p className="sidebar-heading">Choose your experience</p>

        <div className="filter">
          <div className="filter-item nature">
            <img src={nature} alt="nature"/>
            <p>Nature</p>
          </div>
          <div className="filter-item culture">
            <img src={culture} alt="culture"/>
            <p>Culture</p>
          </div>
          <div className="filter-item leisure">
            <img src={leisure} alt="leisure"/>
            <p>Leisure</p>
          </div>
          <div className="filter-item playground">
            <img src={playground} alt="playground"/>
            <p>Playground</p>
          </div>
        </div>

        <p className="sidebar-heading">Choose a place to visit</p>

        <ul className="location-list">
          <li className="location-item">
            <p className="location-name">Location Name</p>
          </li>
        </ul>

      </aside>

    );
  }
  }

  export default SideBar;
