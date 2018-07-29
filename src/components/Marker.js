import React from 'react';

import naturePin from '../images/nature.svg';
import culturePin from '../images/culture.svg';
import leisurePin from '../images/leisure.svg';
import playgroundPin from '../images/playground.svg';

import '../App.css';

const Marker = (props) => {

  let pinImage;
  switch (props.type) {
    case 'nature': pinImage=naturePin
    break;
    case 'culture': pinImage=culturePin
    break;
    case 'leisure': pinImage=leisurePin
    break;
    case 'playground': pinImage=playgroundPin
    break;
    default: pinImage=naturePin
  }

  return (
    <div
    title={props.name}
    className={'marker'}
    >
        <img
          src={pinImage}
          alt={`Marker of ${props.location.name}`}
          onClick={(event) => props.eventHandler(props.location, props.location.position)}
        />
      </div>
    );
}
export default Marker;
