import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, refresh, register } from './operations';

const handleUserEnter = (state, { payload }) => {
  state.isLoggedIn = true;
  state.token = payload.token;
  state.user = payload.user;
  state.error = null;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    error: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: builder =>
    builder
      .addCase(logIn.fulfilled, handleUserEnter)
      .addCase(register.fulfilled, handleUserEnter)
      .addCase(logOut.fulfilled, state => {
        state.isLoggedIn = false;
        state.token = null;
        state.user = { name: null, mail: null };
        state.error = null;
      })
      .addCase(refresh.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.error = null;
        state.isRefreshing = false;
      })
      .addCase(refresh.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refresh.rejected, state => {
        state.isRefreshing = false;
      }),
});

export const authReducer = authSlice.reducer;
