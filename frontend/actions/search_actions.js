import { search } from '../util/yelp_api'; 

export const SEARCH_ALL = 'SEARCH_ALL'; 

export const searchAll = results => {
  console.log("results-actions", results); 
  return(
    {
      type: SEARCH_ALL, 
      results
    }
  ); 
}; 

export const getSearch = query => dispatch => {
  console.log("query actions", query); 
  return (
    search(query).then( results => dispatch(searchAll(results)))
  ); 
};
 

  