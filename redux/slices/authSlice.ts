import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginPayload, AuthState } from '../../types/SliceType' 

const initialState: AuthState = {
  token: null,
  email: null,
  pin: null,
  uid: null,
  isAuthenticated: false,
};

console.log('initialstate', initialState);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<LoginPayload>) => {
      state.isAuthenticated = true;
      state.uid = action.payload.uid;
      state.email = action.payload.email;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.uid = null;
      state.email = null;
      state.pin = null; 
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    clearToken: (state) => {
      state.token = null;
    },
  },
});

export const { login, logout, setToken, clearToken } = authSlice.actions;
export default authSlice.reducer;
