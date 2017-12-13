import merge from 'lodash/merge'; 

import { SEARCH_ALL } from '../actions/search_actions'; 


const searchReducer = (state = {}, action ) => {
  Object.freeze(state);
  switch (action.type) {
    case SEARCH_ALL:
      return merge ({}, action.results);   
    default:
      return state; 
  }
};

export default searchReducer; 

