import axios from 'axios';

export const createBusiness = formBusiness => {
  return axios.post('/api/businesses', { formBusiness });
};

// export const fetchAllBusinesses = () => (
//   axios.get('/api/businesses')
// );

export const fetchBusiness = (businessId) => (
  axios.get(`/api/businesses/${businessId}`)
);
