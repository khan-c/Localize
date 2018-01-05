import React from 'react';
import BusinessFormContainer from '../business_form/form_container';
import { Route } from 'react-router-dom';
import LandingSection from './landing_section';
import MissionSection from './mission_section';
import TestimonialSection from './testimonial_section';


class HomePage extends React.Component {
  componentDidMount() {
    const homepage = document.getElementById('homepage');
    const searchFieldWrapper = document.getElementById('search-field-wrapper');
    searchFieldWrapper.setAttribute('style', 'display: none');
    window.addEventListener('scroll', () => {
      if (window.pageYOffset >= 65) {
        homepage.classList.add('sticky-padding');
      } else {
        homepage.classList.remove('sticky-padding');
      }
    });
    window.addEventListener('scroll', this.hideSearchFromNavbar, true);
  }

  componentWillUnmount() {
    const searchFieldWrapper = document.getElementById('search-field-wrapper');
    searchFieldWrapper.setAttribute('style', 'display: inline');
    window.removeEventListener('scroll', this.hideSearchFromNavbar, true);
  }

  hideSearchFromNavbar() {
    const searchFieldWrapper = document.getElementById('search-field-wrapper');
    const landing = document.getElementById('landing-search-wrapper');
    if (landing && window.pageYOffset >= landing.offsetParent.offsetTop + landing.offsetTop) {
      searchFieldWrapper.setAttribute('style', 'display: inline');
    } else {
      searchFieldWrapper.setAttribute('style', 'display: none');
    }
  }

  render () {
    return (
      <div className='homepage' id='homepage'>
        <LandingSection />
        <MissionSection />
        <TestimonialSection />
        <Route path="/associatebusiness" component={BusinessFormContainer} />
      </div>
    );
  }
}

export default HomePage;
