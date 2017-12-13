import merge from 'lodash/merge';

const companiesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    default:
      return state;
  }
};

export default companiesReducer;
