import merge from 'lodash/merge'; 

import { 
  RECEIVE_SEARCH_RESULTS,
  RECEIVE_NO_RESULTS
} from '../actions/search_actions'; 

const searchReducer = ( state = { }, action ) => {
  Object.freeze(state); 

  switch (action.type) {
    case RECEIVE_SEARCH_RESULTS:
      return merge({}, action.searchResults); 
    case RECEIVE_NO_RESULTS:
      return {}; 
    default:
      return state; 
  }
};

export default searchReducer; 