import merge from 'lodash/merge';

import { GET_BUSINESS } from '../actions/business_actions'; 

const businessesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case GET_BUSINESS:
      return merge ({}, action.business); 
    default:
      return state;
  }
};

export default businessesReducer;
