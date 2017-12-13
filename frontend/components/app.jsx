import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './navbar/navbar';
import Footer from './footer/footer';
import ResultsIndexContainer from '../components/search/results_index_container'; 

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <ResultsIndexContainer />
      </div>
    );
  }
}

export default App;
