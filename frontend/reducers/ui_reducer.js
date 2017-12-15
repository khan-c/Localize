import { combineReducers } from 'redux';

import autocomplete from './autocomplete_fields_reducer';
import loading from './loading_reducer';

const uiReducer = combineReducers({
  autocomplete,
  loading
});

export default uiReducer;
