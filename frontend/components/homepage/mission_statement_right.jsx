import React from 'react';
import ReactSVG from 'react-svg';

const MissionStatementRight = () => (
  <div className='mission-statement statement-right'>
    <div className='mission-right-art-cropper'>
      <ReactSVG
        path='../../assets/images/landingArt.svg'
        className='mission-right-art'
      />
      <ReactSVG
        path='../../assets/images/clouds.svg'
        className='mission-right-clouds'
      />
    </div>
    <div className='mission-text-wrapper'>
      <h2 className='mission-right-title mission-title'>Commission Local Artist and Makers</h2>
      <span className='mission-text display-text'>
        We have seen a large increase in commissioned pieces from companies
        looking to fill their offices with paintings, murals, sculptures, and large center-pieces from
        local artists.
      </span>
    </div>
  </div>
);

export default MissionStatementRight;
