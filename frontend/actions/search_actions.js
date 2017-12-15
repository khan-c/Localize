import { search, fetchAutoComplete } from '../util/yelp_api'; 

export const SEARCH_ALL = 'SEARCH_ALL'; 
export const RECEIVE_NO_SEARCH_RESULTS = 'RECEIVE_NO_SEARCH_RESULTS';
export const AUTOCOMPLETE = 'AUTOCOMPLETE'; 

export const searchAll = results => {
  // console.log("Search Results", results.config); 
  return(
    {
      type: SEARCH_ALL, 
      businesses: results.data.data.businesses, // an array of objects
      region: results.data.data.region,
      query: results.config.params
    }
  ); 
}; 

export const autoComplete = results => {
  console.log("from dispatch autocomplete", results.data.data); 
  return(
    {
      type: AUTOCOMPLETE, 
      results: results.data.data // an array of objects
    }
  ); 
}; 

//sample query format for search 
// const defaultQuery = {
//   term: "plumbing", 
//   latitude: "37.786882",  
//   longitude: "-122.399972", 
//   category: "" 
// }; 
export const getSearch = query => dispatch => {
  return (
    search(query).then( results => {
      dispatch(searchAll(results)); 
    }) 
  ); 
};
 
// format of query for autocomplete (notice text and not term)
// const defaultQuery = {
//   text: "plumbing", 
//   latitude: "37.786882",  
//   longitude: "-122.399972", 
//   category: "" 
// }; 

export const getAutoComplete = query => dispatch => {
  console.log("autocomplete action", query); 
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

