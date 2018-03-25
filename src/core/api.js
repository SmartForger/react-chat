import axios from 'axios';

const baseURL = 'http://localhost:8000';

export const registerUser = (data) =>
  axios.post(baseURL + '/auth/register', data);

export const loginUser = (data) =>
  axios.post(baseURL + '/auth/login', data);
