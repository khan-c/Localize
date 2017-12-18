import axios from 'axios';

export const createBusiness = formBusiness => {
  console.log("business_api createBusiness");
  // return axios.post('http://localhost:8000/api/businesses', { formBusiness });
  return axios.post(
    'https://api.mlab.com/api/1/databases/localize/collections/businesses?apiKey=${}',
    { formBusiness });
};

// export const fetchAllBusinesses = () => (
//   axios.get('/api/businesses')
// );

export const fetchBusiness = businessId => {
  const name = businessId.slice(0,-9);
  // return axios.get(`/api/businesses/${name}`);
  const query = JSON.stringify({name});
  return axios.get(`https://api.mlab.com/api/1/databases/localize/collections/businesses?q={"name":"${name}"}&fo=true&apiKey=RSX9tQBueBgDG6bL6D5kF1jsGdtXWSzX`)
};
