import * as React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, Store } from "redux";
import { HashRouter, Switch, Route } from "react-router-dom";
import createSagaMiddleware from "redux-saga";
import { HomePage, CategoryPage, JokePage } from "./pages";
import { AppState } from "./types";
import reducers from "./reducers";
import sagas from "./sagas";
import { catcher, logger } from "./middlewares";

const sagaMiddleware = createSagaMiddleware();
const store: Store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagas);

const categoryPageRenderer = props => {
  return <CategoryPage {...props} category={props.match.params.category} jokes={[]} />;
};

const jokePageRenderer = props => {
  return <JokePage {...props} category={props.match.params.category} joke={props.match.params.joke} />;
};

export default () => (
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/:category" render={categoryPageRenderer} />
        <Route path="/:category/:joke" render={jokePageRenderer} />
      </Switch>
    </HashRouter>
  </Provider>
);
