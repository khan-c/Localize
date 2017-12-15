import React from 'react';
import LandingIcons from './landing_icons';
import LandingSearchContainer from './landing_search_container';

const LandingSection = () => (
  <div className='landing-page'>
    <div className='landing-page-content'>
      <LandingIcons />
      <h1>Connect With a Small Business Near You</h1>
      <span className='display-text'>
        Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Proin in elit erat. Vestibulum
        et enim bibendum, molestie ex non, ullamcorper sapien.
        Curabitur eu metus mi. Maecenas ac sapien suscipit, aliquam
        tortor lacinia, pretium mauris.
        Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Proin in elit erat. Vestibulum
        et enim bibendum, molestie ex non.
      </span>
      <LandingSearchContainer />
    </div>
  </div>
);

export default LandingSection;
