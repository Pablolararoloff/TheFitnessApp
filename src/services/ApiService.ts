import axios from 'axios';

const API_BASE_URL = 'https://your-api-url.com';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const getSomething = async () => {
  const response = await api.get('/endpoint');
  return response.data;
};
