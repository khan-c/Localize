import { combineReducers } from 'redux';
import search from './search_reducer';
import businesses from './businesses_reducer'; 

const entitiesReducer = combineReducers({
    search,
    businesses
});

export default entitiesReducer;
