import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

function setToken(token) {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}
function unsetToken() {
  axios.defaults.headers.common.Authorization = '';
}

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', credentials);
      setToken(data.token);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
export const logIn = createAsyncThunk(
  'auth/logIn',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/login', credentials);
      setToken(data.token);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
export const logOut = createAsyncThunk('auth/logOut', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    unsetToken();
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});
export const refresh = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const token = await thunkAPI.getState().auth.token;
  if (token === null) {
    return thunkAPI.rejectWithValue('No token');
  }
  try {
    setToken(token);
    const { data } = await axios.get('/users/current');
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});
