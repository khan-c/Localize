 import { combineReducers } from 'redux';
import search from './search_reducer';
import business from './business_reducer';
import autocomplete from './autocomplete_reducer';

const entitiesReducer = combineReducers({
    search,
    autocomplete,
    business
});

export default entitiesReducer;
