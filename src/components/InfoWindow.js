import React from 'react';
import '../App.css';
import FSlogo from '../images/logo.svg';

const InfoWindow = ({ info, infoWindow, closeInfoWindow }) => {

  console.log(info);

    return (
      <div className="info-window">

        <p className="info-title" role="heading" aria-label="location name">{info.title}</p>
        <p className="info-address" role="heading" aria-label="location address"> {info.address}</p>
        <button className="close-window"
                onClick={(event) => closeInfoWindow()}>Close</button>
        <img className="info-image" alt="Location view" src={info.photoUrl}/>

        <p className="info-foursquare">
          <span className="info-rating" aria-label="location rating">{info.rating}</span>
          <span className="info-fullscore" aria-label="maximum rating"> / 10</span>
        </p>
          <p className="info-fullscore" aria-label="maximum rating"> rated on Foursquare</p>



        <div id="triangle"></div>
      </div>
    );
  }


export default InfoWindow;
