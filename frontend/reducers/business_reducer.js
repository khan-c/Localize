import merge from 'lodash/merge';

import { RECEIVE_BUSINESS, RECEIVE_NO_BUSINESS } from '../actions/business_actions';

const businessesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_BUSINESS:
      return merge ({}, action.business);
    case RECEIVE_NO_BUSINESS:
      return {};
    default:
      return state;
  }
};

export default businessesReducer;
