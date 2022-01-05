import { handleActions } from 'redux-actions';
import { dataAllBooksActionCreator, requestBookActionCreator } from '../actionCreators';

const initialState = {
  urlRequestBook: '',
  dataAllBooks: [],
};

const allBooksReducer = handleActions(
  {
    [requestBookActionCreator]: (state, { payload }) => ({ ...state, urlRequestBook: payload }),
    [dataAllBooksActionCreator]: (state, { payload }) => ({ ...state, dataAllBooks: payload }),
  },
  initialState,
);

export default allBooksReducer;
