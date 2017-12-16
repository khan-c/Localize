import { combineReducers } from 'redux';

import autocomplete from './autocomplete_fields_reducer';
import businessForm from './business_form_reducer';

const uiReducer = combineReducers({
  autocomplete,
  businessForm
});

export default uiReducer;
