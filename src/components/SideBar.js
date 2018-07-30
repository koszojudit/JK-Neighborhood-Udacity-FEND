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

    const { locations, closeInfoWindow, updateLocations } = this.props;
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

    const { locations, closeInfoWindow, updateLocations } = this.props;
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
          aria-label="Search locations by name"
          tabIndex="0"
          value={ query }
          onChange={ this.searchLocations }
        />

        <p className="sidebar-heading" role="heading" tabIndex="0">Choose your experience</p>

        <div className="filter" tabIndex="0">
          <div className="filter-item nature"
              tabIndex="0"
              role="button"
              aria-label="Filter for nature"
              onClick={() => this.filterLocations('nature')}>
            <img src={nature} alt="nature"/>
            <p>Nature</p>
          </div>
          <div className="filter-item culture"
              tabIndex="0"
              role="button"
              aria-label="Filter for culture"
              onClick={() => this.filterLocations('culture')}>
            <img src={culture} alt="culture"/>
            <p>Culture</p>
          </div>
          <div className="filter-item leisure"
              tabIndex="0"
              role="button"
              aria-label="Filter for leisure"
              onClick={() => this.filterLocations('leisure')}>
            <img src={leisure} alt="leisure"/>
            <p>Leisure</p>
          </div>
          <div className="filter-item playground"
              tabIndex="0"
              role="button"
              aria-label="Filter for playgrounds"
              onClick={() => this.filterLocations('playground')}>
            <img src={playground} alt="playground"/>
            <p>Playground</p>
          </div>
        </div>

        <p className="sidebar-heading" role="heading" tabIndex="0">Choose a place to visit</p>

        <div className="location-list" role="list" tabIndex="0" aria-label={`${locations.length} locations listed`}>
          {currentLocations.map(location => (
            <ListItem
              key={location.id}
              location={location}
              eventHandler={eventHandler}
              role={`listitem`}
            />
          ))}
        </div>

      </aside>

    );
  }
  }

  export default SideBar;
