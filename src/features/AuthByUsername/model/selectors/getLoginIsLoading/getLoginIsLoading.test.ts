import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginIsLoading } from './getLoginIsLoading';

describe('getLoginError.test', () => {
  test('should return true', () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        username: '123',
        password: 'adgk',
        isLoading: true,
      },
    };
    expect(getLoginIsLoading(state as StateSchema)).toEqual(true);
  });

  test('should work with empty state and return false', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
  });
});
