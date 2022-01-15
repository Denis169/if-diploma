import { handleActions } from 'redux-actions';

import {
  authorizationFlagActionCreator,
  checkLogAndPassActionCreator,
  currentUserActionCreator,
  showLogInActionCreator,
  showRegistrationActionCreator,
  usersArrayActionCreator,
} from '../actionCreators';

const initialState = {
  showRegistration: false,
  showLogIn: false,
  authorizationFlag: false,
  usersArray: [{
    name: 'Denis',
    birthdate: new Date(1989, 6, 10),
    email: 'qqq@www.com',
    password: '123',
    books: [],
  }, {
    name: 'Masha',
    birthdate: new Date(1992, 10, 15),
    email: 'aaa@sss.com',
    password: '1234',
    books: [],
  }, {
    name: 'Leo',
    birthdate: new Date(2021, 9, 5),
    email: 'zzz@xxx.com',
    password: '987',
    books: [],
  }],
  currentUser: {},
  checkLogAndPass: false,
};

const authorizationReducer = handleActions(
  {
    [showRegistrationActionCreator]: (state, { payload }) => ({ ...state, showRegistration: payload }),
    [showLogInActionCreator]: (state, { payload }) => ({ ...state, showLogIn: payload }),
    [authorizationFlagActionCreator]: (state, { payload }) => ({ ...state, authorizationFlag: payload }),
    [usersArrayActionCreator]: (state, { payload }) => ({ ...state, usersArray: payload }),
    [currentUserActionCreator]: (state, { payload }) => ({ ...state, currentUser: payload }),
    [checkLogAndPassActionCreator]: (state, { payload }) => ({ ...state, checkLogAndPass: payload }),
  },
  initialState,
);

export default authorizationReducer;
