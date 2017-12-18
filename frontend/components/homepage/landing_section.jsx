import React from 'react';
import LandingIcons from './landing_icons';
import LandingSearchContainer from './landing_search_container';

const LandingSection = () => (
  <div className='landing-page'>
    <div className='landing-page-content'>
      <LandingIcons />
      <h1>Connect With a Small Business Near You</h1>
      <span className='display-text'>
      Find out what products and services your community is proud of producing. 

      </span>
      <LandingSearchContainer />
    </div>
  </div>
);

export default LandingSection;
