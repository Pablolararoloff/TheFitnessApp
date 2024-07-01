import axios from 'axios';

const API_BASE_URL = 'https://your-api-url.com';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const login = async (username: string, password: string) => {
  const response = await api.post('/login', { username, password });
  return response.data;
};

export const register = async (username: string, password: string) => {
  const response = await api.post('/register', { username, password });
  return response.data;
};
