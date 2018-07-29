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

  searchLocations = (event) => {

    const { locations, infoWindow, closeInfoWindow, updateLocations } = this.props;
    const query = event.target.value.toLowerCase();
    this.setState({ query: query })
    closeInfoWindow();

    const filteredLocations = locations.filter((location) => {
      const match = location.title.toLowerCase().indexOf(query) > -1;
      return match;
    })

    filteredLocations.sort(this.sortName);
    this.setState({ filteredLocations });
    updateLocations(filteredLocations);
  }

  filterLocations = (type) => {
    console.log(type);

    const { locations, infoWindow, closeInfoWindow, updateLocations } = this.props;
    closeInfoWindow();

    const filteredLocations = locations.filter((location) => {
      const match = location.type.indexOf(type) > -1;
      return match;
    })

    filteredLocations.sort(this.sortName);
    this.setState({ filteredLocations });
    updateLocations(filteredLocations);
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
          onChange={ this.searchLocations }
        />

        <p className="sidebar-heading">Choose your experience</p>

        <div className="filter">
          <div className="filter-item nature" onClick={() => this.filterLocations('nature')}>
            <img src={nature} alt="nature"/>
            <p>Nature</p>
          </div>
          <div className="filter-item culture" onClick={() => this.filterLocations('culture')}>
            <img src={culture} alt="culture"/>
            <p>Culture</p>
          </div>
          <div className="filter-item leisure" onClick={() => this.filterLocations('leisure')}>
            <img src={leisure} alt="leisure"/>
            <p>Leisure</p>
          </div>
          <div className="filter-item playground" onClick={() => this.filterLocations('playground')}>
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
