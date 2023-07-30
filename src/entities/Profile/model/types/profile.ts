import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

export interface Profile {
  id?: string;
  firstname?: string;
  lastname?: string;
  age?: number;
  currency?: Currency;
  country?: Country;
  city?: string;
  username?: string;
  avatar?: string;
}

export const enum ValidateProfileError {
  'INCORRECT_NAME_OR_SURNAME' = 'INCORRECT NAME OR SURNAME',
  'INCORRECT_AGE' = 'INCORRECT AGE',
  'INCORRECT_COUNTRY' = 'INCORRECT COUNTRY',
  'NO_DATA' = 'NO DATA',
  'SERVER_ERROR' = 'SERVER ERROR',
}

export interface ProfileSchema {
  data?: Profile;
  form?: Profile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
  validateError: ValidateProfileError[];
}
