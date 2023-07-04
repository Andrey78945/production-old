import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginError.test', () => {
  test('should return true', () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        password: '123123',
      },
    };
    expect(getLoginPassword(state as StateSchema)).toEqual('123123');
  });

  test('should work with empty state and return false', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginPassword(state as StateSchema)).toEqual('');
  });
});
