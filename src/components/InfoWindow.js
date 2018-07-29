import React from 'react';
import '../App.css';

const InfoWindow = ({ info, infoWindow, closeInfoWindow }) => {

  console.log(info);

    return (
      <div className="info-window">

        <p className="info-title">{info.title}</p>
        <p className="info-address"> {info.address}</p>

        <button className="close-window"
                onClick={(event) => closeInfoWindow()}>Close</button>

        <img className="info-image" src={info.imageUrl}/>


        <div id="triangle"></div>
      </div>
    );
  }


export default InfoWindow;
