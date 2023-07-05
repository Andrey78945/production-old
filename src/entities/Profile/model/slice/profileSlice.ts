import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ProfileSchema, Profile } from '../types/profile';

const initialState: ProfileSchema = {
  readonly: true,
  isLoading: false,
  error: null,
  data: null,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setAuthData: (state, action: PayloadAction<Profile>) => { },
  },
});

export const { actions: profileActions } = profileSlice;

export const { reducer: profileReducer } = profileSlice;
