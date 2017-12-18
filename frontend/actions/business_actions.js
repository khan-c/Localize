import { getBusiness } from '../util/yelp_api';

export const START_LOADING_SINGLE_BUSINESS = 'START_LOADING_SINGLE_BUSINESS';
export const RECEIVE_BUSINESS = 'RECEIVE_BUSINESS';
export const RECEIVE_NO_BUSINESS = 'RECEIVE_NO_BUSINESS';

export const startLoadingSingleBusiness = () => ({
  type: START_LOADING_SINGLE_BUSINESS
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
  return getBusiness(businessId).then( results => {
    dispatch(receiveBusiness(results));
  });
};

export const clearBusiness = () => dispatch => (
  dispatch(receiveNoBusiness())
);
