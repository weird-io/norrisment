import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { HashRouter } from 'react-router-dom'

import ListPage from './components/pages/ListPage';
import DetailPage from './components/pages/DetailPage';

// const middleware = applyMiddleware(thunk, logger(), catcher);

const store = createStore(() => { return {} });

// const listPage: any = <div>List</div>;
// const detailsPage: any = <div>Details</div>;

export default () => (
  <Provider store={store}>
    <HashRouter>
      <Route exact path="/" component={ListPage} />
      <Route path="/:id" component={DetailPage} />
    </HashRouter>
    {/* <Router history={browserHistory}> */}
    {/* <Route exact path="/" component={listPage} /> */}

    {/* </Router> */}

  </Provider>
);
