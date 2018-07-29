import React, { Component } from 'react';

import ListItem from './ListItem';

import '../App.css';
import nature from '../images/nature.svg';
import culture from '../images/culture.svg';
import leisure from '../images/leisure.svg';
import playground from '../images/playground.svg';

class SideBar extends Component {

  state = {
    query: '',
    filteredLocations: null,
  }

  filterPlaces = (event) => {

    const { locations, infoWindow, closeInfoWindow } = this.props;
    const query = event.target.value.toLowerCase();

    this.setState({ query: query })
    closeInfoWindow();

    const filteredLocations = locations.filter((location) => {
      const match = location.title.toLowerCase().indexOf(query) > -1;
      //location.marker.setVisible(match);
      return match;
    })

    filteredLocations.sort(this.sortName);
    this.setState({ filteredLocations })
  }

  render () {
    const { locations, eventHandler } = this.props

    const { query, filteredLocations } = this.state

    const currentLocations = filteredLocations || locations;

    return (
      <aside className="sidebar">
        <input className="search-input"
          type="text"
          placeholder="Search by name"
          role="search"
          aria-label="text filter"
          tabIndex="0"
          value={ query }
          onChange={ this.filterPlaces }
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

        <div className="location-list" tabIndex={0} aria-label={`${locations.length} locations listed`}>
          {currentLocations.map(location => (
            <ListItem
              key={location.id}
              location={location}
              eventHandler={eventHandler}
            />
          ))}
        </div>

      </aside>

    );
  }
  }

  export default SideBar;
