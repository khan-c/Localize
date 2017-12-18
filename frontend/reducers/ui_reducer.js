import { combineReducers } from 'redux';

import autocomplete from './autocomplete_fields_reducer';
import businessForm from './business_form_reducer';
import loading from './loading_reducer';

const uiReducer = combineReducers({
  autocomplete,
  loading,
  businessForm
});

export default uiReducer;
