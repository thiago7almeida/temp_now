import axios from 'axios';
const baseURL = 'https://www.metaweather.com/api';

const api = axios.create({
  baseURL,
});

export default api;
