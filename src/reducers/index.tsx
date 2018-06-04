import { combineReducers, ReducersMapObject, AnyAction } from "redux";
import { Category, AppState } from "../types";
import { Action, FETCH_CATEGORIES_REQUEST, FETCH_CATEGORIES_COMPLETE, FETCH_RANDOM_JOKE_COMPLETE } from "../actions";

const defaultState: AppState = {
  categories: [],
  jokes: []
};

declare interface ObjectConstructor {
  assign(target: any, ...sources: any[]): any;
}

const categoriesReducer = (state: AppState = defaultState, action: Action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_COMPLETE:
      console.log("state", state, "payload", action.payload);
      const result = Object.assign({}, state, {
        categories: action.payload.map(x => {
          return {
            name: x
          };
        })
      });
      console.log(result);
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

export default combineReducers({
  categoriesReducer,
  randomJokeReducer
});
