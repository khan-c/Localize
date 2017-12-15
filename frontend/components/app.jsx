import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './navbar/navbar';
import Footer from './footer/footer';
import ResultsIndexContainer from '../components/search/results_index_container';
import HomePage from './homepage/homepage';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <Switch>
          <Route path="/search" component={ResultsIndexContainer}/>
          <Route path="/" component={HomePage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
