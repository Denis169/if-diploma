import { all, fork } from 'redux-saga/effects';
import watcherFetchAllBooks from './allBooksSaga';

function* rootSaga() {
  yield all([
    fork(watcherFetchAllBooks),
  ]);
}

export default rootSaga;
