import React from 'react';
import LandingSection from './landing_section';
import MissionSection from './mission_section';

class HomePage extends React.Component {
  render () {
    return (
      <div className='homepage'>
        <LandingSection />
        <MissionSection />
      </div>
    );
  }
}

export default HomePage;
