 import { combineReducers } from 'redux';
import search from './search_reducer';
import businesses from './businesses_reducer';
import autocomplete from './autocomplete_reducer';

const entitiesReducer = combineReducers({
    search,
    autocomplete,
    businesses
});

export default entitiesReducer;
