import axios from 'axios';

export const fetchCurrentUser = () => (
  axios.get('/api/current_user')
);

export const logout = () => (
  axios.get('/api/logout')
);
