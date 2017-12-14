import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
require('./assets/stylesheets/application.scss');

import { fetchCurrentUser } from './actions/session_actions';        
import { getBusiness, search, fetchAutoComplete } from './util/yelp_api'; 
import { getSearch, getAutoComplete } from './actions/search_actions'; 
import { showBusiness } from './actions/business_actions'; 
import { geoLocate } from './util/geolocation_util'; 

const defaultQuery = {
  text: "laundry", 
  latitude: "37.786882",  
  longitude: "-122.399972", 
  category: "" 
};

document.addEventListener("DOMContentLoaded", () => {
  let store = configureStore();
  const root = document.getElementById('root');

  window.getState = store.getState;
  window.fetchCurrentUser = fetchCurrentUser;
  window.getBusiness = getBusiness; 
  window.search = search; 
  window.getSearch = getSearch(defaultQuery); 
  window.getAutoComplete = getAutoComplete(defaultQuery); 
  window.showBusiness = showBusiness("blackline-construction-san-francisco"); 
  window.dispatch = store.dispatch; 
  window.fetchAutoComplete = fetchAutoComplete; 
  window.geoLocate = geoLocate; 

  ReactDOM.render(<Root store={store}/>, root);
});
