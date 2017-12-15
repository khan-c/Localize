import { combineReducers } from 'redux';

import autocomplete from './autocomplete_fields_reducer';

const uiReducer = combineReducers({
  autocomplete
});

export default uiReducer;
