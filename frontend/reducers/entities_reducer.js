import { combineReducers } from 'redux';
import searchReducer from './search_reducer'; 

// const entitiesReducer = combineReducers({
// });

const entitiesReducer = (state = {}, action ) => {
  switch(action.type) {
    default:
      return state;
  }
};

export default entitiesReducer;
