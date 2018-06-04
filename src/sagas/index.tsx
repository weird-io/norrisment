import { fork, take, all, call, put, takeLatest, takeEvery } from "redux-saga/effects";
import { FETCH_CATEGORIES_REQUEST, FETCH_RANDOM_JOKE_REQUEST, FETCH_CATEGORIES_COMPLETE } from "../actions";
import { getCategories, getRandomJoke } from "../api";

function* fetchCategories(action) {
  console.log("fetch categories", action);
  // hook up getCategories promise here
  yield put({ type: FETCH_CATEGORIES_COMPLETE, payload: ["one", "two", "three"] });
}

function* fetchRandomJoke(action) {
  console.log("fetch random joke", action);
  // hook up getRandomJoke promise here
  // will need to call this multiple times to get a list of them
  // or
  // change to displaying a random joke within the category instead
  // of a list which might actually be better
}

function* watchCategoriesRequest() {
  while (true) {
    yield takeEvery(FETCH_CATEGORIES_REQUEST, fetchCategories);
  }
}

function* watchRandomJokeRequest() {
  while (true) {
    yield takeEvery(FETCH_RANDOM_JOKE_REQUEST, fetchRandomJoke);
  }
}

export default function* root(): any {
  yield fetchCategories({ type: FETCH_CATEGORIES_REQUEST });
  //yield all([fork(watchCategoriesRequest), fork(watchRandomJokeRequest)]);
}
