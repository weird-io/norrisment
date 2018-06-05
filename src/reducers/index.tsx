import { Category, AppState } from "../types";
import {
  Action,
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_COMPLETE,
  FETCH_RANDOM_JOKE_COMPLETE,
  REQUEST_IN_PROGRESS_START,
  REQUEST_IN_PROGRESS_FINISH
} from "../actions";

const defaultState: AppState = {
  settings: {
    requestInProgress: false
  },
  categories: []
};

const requestInProgressReducer = (state: AppState = defaultState, action: Action) => {
  switch (action.type) {
    case REQUEST_IN_PROGRESS_START:
      return {
        ...state,
        settings: {
          ...state.settings,
          requestInProgress: true
        }
      };

    case REQUEST_IN_PROGRESS_FINISH:
      return {
        ...state,
        settings: {
          ...state.settings,
          requestInProgress: false
        }
      };

    default:
      return state;
  }
};

const categoriesReducer = (state: AppState = defaultState, action: Action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_COMPLETE:
      return {
        ...state,
        categories: action.payload.map(name => ({ name: name }))
      };

    default:
      return state;
  }
};

const randomJokeReducer = (state: AppState = defaultState, action: Action) => {
  switch (action.type) {
    case FETCH_RANDOM_JOKE_COMPLETE:
      return {
        ...state,
        randomJoke: action.payload
      };

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

export default mergeReducers([categoriesReducer, randomJokeReducer, requestInProgressReducer]);
