import { getBusiness } from '../util/yelp_api';

export const RECEIVE_BUSINESS = 'RECEIVE_BUSINESS';
export const RECEIVE_NO_BUSINESS = 'RECEIVE_NO_BUSINESS';

export const receiveBusiness = results => ({
  type: RECEIVE_BUSINESS,
  business: results.data.data // an array of objects
});

export const receiveNoBusiness = () => ({
  type: RECEIVE_NO_BUSINESS,
});

export const showBusiness = query => dispatch => (
  getBusiness(query).then( results => {
    dispatch(receiveBusiness(results));
  })
);

export const clearBusiness = () => dispatch => (
  dispatch(receiveNoBusiness())
);
