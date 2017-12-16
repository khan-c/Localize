export const RECEIVE_BUSINESS_DETAILS = 'RECEIVE_BUSINESS_DETAILS';
export const CLEAR_BUSINESS_DETAILS = 'CLEAR_BUSINESS_DETAILS';

export const receiveBusinessDetails = details => ({
  type: RECEIVE_BUSINESS_DETAILS,
  details
});

export const clearBusinessDetails = () => ({
  type: CLEAR_BUSINESS_DETAILS
});
