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
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web and AsyncStorage for react-native
import { PersistGate } from "redux-persist/integration/react";
import { Loading } from "./components";

// set up state persistence
const persistConfig = { key: "root", storage };
const persistedReducer = persistReducer(persistConfig, reducers);

const sagaMiddleware = createSagaMiddleware();
const store: Store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
const persistor = persistStore(store);

sagaMiddleware.run(sagas);

const jokePageRenderer = props => {
  return <JokePage {...props} categoryName={props.match.params.category} />;
};

export default () => {
  const loading = (
    <div className="center">
      <Loading />
    </div>
  );
  return (
    <div className="mw9 center ph3 ph5-ns">
      <Provider store={store}>
        <PersistGate loading={loading} persistor={persistor}>
          <HashRouter>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/:category" render={jokePageRenderer} />
            </Switch>
          </HashRouter>
        </PersistGate>
      </Provider>
    </div>
  );
};
