import axios from 'axios';

export const createBusiness = formBusiness => (
  axios.post('http://localhost:8000/api/businesses', { formBusiness })
);

export const fetchAllBusinesses = () => (
  axios.get('http://localhost:8000/api/businesses')
);
