import { Category, AppState } from "../types";
import {
  Action,
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_COMPLETE,
  FETCH_RANDOM_JOKE_COMPLETE,
  REQUEST_IN_PROGRESS_START,
  REQUEST_IN_PROGRESS_FINISH,
  CLEAR_RANDOM_JOKE
} from "../actions";
import * as FontAwesome from "@fortawesome/fontawesome";
import {
  faCode,
  faFilm,
  faStroopwafel,
  faUserCircle,
  faFlask,
  faFutbol,
  faBalanceScale,
  faChurch,
  faCrow,
  faHistory,
  faMusic,
  faPlane,
  faBriefcase,
  faMoneyBillAlt,
  faTshirt
} from "@fortawesome/fontawesome-free-solid";

FontAwesome.library.add(
  faCode as any,
  faFilm as any,
  faStroopwafel as any,
  faUserCircle as any,
  faFlask as any,
  faFutbol as any,
  faBalanceScale as any,
  faChurch as any,
  faCrow as any,
  faHistory as any,
  faMusic as any,
  faPlane as any,
  faBriefcase as any,
  faMoneyBillAlt as any,
  faTshirt as any
);

const defaultState: AppState = {
  settings: {
    requestInProgress: false
  },
  categories: []
};

const iconForCategoryMap: { [key: string]: string } = {
  dev: "code",
  movie: "film",
  food: "stroopwafel",
  celebrity: "user-circle",
  science: "flask",
  sport: "futbol",
  political: "balance-scale",
  religion: "church",
  animal: "crow",
  history: "history",
  music: "music",
  travel: "plane",
  career: "briefcase",
  money: "money-bill-alt",
  fashion: "tshirt"
};
function getIconForCategory(name: string): string {
  return iconForCategoryMap[name] ? iconForCategoryMap[name] : "";
}

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
        categories: action.payload
          .filter(name => name !== "explicit")
          .map(name => ({ name: name }))
          .map(category => ({ ...category, icon: getIconForCategory(category.name) }))
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

    case CLEAR_RANDOM_JOKE:
      return {
        ...state,
        randomJoke: null
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
