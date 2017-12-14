import React from 'react';
import LandingPage from './landing_page';
import MissionPage from './mission_page';

class HomePage extends React.Component {
  render () {
    return (
      <div className='homepage'>
        <LandingPage />
        <MissionPage />
      </div>
    );
  }
}

export default HomePage;
