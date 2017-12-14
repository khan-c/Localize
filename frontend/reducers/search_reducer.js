import merge from 'lodash/merge'; 

import { 
  SEARCH_ALL,
  RECEIVE_NO_SEARCH_RESULTS,
  AUTOCOMPLETE
} from '../actions/search_actions'; 

const searchReducer = (state = {}, action ) => {
  console.log("action", action); 
  Object.freeze(state);
  switch (action.type) {
    case SEARCH_ALL:
      return merge ({}, {
        businesses: action.businesses, 
        region: action.region, 
        query: action.query 
      }
      );  
    case RECEIVE_NO_SEARCH_RESULTS:
      return {};
    case AUTOCOMPLETE:
      return merge ({}, action.results); 
    default:
      return state; 
  }
};

export default searchReducer; 