import axios from 'axios';

export const fetchCurrentUser = () => (
  axios.get('http://localhost:8000/api/current_user')
);

export const logout = () => (
  axios.get('http://localhost:8000/api/logout')
);
