import merge from 'lodash/merge';

import {
  RECEIVE_AUTOCOMPLETE,
  RECEIVE_NO_AUTOCOMPLETE_VALUES,
} from '../actions/autocomplete_fields_actions';

const autocompleteFieldsReducer = (state = {}, action ) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_AUTOCOMPLETE:
      const m = merge ({}, {
        term: action.query.text,
        location: action.query.location
      });
      return merge ({}, {
        term: action.query.text,
        location: action.query.location
      });
    case RECEIVE_NO_AUTOCOMPLETE_VALUES:
      return {};
    default:
      return state;
  }
};

export default autocompleteFieldsReducer;
