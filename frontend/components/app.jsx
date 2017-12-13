import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './navbar/navbar';
import Footer from './footer/footer';
import HomePage from './homepage/homepage';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <HomePage />
      </div>
    );
  }
}

export default App;
