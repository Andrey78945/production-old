import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ProfileSchema, Profile, ValidateProfileError } from '../types/profile';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

const initialState: ProfileSchema = {
  readonly: true,
  isLoading: false,
  error: undefined,
  data: undefined,
  validateError: [],
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setReadonly: (state, action: PayloadAction<boolean>) => {
      state.readonly = action.payload;
    },
    updateProfile: (state, action: PayloadAction<Profile>) => {
      state.form = {
        ...state.data,
        ...action.payload,
      };
    },
    cancelEdit: (state) => {
      state.form = state.data;
      state.readonly = true;
      state.validateError = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfileData.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
        state.error = undefined;
        state.data = action.payload;
        state.isLoading = false;
        state.form = action.payload;
      })
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.error = action.payload as string;
        state.isLoading = false;
      })
      .addCase(updateProfileData.pending, (state) => {
        state.validateError = [];
        state.isLoading = true;
      })
      .addCase(updateProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
        state.validateError = [];
        state.data = action.payload;
        state.isLoading = false;
        state.form = action.payload;
        state.readonly = true;
      })
      .addCase(updateProfileData.rejected, (state, action) => {
        state.validateError = action.payload as ValidateProfileError[];
        state.isLoading = false;
      });
  },
});

export const { actions: profileActions } = profileSlice;

export const { reducer: profileReducer } = profileSlice;
