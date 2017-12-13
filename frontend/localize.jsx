import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
require('./assets/stylesheets/application.scss');

import { getBusiness, search } from './util/yelp_api';
import { getSearch } from './actions/search_actions';
import { fetchCurrentUser } from './actions/session_actions';

document.addEventListener("DOMContentLoaded", () => {
  let store = configureStore();
  const root = document.getElementById('root');

  window.getState = store.getState;
  window.getBusiness = getBusiness;
  window.search = search;
  window.getSearch = getSearch;
  window.fetchCurrentUser = fetchCurrentUser;
  window.dispatch = store.dispatch;

  ReactDOM.render(<Root store={store}/>, root);
});
