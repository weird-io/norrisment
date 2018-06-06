import { Action, ActionFactory } from ".";

export const FETCH_CATEGORIES_REQUEST = "FETCH_CATEGORIES_REQUEST";

export const fetchCategoriesRequest: ActionFactory = (): Action => {
  return {
    type: FETCH_CATEGORIES_REQUEST
  };
};

export const FETCH_CATEGORIES_COMPLETE = "FETCH_CATEGORIES_COMPLETE";

export const fetchCategoriesComplete: ActionFactory = (category: string): Action => {
  return {
    type: FETCH_CATEGORIES_COMPLETE,
    payload: category
  };
};

export const REQUEST_IN_PROGRESS_START = "REQUEST_IN_PROGRESS_START";
export const REQUEST_IN_PROGRESS_FINISH = "REQUEST_IN_PROGRESS_FINISH";

export const requestInProgress: ActionFactory = (affirm: boolean): Action => {
  return {
    type: affirm ? REQUEST_IN_PROGRESS_START : REQUEST_IN_PROGRESS_FINISH
  };
};
