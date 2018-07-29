import React from 'react';
import PropTypes from 'prop-types';

import naturePin from '../images/nature.svg';
import culturePin from '../images/culture.svg';
import leisurePin from '../images/leisure.svg';
import playgroundPin from '../images/playground.svg';

import Pin from '../images/pin.svg';

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
  }

  return (
    <div title={props.name}>

        <img
             width={48}
             height={64}
             alt={`Marker of location ${props.location.altname ? props.location.altname : props.location.title}`}
             //onClick={(event) => props.eventHandler(props.location, props.location.position)}
             src={pinImage}
        />
      </div>
    );
}
export default Marker;
