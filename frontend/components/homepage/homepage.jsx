import React from 'react';
import LandingSection from './landing_section';
import MissionSection from './mission_section';
import TestimonialSection from './testimonial_section';

class HomePage extends React.Component {
  componentDidMount() {

    const searchFieldWrapper = document.getElementById('search-field-wrapper');
    window.addEventListener('scroll', this.addStickyPadding, true);
    searchFieldWrapper.setAttribute('style', 'display: none');
    window.addEventListener('scroll', this.hideSearchFromNavbar, true);
  }

  componentWillUnmount() {
    const searchFieldWrapper = document.getElementById('search-field-wrapper');
    window.removeEventListener('scroll', this.hideSearchFromNavbar, true);
    searchFieldWrapper.setAttribute('style', 'display: inline');
  }

  addStickyPadding() {
    const homepage = document.getElementById('homepage');
    if (window.pageYOffset >= 65) {
      homepage.classList.add('sticky-padding');
    } else {
      homepage.classList.remove('sticky-padding');
    }
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
      </div>
    );
  }
}

export default HomePage;
