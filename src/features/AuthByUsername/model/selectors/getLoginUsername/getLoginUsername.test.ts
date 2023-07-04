import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginError.test', () => {
  test('should return true', () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        username: 'vvv',
      },
    };
    expect(getLoginUsername(state as StateSchema)).toEqual('vvv');
  });

  test('should work with empty state and return false', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginUsername(state as StateSchema)).toEqual('');
  });
});
