export interface Joke {
  categories: string[];
  icon_url: string;
  id: string;
  url: string;
  value: string;
}

export interface Category {
  name: string;
}

export interface AppState {
  categories: Category[];
  jokes: Joke[];
}
