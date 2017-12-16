import { getBusiness } from '../util/yelp_api';

export const GET_BUSINESS = 'GET_BUSINESS';

export const fetchBusiness = results => {
  return(
    {
      type: GET_BUSINESS,
      business: results.data.data.business // an array of objects
    }
  );
};

export const showBusiness = query => dispatch => {
  return (
    getBusiness(query).then( results => {
      console.log("resultszzzzz", results);
      dispatch(fetchBusiness(results));
    })
  );
};

export const createBusiness = business => dispatch => {

};
