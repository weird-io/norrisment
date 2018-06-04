import { Category, AppState } from "../types";
import { Action, FETCH_CATEGORIES_REQUEST, FETCH_CATEGORIES_COMPLETE, FETCH_RANDOM_JOKE_COMPLETE } from "../actions";

const defaultState: AppState = {
  categories: [],
  jokes: []
};

const categoriesReducer = (state: AppState = defaultState, action: Action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_COMPLETE:
      const result = {
        ...state,
        categories: action.payload.map(name => ({ name: name }))
      };
      console.log("result", result);
      return result;

    default:
      return state;
  }
};

const randomJokeReducer = (state: AppState = defaultState, action: Action) => {
  switch (action.type) {
    case FETCH_RANDOM_JOKE_COMPLETE:
      // add random joke to state.jokes maybe?
      console.log("state", state, "payload", action.payload);
      return state;

    default:
      return state;
  }
};

const mergeReducers = reducers => (state: AppState, action: Action) => {
  reducers.forEach(reducer => {
    state = reducer(state, action);
  });
  return state;
};

export default mergeReducers([categoriesReducer, randomJokeReducer]);
