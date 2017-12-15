import React from 'react';
import LandingPage from './landing_page';
import BusinessFormContainer from '../business/form_container';
import { Route } from 'react-router-dom';

class HomePage extends React.Component {
  render () {
    return (
      <div className='homepage'>
        <LandingPage />
        <Route path="/associatebusiness" component={BusinessFormContainer} />
      </div>
    );
  }
}

export default HomePage;
