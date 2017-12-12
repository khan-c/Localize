import { combineReducers } from 'redux';
import search from './search_reducer';

const entitiesReducer = combineReducers({
    search
});

export default entitiesReducer;
