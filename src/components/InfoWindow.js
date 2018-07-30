import React from 'react';
import '../App.css';

const InfoWindow = ({ info, infoWindow, closeInfoWindow }) => {

  console.log(info);

    return (
      <div className="info-window">

        <p className="info-title" role="heading" aria-label="location name">{info.title}</p>
        <p className="info-address" role="heading" aria-label="location address"> {info.address}</p>

        <button className="close-window"
                onClick={(event) => closeInfoWindow()}>Close</button>

        <img className="info-image" alt="Location view" src={info.imageUrl}/>


        <div id="triangle"></div>
      </div>
    );
  }


export default InfoWindow;
