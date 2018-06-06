import { fork, take, all, call, put, takeLatest, takeEvery } from "redux-saga/effects";
import { delay } from "redux-saga";
import {
  FETCH_CATEGORIES_REQUEST,
  FETCH_RANDOM_JOKE_REQUEST,
  FETCH_CATEGORIES_COMPLETE,
  FETCH_RANDOM_JOKE_COMPLETE,
  REQUEST_IN_PROGRESS_FINISH,
  REQUEST_IN_PROGRESS_START
} from "../actions";
import { getCategories, getRandomJoke } from "../api";

function* fetchCategories(action) {
  yield put({ type: REQUEST_IN_PROGRESS_START });
  const categories = yield call(getCategories);
  yield delay(1000);
  yield put({ type: FETCH_CATEGORIES_COMPLETE, payload: categories || [] });
  yield put({ type: REQUEST_IN_PROGRESS_FINISH });
}

function* fetchRandomJoke(action) {
  yield put({ type: REQUEST_IN_PROGRESS_START });
  const joke = yield call(getRandomJoke, action.payload);
  yield delay(1000);
  yield put({ type: FETCH_RANDOM_JOKE_COMPLETE, payload: joke });
  yield put({ type: REQUEST_IN_PROGRESS_FINISH });
}

export default function* root(): any {
  yield all([
    takeEvery(FETCH_CATEGORIES_REQUEST, fetchCategories),
    takeEvery(FETCH_RANDOM_JOKE_REQUEST, fetchRandomJoke)
  ]);
}
