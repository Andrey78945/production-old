import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { User, userActions } from 'entities/User';
import i18n from 'shared/config/i18n/i18n';
import { USER_LOCALSTORIGE_KEY } from 'shared/const/localstorige';

export interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
  'login/loginByUsername',
  async ({ username, password }, thunkAPI) => {
    const { extra, dispatch, rejectWithValue } = thunkAPI;
    try {
      const response = await extra.api.post<User>('/login', {
        username,
        password,
      });

      if (!response.data) throw new Error('Responce is empty');

      localStorage.setItem(USER_LOCALSTORIGE_KEY, JSON.stringify(response.data));
      dispatch(userActions.setAuthData(response.data));

      extra.navigate?.('/about');

      return response.data;
    } catch (error) {
      return rejectWithValue(i18n.t('Вы ввели неверный логин или пароль'));
    }
  }
);
