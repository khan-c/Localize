import merge from 'lodash/merge';

import {
  RECEIVE_AUTOCOMPLETE_VALUES,
  RECEIVE_NO_AUTOCOMPLETE_VALUES,
} from '../actions/autocomplete_fields_actions';

const defaultState = {
  term: '',
  location: ''
};

const autocompleteFieldsReducer = (state = defaultState, action ) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_AUTOCOMPLETE_VALUES:
      const oldState = merge({}, state);
      return merge ({}, oldState, {
        term: action.query.text,
        location: action.query.location
      });
    case RECEIVE_NO_AUTOCOMPLETE_VALUES:
      return {
        term: '',
        location: ''
      };
    default:
      return state;
  }
};

export default autocompleteFieldsReducer;
