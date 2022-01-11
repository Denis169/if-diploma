import { call, put, takeLatest } from 'redux-saga/effects';

import { REQUEST_ALL_BOOKS } from '../constants/AllBooksConst';
import { dataAllBooksActionCreator } from '../actionCreators';

const getRandomArbitrary = (min, max) => Math.random() * (max - min) + min;

function* fetchAllBooks({ payload }) {
  try {
    const books = yield call(() => fetch(payload));
    const json = yield call(() => new Promise((res) => res(books.json())));
    const arrayBooks = json.map((item) => ({
      ...item,
      rate: Math.trunc(getRandomArbitrary(0, 6)),
    }));
    yield put(dataAllBooksActionCreator(arrayBooks));
  } catch (e) {
    yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

function* watcherFetchAllBooks() {
  yield takeLatest(REQUEST_ALL_BOOKS, fetchAllBooks);
}

export default watcherFetchAllBooks;
