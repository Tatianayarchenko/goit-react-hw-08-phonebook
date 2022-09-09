import { api } from './api';

export const token = {
  set(token) {
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    api.defaults.headers.common.Authorization = '';
  },
};

export async function registerUser(user) {
  const { data } = await api.post('/users/signup', user);
  return data;
}

export async function logIn(user) {
  const { data } = await api.post('/users/login', user);
  return data;
}

export async function logOut() {
  const { data } = await api.post('/users/logout');
  return data;
}

export async function fetchCurrentUser() {
  const { data } = await api.get('/users/current');
  return data;
}
