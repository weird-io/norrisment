export interface Action {
  type: string;
  payload?: any;
}

export interface ActionFactory {
  (data?: any): Action;
}

export * from "./fetchCategories";
export * from "./fetchRandomJoke";
