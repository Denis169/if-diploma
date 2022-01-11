import { handleActions } from 'redux-actions';
import { successfulChangeActionCreator, toggleMenuActionCreator } from '../actionCreators';

const initialState = {
  toggleMenu: false,
  successfulChange: false,
};

const settingsReducer = handleActions(
  {
    [toggleMenuActionCreator]: (state, { payload }) => ({ ...state, toggleMenu: payload }),
    [successfulChangeActionCreator]: (state, { payload }) => ({ ...state, successfulChange: payload }),
  },
  initialState,
);

export default settingsReducer;
