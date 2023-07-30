import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
  test('should return profile', () => {
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
        form: testData,
      },
    };
    expect(getProfileForm(state as StateSchema)).toEqual(testData);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });
});
