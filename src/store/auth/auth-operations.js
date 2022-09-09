import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { token } from 'api/auth';
import * as authApi from 'api/auth';

const register = createAsyncThunk('auth/register', async user => {
  try {
    const data = await authApi.registerUser(user);
    token.set(data.token);
    return data;
  } catch (error) {
    toast.error('Something went wrong, please try again.');
  }
});

const logIn = createAsyncThunk('auth/login', async user => {
  try {
    const data = await authApi.logIn(user);
    token.set(data.token);
    return data;
  } catch (error) {
    toast.error('Something went wrong, please try again.');
  }
});

const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await authApi.logOut();
    token.unset();
  } catch (error) {
    toast.error('Something went wrong, please try again.');
  }
});

const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      console.log('No token');
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const data = await authApi.fetchCurrentUser();
      return data;
    } catch (error) {
      toast.error('Something went wrong, please try again.');
    }
  }
);

const operations = {
  register,
  logOut,
  logIn,
  fetchCurrentUser,
};
export default operations;
