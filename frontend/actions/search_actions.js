import { search, fetchAutoComplete } from '../util/yelp_api'; 

export const SEARCH_ALL = 'SEARCH_ALL'; 
export const RECEIVE_NO_SEARCH_RESULTS = 'RECEIVE_NO_SEARCH_RESULTS';
export const AUTOCOMPLETE = 'AUTOCOMPLETE'; 

export const searchAll = results => {
  return(
    {
      type: SEARCH_ALL, 
      businesses: results.data.data.businesses, // an array of objects
      region: results.data.data.region 
    }
  ); 
}; 

export const autoComplete = results => {
  console.log("auto RESUTL", results.data.data); 
  return(
    {
      type: AUTOCOMPLETE, 
      results: results.data.data // an array of objects
    }
  ); 
}; 

export const getSearch = query => dispatch => {
  return (
    search(query).then( results => {
      dispatch(searchAll(results)); 
    }) 
  ); 
};
 
export const getAutoComplete = query => dispatch => {
  console.log("autocomplet eaction", query); 
  return (
    fetchAutoComplete(query).then( results => {
      console.log("auto result", results); 
      dispatch(autoComplete(results)); 
    }) 
  ); 
};

const receiveNoResults = () => ({
  type: RECEIVE_NO_SEARCH_RESULTS,
});

export const clearSearchResults = query => dispatch => (
  dispatch(receiveNoResults())
);

