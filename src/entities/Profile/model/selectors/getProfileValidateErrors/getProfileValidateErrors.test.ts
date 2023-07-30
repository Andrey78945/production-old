import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileValidateErrors } from './getProfileValidateErrors';
import { ValidateProfileError } from '../../types/profile';

describe('getProfileValidateErrors.test', () => {
  test('should return state', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateError: [
          ValidateProfileError.INCORRECT_AGE,
          ValidateProfileError.NO_DATA,
          ValidateProfileError.SERVER_ERROR,
        ],
      },
    };
    expect(getProfileValidateErrors(state as StateSchema)).toEqual([
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.NO_DATA,
      ValidateProfileError.SERVER_ERROR,
    ]);
  });

  test('should work with empty state and return an empty arrow', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileValidateErrors(state as StateSchema)).toEqual([]);
  });
});
