import { createAction } from 'redux-actions';

import {
  AUTHORIZATION_FLAG,
  CHECK_LOG_AND_PASS,
  CURRENT_USER,
  SHOW_LOG_IN,
  SHOW_REGISTRATION,
  USERS_ARRAY,
} from '../constants/autorizationConst';

import { DATA_ALL_BOOKS, REQUEST_ALL_BOOKS } from '../constants/allBooksConst';
import { SUCCESSFUL_CHANGE, TOGGLE_MENU } from '../constants/settingsConst';
import { ARE_THERE_ANY_BOOKS, ARE_THERE_LIST_YOUR_BOOKS } from '../constants/yourOrders';

// Authorization

export const showRegistrationActionCreator = createAction(SHOW_REGISTRATION);
export const showLogInActionCreator = createAction(SHOW_LOG_IN);
export const authorizationFlagActionCreator = createAction(AUTHORIZATION_FLAG);
export const usersArrayActionCreator = createAction(USERS_ARRAY);
export const currentUserActionCreator = createAction(CURRENT_USER);
export const checkLogAndPassActionCreator = createAction(CHECK_LOG_AND_PASS);

// AllBooks

export const requestBookActionCreator = createAction(REQUEST_ALL_BOOKS);
export const dataAllBooksActionCreator = createAction(DATA_ALL_BOOKS);

// Your orders

export const areThereAnyBooksActionCreator = createAction(ARE_THERE_ANY_BOOKS);
export const areThereListYourBooksActionCreator = createAction(ARE_THERE_LIST_YOUR_BOOKS);

// Settings

export const toggleMenuActionCreator = createAction(TOGGLE_MENU);
export const successfulChangeActionCreator = createAction(SUCCESSFUL_CHANGE);
