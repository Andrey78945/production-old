import axios from 'axios';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { updateProfileData } from './updateProfileData';
import { ValidateProfileError } from '../../types/profile';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

const testData = {
  username: 'admin',
  age: 22,
  country: Country.Armenia,
  firstname: 'AAAA',
  lastname: 'BBBBB',
  city: 'Ccccc',
  currency: Currency.RUB,
};

describe('updateProfileData.test', () => {
  test('success fetch', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, { profile: { form: testData } });
    thunk.api.put.mockReturnValue(Promise.resolve({ data: testData }));
    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(testData);
  });

  test('error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, { profile: { form: testData } });
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
  });

  test('validation error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, { profile: { form: { ...testData, age: 0 } } });
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidateProfileError.INCORRECT_AGE]);
  });
});
