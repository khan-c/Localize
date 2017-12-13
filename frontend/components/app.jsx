import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './navbar/navbar';
import Footer from './footer/footer';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Navbar />
      </div>
    );
  }
}

export default App;
