import { Action, ActionFactory } from ".";

export const FETCH_CATEGORIES_REQUEST = "FETCH_CATEGORIES_REQUEST";

export const fetchCategoriesRequest: ActionFactory = (): Action => {
  return {
    type: FETCH_CATEGORIES_REQUEST
  };
};

export const FETCH_CATEGORIES_COMPLETE = "FETCH_CATEGORIES_COMPLETE";

export const fetchCategoriesComplete: ActionFactory = (data: any): Action => {
  return {
    type: FETCH_CATEGORIES_COMPLETE,
    payload: data
  };
};
