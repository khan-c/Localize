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
        <Route path="/associatebusiness" component={BusinessFormContainer} />
        <LandingSection />
        <MissionSection />
        <TestimonialSection />
      </div>
    );
  }
}

export default HomePage;
