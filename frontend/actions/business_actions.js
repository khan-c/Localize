import { getBusiness } from '../util/yelp_api';
import * as BusinessAPIUtil from '../util/business_api';

export const GET_BUSINESS = 'GET_BUSINESS';
export const RECEIVE_BUSINESS = 'RECEIVE_BUSINESS';

// Is this redundant...??? LOL
export const receiveBusiness = business => ({
  type: RECEIVE_BUSINESS,
  business
});

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

export const createBusiness = formBusiness => dispatch => (
  BusinessAPIUtil.createBusiness(formBusiness).then(
    business => dispatch(receiveBusiness(business))
  )
);
