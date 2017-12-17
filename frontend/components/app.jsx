import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './navbar/navBar';
import Footer from './footer/footer';
import HomePage from './homepage/homepage';
import BusinessShowContainer from './business_show/business_show_container';
//testing 
import ResultsIndexContainer from '../components/search/results_index_container'; 
import Map from '../components/search/map'; 
import SearchPage from './search/search_page'; 
import SearchPageContainer from './search/search_page_container'; 

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/business/:id" component={BusinessShowContainer}/>
          <Route path="/search" component={SearchPageContainer}/>
        </Switch>
      </div>
    );
  }
}

export default App;
