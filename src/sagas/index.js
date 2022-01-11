import { all, fork } from 'redux-saga/effects';
import watcherFetchAllBooks from './FetchAllBooksSaga';

function* rootSaga() {
  yield all([
    fork(watcherFetchAllBooks),
  ]);
}

export default rootSaga;
