import React from 'react';
import ReactSVG from 'react-svg';

const LandingIcons = () => (
  <div className='landing-icons'>
    {/* <div className='icon-div'> */}
      <ReactSVG
        path='../../assets/images/shake-filled.svg'
        className='landing-shake-fill-1'
      />
      <ReactSVG
        path='../../assets/images/shake.svg'
        className='landing-shake-line-1'
      />
    {/* </div> */}

    <ReactSVG
      path='../../assets/images/shake-filled.svg'
      className='landing-shake-fill-2'
    />
    <ReactSVG
      path='../../assets/images/shake.svg'
      className='landing-shake-line-2'
    />
    <ReactSVG
      path='../../assets/images/open-filled.svg'
      className='landing-open-fill-1'
    />
    <ReactSVG
      path='../../assets/images/open.svg'
      className='landing-open-line-1'
    />
    <ReactSVG
      path='../../assets/images/open-filled.svg'
      className='landing-open-fill-2'
    />
    <ReactSVG
      path='../../assets/images/open.svg'
      className='landing-open-line-2'
    />
    <img
      src='../../assets/images/b2B.png'
      className='landing-b2B'
    />
  </div>
);

export default LandingIcons;
