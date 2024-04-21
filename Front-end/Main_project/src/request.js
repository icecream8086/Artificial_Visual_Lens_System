import axios from 'axios';
import { apiTarget } from '@/../config.js';
const request = axios.create({
  baseURL: '' + apiTarget,
  timeout: 5000,
  withCredentials: true
});

request.interceptors.request.use(config => {
  if (config.url !== '/api/auth/signup') {
    if(localStorage.getItem('token')!==null){
      config.headers.Authorization = localStorage.getItem('token');
    }
  }
  return config;
}, error => {
  return Promise.reject(error);
});

request.interceptors.response.use(response => {
  return response;
}, error => {
  return Promise.reject(error);
});

export default request;
