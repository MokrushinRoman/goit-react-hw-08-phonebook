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
  async (credentials, thunkAPI) => {}
);
export const logIn = createAsyncThunk(
  'auth/logIn',
  async (credentials, thunkAPI) => {}
);
export const logOut = createAsyncThunk('auth/logOut', async (_, thunkAPI) => {
  unsetToken();
});
export const refresh = createAsyncThunk(
  'auth/register',
  async (_, thunkAPI) => {}
);
