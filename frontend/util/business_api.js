import axios from 'axios';
import { mongoConfig } from '../../backend/server/config/keys';

export const createBusiness = formBusiness => {
  // return axios.post('http://localhost:8000/api/businesses', { formBusiness });
  const key = mongoConfig.apikey;
  return axios.post(
    `https://api.mlab.com/api/1/databases/localize/collections/businesses?apiKey=${key}`,
    { formBusiness });
};

// export const fetchAllBusinesses = () => (
//   axios.get('/api/businesses')
// );

export const fetchBusiness = businessId => {
  const name = businessId.slice(0,-9);
  // return axios.get(`/api/businesses/${name}`);
  const query = JSON.stringify({name});
  return axios.get(`https://api.mlab.com/api/1/databases/localize/collections/businesses?q={"name":"${name}"}&fo=true&apiKey=${mongoConfig.apikey}`)
};
