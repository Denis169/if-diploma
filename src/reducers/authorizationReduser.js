import { handleActions } from 'redux-actions';

import {
  showRegistrationActionCreator,
  userBirthdateActionCreator,
  userEmailActionCreator,
  userNameActionCreator, userPasswordActionCreator, usersDataActionCreator,
} from '../actionCreators';

const initialState = {
  showRegistration: false,
  userName: '',
  userBirthdate: new Date(),
  userEmail: '',
  userPassword: '',
  usersData: [],
};

const authorizationReducer = handleActions(
  {
    [showRegistrationActionCreator]: (state, { payload }) => ({ ...state, showRegistration: payload }),
    [userNameActionCreator]: (state, { payload }) => ({ ...state, userName: payload }),
    [userBirthdateActionCreator]: (state, { payload }) => ({ ...state, userBirthdate: payload }),
    [userEmailActionCreator]: (state, { payload }) => ({ ...state, userEmail: payload }),
    [userPasswordActionCreator]: (state, { payload }) => ({ ...state, userPassword: payload }),
    [usersDataActionCreator]: (state, { payload }) => ({ ...state, usersData: state.usersData.push(payload) }),
  },
  initialState,
);

export default authorizationReducer;
