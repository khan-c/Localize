import React from 'react';
import BusinessFormContainer from '../business/form_container';
import { Route } from 'react-router-dom';
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
        <Route path="/associatebusiness" component={BusinessFormContainer} />
      </div>
    );
  }
}

export default HomePage;
