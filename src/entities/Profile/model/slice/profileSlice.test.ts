import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ProfileSchema, ValidateProfileError } from '../types/profile';
import { profileReducer, profileActions } from './profileSlice';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

const testData = {
  username: 'admin',
  age: 22,
  country: Country.Armenia,
  firstname: 'AAAA',
  lastname: 'BBBBB',
  city: 'Ccccc',
  currency: Currency.RUB,
};

describe('profileSlice.test', () => {
  test('test setReadonly', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false };
    expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true))).toEqual({
      readonly: true,
    });
  });

  test('test updateProfile', () => {
    const state: DeepPartial<ProfileSchema> = { form: { username: '123' } };
    expect(
      profileReducer(
        state as ProfileSchema,
        profileActions.updateProfile({
          username: '123456',
        })
      )
    ).toEqual({
      form: { username: '123456' },
    });
  });

  test('test cancelEdit', () => {
    const state: DeepPartial<ProfileSchema> = { data: testData, form: { username: '' } };
    expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit())).toEqual({
      readonly: true,
      validateError: [],
      data: testData,
      form: testData,
    });
  });

  test('test update profile service pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateError: [ValidateProfileError.SERVER_ERROR],
    };

    expect(profileReducer(state as ProfileSchema, updateProfileData.pending)).toEqual({
      isLoading: true,
      validateError: [],
    });
  });

  test('test update profile service fullfiled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    };

    expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(testData, ''))).toEqual({
      isLoading: false,
      validateErrors: undefined,
      readonly: true,
      validateError: [],
      form: testData,
      data: testData,
    });
  });
});
