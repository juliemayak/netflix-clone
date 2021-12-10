import React from 'react';
import video from '../video/video1.mp4';
import './Info.css';

function Info() {
  return (
    <div className="info__cards">
      <div className="info__card">
        <div className="info__cardContainer">
          <div className="info__cardText">
            <h1>Enjoy on your TV.</h1>
            <h2>
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and
              more.
            </h2>
          </div>
          <div className="info__cardAnimation">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
              alt="monitor"
            />
            <div className="info__video">
              <video autoPlay muted loop playsInline>
                <source src={video} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
      <div className="info__card"></div>
      <div className="info__card"></div>
      <div className="info__card"></div>
      <div className="info__card"></div>
    </div>
  );
}

export default Info;
