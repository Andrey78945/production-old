import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { USER_LOCALSTORIGE_KEY } from 'shared/const/localstorige';
import { UserSchema, User } from '../types/userSchema';

const initialState: UserSchema = {
  _inited: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
    },

    initAuthData: (state) => {
      const user = localStorage.getItem(USER_LOCALSTORIGE_KEY);
      if (user) state.authData = JSON.parse(user);
      state._inited = true;
    },
    logout: (state) => {
      state.authData = undefined;
      localStorage.removeItem(USER_LOCALSTORIGE_KEY);
    },
  },
});

export const { actions: userActions } = userSlice;

export const { reducer: userReducer } = userSlice;
