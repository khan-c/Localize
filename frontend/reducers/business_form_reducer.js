import merge from 'lodash/merge';
import {
  RECEIVE_BUSINESS_DETAILS,
  CLEAR_BUSINESS_DETAILS
} from '../actions/business_form_actions';

const businessFormReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_BUSINESS_DETAILS:
      return merge({}, action.details);
    case CLEAR_BUSINESS_DETAILS:
      return {};
    default:
      return state;
  }
};

export default businessFormReducer;
