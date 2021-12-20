import { handleActions } from 'redux-actions';

import {
  showRegistrationActionCreator,
  userBirthdateActionCreator,
  userEmailActionCreator,
  userNameActionCreator, userPasswordActionCreator, usersArrayActionCreator,
} from '../actionCreators';

const initialState = {
  showRegistration: false,
  userName: '',
  userBirthdate: new Date(),
  userEmail: '',
  userPassword: '',
  usersArray: [],
};

const authorizationReducer = handleActions(
  {
    [showRegistrationActionCreator]: (state, { payload }) => ({ ...state, showRegistration: payload }),
    [userNameActionCreator]: (state, { payload }) => ({ ...state, userName: payload }),
    [userBirthdateActionCreator]: (state, { payload }) => ({ ...state, userBirthdate: payload }),
    [userEmailActionCreator]: (state, { payload }) => ({ ...state, userEmail: payload }),
    [userPasswordActionCreator]: (state, { payload }) => ({ ...state, userPassword: payload }),
    [usersArrayActionCreator]: (state, { payload }) => ({ ...state, usersArray: [...state.usersArray, payload] }),
  },
  initialState,
);

export default authorizationReducer;
