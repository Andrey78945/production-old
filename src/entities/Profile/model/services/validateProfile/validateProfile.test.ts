import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { validateProfile } from './validateProfile';
import { ValidateProfileError } from '../../types/profile';

const testData = {
  username: 'admin',
  age: 22,
  country: Country.Armenia,
  firstname: 'AAAA',
  lastname: 'BBBBB',
  city: 'Ccccc',
  currency: Currency.RUB,
};

describe('fetchProfileData.test', () => {
  test('success fetch', async () => {
    const result = validateProfile(testData);

    expect(result).toEqual([]);
  });

  test('without firstname and lastname', async () => {
    const result = validateProfile({ ...testData, firstname: '', lastname: '' });

    expect(result).toEqual([ValidateProfileError.INCORRECT_NAME_OR_SURNAME]);
  });

  test('without age', async () => {
    const result = validateProfile({ ...testData, age: 0 });

    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
  });

  test('without age', async () => {
    const result = validateProfile({ ...testData, age: undefined });

    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
  });

  test('without country', async () => {
    const result = validateProfile({ ...testData, country: undefined });

    expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
  });

  test('without all', async () => {
    const result = validateProfile({});

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_NAME_OR_SURNAME,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY,
    ]);
  });

  test('without all', async () => {
    const result = validateProfile(undefined);

    expect(result).toEqual([ValidateProfileError.NO_DATA]);
  });
});
