import { handleActions } from 'redux-actions';
import { areThereAnyBooksActionCreator, areThereListYourBooksActionCreator } from '../actionCreators';

const initialState = {
  areThereAnyBooks: true,
  areThereListYourBooks: true,
};

const yourOrdersReducer = handleActions(
  {
    [areThereAnyBooksActionCreator]: (state, { payload }) => ({ ...state, areThereAnyBooks: payload }),
    [areThereListYourBooksActionCreator]: (state, { payload }) => ({ ...state, areThereListYourBooks: payload }),
  },
  initialState,
);

export default yourOrdersReducer;
