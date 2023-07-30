import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileFirstName } from './getProfileFirstName';

describe('getProfileFirstName.test', () => {
  test('should return error', () => {
    const testData = {
      username: 'admin',
      age: 22,
      country: Country.Armenia,
      firstname: 'AAAA',
      lastname: 'BBBBB',
      city: 'Ccccc',
      currency: Currency.RUB,
    };
    const state: DeepPartial<StateSchema> = {
      profile: {
        data: testData,
      },
    };
    expect(getProfileFirstName(state as StateSchema)).toEqual('AAAA');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileFirstName(state as StateSchema)).toEqual('');
  });
});
