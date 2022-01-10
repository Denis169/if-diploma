import { handleActions } from 'redux-actions';
import { searchActionCreator } from '../actionCreators';

const initialState = {
  search: '',
};

const searchReducer = handleActions(
  {
    [searchActionCreator]: (state, { payload }) => ({ ...state, search: payload }),
  },
  initialState,
);

export default searchReducer;
