import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { HashRouter, Switch, Route } from 'react-router-dom'

import ListPage from './components/pages/ListPage';
import DetailPage from './components/pages/DetailPage';

// const middleware = applyMiddleware(thunk, logger(), catcher);

const store = createStore(() => { return {} });

export default () => (
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route exact path="/" component={ListPage} />
        <Route path="/:id" render={(props) => {
          return <DetailPage {...props} id={props.match.params.id} />
        }} />
      </Switch>
    </HashRouter>
  </Provider>
);
