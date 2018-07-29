import React, { Component } from 'react';
import '../App.css';

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (location, position) => {
    this.props.eventHandler(location, position);
  }

  eventHandler = (location, position) => {
    this.props.eventHandler(location, position);
  }

  render () {
    const { location } = this.props

    return (
      <div
          className="list-item"
          tabIndex='0'
          aria-label={location.title}
          onClick={(event) => {
            event.preventDefault();
            this.handleClick(location, location.position)
          }}>
          {location.title}
      </div>
    );
  }

}

export default ListItem;
