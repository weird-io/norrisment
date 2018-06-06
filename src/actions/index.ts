export interface Action {
  type: string;
  payload?: any;
}

export interface ActionFactory {
  (any?): Action;
}

export * from "./fetchCategories";
export * from "./fetchRandomJoke";
