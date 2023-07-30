import { Profile, ValidateProfileError } from '../../types/profile';

export const validateProfile = (profile?: Profile) => {
  if (!profile) {
    return [ValidateProfileError.NO_DATA];
  }

  const { firstname, lastname, age, country } = profile;
  const errors: ValidateProfileError[] = [];

  if (!firstname || !lastname) {
    errors.push(ValidateProfileError.INCORRECT_NAME_OR_SURNAME);
  }

  if (!age || !Number(age)) {
    errors.push(ValidateProfileError.INCORRECT_AGE);
  }

  if (!country) {
    errors.push(ValidateProfileError.INCORRECT_COUNTRY);
  }

  return errors;
};
