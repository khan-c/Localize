import { search, fetchAutoComplete } from '../util/yelp_api';
import { fetchLatLng } from '../util/location_util';

export const SEARCH_ALL = 'SEARCH_ALL';
export const RECEIVE_NO_SEARCH_RESULTS = 'RECEIVE_NO_SEARCH_RESULTS';
export const AUTOCOMPLETE = 'AUTOCOMPLETE';
export const RECEIVE_NO_AUTOCOMPLETE = 'RECEIVE_NO_AUTOCOMPLETE';

export const searchAll = results => {
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
  return (
    fetchAutoComplete(query).then( results => {
      dispatch(autoComplete(results));
    })
  );
};

const receiveNoResults = () => ({
  type: RECEIVE_NO_SEARCH_RESULTS,
});

const receiveNoAutocomplete = () => ({
  type: RECEIVE_NO_AUTOCOMPLETE,
});

export const clearSearchResults = () => dispatch => (
  dispatch(receiveNoResults())
);

export const clearAutocomplete = () => dispatch => (
  dispatch(receiveNoAutocomplete())
);
