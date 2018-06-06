import reducers from "./index";
import { Category, AppState, Joke } from "../types";
import { Action, FETCH_CATEGORIES_COMPLETE, FETCH_RANDOM_JOKE_COMPLETE, CLEAR_RANDOM_JOKE } from "../actions";

const defaultState: AppState = {
  settings: {
    requestInProgress: false
  },
  categories: []
};
const randomJoke: any = {
  icon_url: "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
  id: "bKq5KbcBSq6hNVswRZYu9A",
  url: "https://api.chucknorris.io/jokes/bKq5KbcBSq6hNVswRZYu9A",
  value:
    "ghrjwgdfnbjkgdnkshx sorry Chuck Norris is informing me that the universe started 13 billion years ago fgvhlfjdunhedhgsejkwxbwgdjh"
};

const clone = (o: {}) => JSON.parse(JSON.stringify(o));

describe("Reducers", () => {
  let state = clone(defaultState);
  it("should have entry state === default state", () => {
    expect(state).toMatchObject(defaultState);
  });
  it("should reduce categories", () => {
    const result = expect(reducers(state, { type: FETCH_CATEGORIES_COMPLETE, payload: ["one", "two", "three"] }));
    result.toMatchSnapshot();
    result.not.toEqual(state);
  });
  it("should reduce joke", () => {
    const result = expect(reducers(state, { type: FETCH_RANDOM_JOKE_COMPLETE, payload: randomJoke }));
    result.toMatchSnapshot();
    result.not.toEqual(state);
  });
  it("should clear the joke", () => {
    const result = expect(reducers(state, { type: CLEAR_RANDOM_JOKE }));
    result.toMatchSnapshot();
  });
});
