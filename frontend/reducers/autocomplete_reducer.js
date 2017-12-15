import merge from 'lodash/merge';
import _ from 'lodash';

import {
  AUTOCOMPLETE,
  RECEIVE_NO_AUTOCOMPLETE,
} from '../actions/search_actions';

const searchReducer = (state = {}, action ) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_NO_AUTOCOMPLETE:
      return {};
    case AUTOCOMPLETE:
      const terms = _.map(action.results.terms, 'text');
      return merge ({}, {
        terms,
        businesses: action.results.businesses
      });
    default:
      return state;
  }
};

export default searchReducer;
