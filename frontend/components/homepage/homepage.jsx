import React from 'react';
import LandingSection from './landing_section';
import MissionSection from './mission_section';
import TestimonialSection from './testimonial_section';

class HomePage extends React.Component {
  render () {
    return (
      <div className='homepage'>
        <LandingSection />
        <MissionSection />
        <TestimonialSection />
      </div>
    );
  }
}

export default HomePage;
