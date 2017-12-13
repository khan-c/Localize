import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'; 

import { getBusiness, search } from './util/yelp_api'; 
import { getSearch } from './actions/search_actions'; 


document.addEventListener("DOMContentLoaded", () => {
  let store = configureStore(); 
  const root = document.getElementById('root');

  window.getBusiness = getBusiness; 
  window.search = search; 
  window.getSearch = getSearch; 

  ReactDOM.render(<h1>LOCALIZER</h1>, root);
});
