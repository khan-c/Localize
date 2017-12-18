import { getBusiness } from '../util/yelp_api';
import * as BusinessAPIUtil from '../util/business_api';

export const START_LOADING_SINGLE_BUSINESS = 'START_LOADING_SINGLE_BUSINESS';
export const RECEIVE_BUSINESS = 'RECEIVE_BUSINESS';
export const RECEIVE_NO_BUSINESS = 'RECEIVE_NO_BUSINESS';

export const startLoadingSingleBusiness = () => ({
  type: START_LOADING_SINGLE_BUSINESS
});

// Is this redundant...??? LOL
export const receiveABusiness = business => ({
  type: RECEIVE_BUSINESS,
  business
});

export const receiveBusiness = results => ({
  type: RECEIVE_BUSINESS,
  business: results.data.data // an array of objects
});

export const receiveNoBusiness = () => ({
  type: RECEIVE_NO_BUSINESS,
});

export const showBusiness = businessId => dispatch => {
  dispatch(startLoadingSingleBusiness());
  if (businessId.slice(-8) === 'localize') {
    return BusinessAPIUtil.fetchBusiness(businessId)
      .then( results => {
        console.log(results);
        dispatch(receiveBusiness(results)); },
        errors => console.log(errors)
    );
  }
  return getBusiness(businessId).then( results => {
    dispatch(receiveBusiness(results));
  });
};

export const createBusiness = formBusiness => dispatch => (
  BusinessAPIUtil.createBusiness(formBusiness).then(
    business => dispatch(receiveABusiness(business))
  )
);

export const clearBusiness = () => dispatch => (
  dispatch(receiveNoBusiness())
);
