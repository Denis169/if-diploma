import { createAction } from 'redux-actions';

import {
  INPUT_USER_BIRTHDATE,
  INPUT_USER_EMAIL, INPUT_USER_PASSWORD,
  INPUT_USERNAME,
  SHOW_REGISTRATION, USERS_ARRAY,
} from '../constants/autorizationConst';

// Authorization

export const showRegistrationActionCreator = createAction(SHOW_REGISTRATION);
export const userNameActionCreator = createAction(INPUT_USERNAME);
export const userBirthdateActionCreator = createAction(INPUT_USER_BIRTHDATE);
export const userEmailActionCreator = createAction(INPUT_USER_EMAIL);
export const userPasswordActionCreator = createAction(INPUT_USER_PASSWORD);
export const usersArrayActionCreator = createAction(USERS_ARRAY);
