import axios from 'axios';
import { AsyncThunk, Dispatch } from '@reduxjs/toolkit';
import { StateSchema, ThunkConfig } from 'app/providers/StoreProvider';
import { User, userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { LoginByUsernameProps, loginByUsername } from './loginByUsername';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

describe('loginByUsername.test', () => {
  // let dispatch: Dispatch;
  // let getState: () => StateSchema;

  // beforeEach(() => {
  //   dispatch = jest.fn();
  //   getState = jest.fn();
  // })

  // test('success login', async () => {
  //   const userData = {username: '123', id: '1'};
  //   mockedAxios.post.mockReturnValue(Promise.resolve({data: userData}));
  //   const action = loginByUsername({username: '123', password: '123'});
  //   const result = await action(dispatch, getState, undefined);

  //   expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
  //   expect(dispatch).toHaveBeenCalledTimes(3);
  //   expect(mockedAxios.post).toHaveBeenCalled();
  //   expect(result.meta.requestStatus).toBe('fulfilled');
  //   expect(result.payload).toEqual(userData);
  // })

  // test('error, user not found', async () => {
  //   mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
  //   const action = loginByUsername({ username: '123', password: '123' });
  //   const result = await action(dispatch, getState, undefined);

  //   expect(mockedAxios.post).toHaveBeenCalled();
  //   expect(dispatch).toHaveBeenCalledTimes(2);
  //   expect(result.meta.requestStatus).toBe('rejected');
  //   expect(result.payload).toBe('Вы ввели неверный логин или пароль');
  // });

  test('success login', async () => {
    const userData = { username: '123', id: '1' };

    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockReturnValue(Promise.resolve({ data: userData }));
    const result = await thunk.callThunk({ username: '123', password: '123' });

    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(userData);
  });

  test('error, user not found', async () => {
    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk({ username: '123', password: '123' });

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('Вы ввели неверный логин или пароль');
  });
});
