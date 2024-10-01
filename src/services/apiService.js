import Axios from 'axios-observable';
import { getAccessToken, isLogged } from './sessionService';

const baseUrl = 'http://localhost:8000/api';

const axios = Axios.create({
  baseURL: `${baseUrl}/`,
});

axios.interceptors.request.use(function (config) {
  if (isLogged()) {
    config.headers.Authorization = `Bearer ${getAccessToken()}`;
  }
  return config;
});

export default axios;
