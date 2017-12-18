import React from 'react';
import LandingSection from './landing_section';
import MissionSection from './mission_section';
import TestimonialSection from './testimonial_section';

class HomePage extends React.Component {
  componentDidMount() {
    const homepage = document.getElementById('homepage');
    window.addEventListener('scroll', () => {
      if (window.pageYOffset >= 65) {
        homepage.classList.add('sticky-padding');
      } else {
        homepage.classList.remove('sticky-padding');
      }
    });
  }

  render () {
    return (
      <div className='homepage' id='homepage'>
        <LandingSection />
        <MissionSection />
        <TestimonialSection />
      </div>
    );
  }
}

export default HomePage;
