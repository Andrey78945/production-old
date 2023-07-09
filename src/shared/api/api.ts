import axios from 'axios';
import { USER_LOCALSTORIGE_KEY } from 'shared/const/localstorige';

export const $api = axios.create({
  baseURL: __API__,
  headers: {
    authorization: localStorage.getItem(USER_LOCALSTORIGE_KEY) ?? '',
  },
});
