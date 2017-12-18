import merge from 'lodash/merge';

import {
  RECEIVE_BUSINESS,
  START_LOADING_SINGLE_BUSINESS,
} from '../actions/business_actions';

const initialState = {
  singleBusinessLoading: true,
};

const loadingReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type){
    case START_LOADING_SINGLE_BUSINESS:
      return merge({}, state, { singleBusinessLoading: true });
    case RECEIVE_BUSINESS:
      return merge({}, state, { singleBusinessLoading: false });
    default:
      return state;
  }
};

export default loadingReducer;
