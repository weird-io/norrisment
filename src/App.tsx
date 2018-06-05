import * as React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, Store } from "redux";
import { HashRouter, Switch, Route } from "react-router-dom";
import createSagaMiddleware from "redux-saga";
import { HomePage, JokePage } from "./pages";
import { AppState } from "./types";
import reducers from "./reducers";
import sagas from "./sagas";
import { catcher, logger } from "./middlewares";

const sagaMiddleware = createSagaMiddleware();
const store: Store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagas);

const jokePageRenderer = props => {
  return <JokePage {...props} categoryName={props.match.params.category} />;
};

export default () => (
  <div className="ph3 ph5-ns">
    <Provider store={store}>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/:category" render={jokePageRenderer} />
        </Switch>
      </HashRouter>
    </Provider>
  </div>
);
