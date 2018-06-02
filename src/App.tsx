var __assign =
  (this && this.__assign) ||
  Object.assign ||
  function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
import * as React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { HashRouter, Switch, Route } from "react-router-dom";
import ListPage from "./components/pages/ListPage";
import DetailPage from "./components/pages/DetailPage";
// const middleware = applyMiddleware(thunk, logger(), catcher);
var store = createStore(function() {
  return {};
});
export default (function() {
  return React.createElement(
    Provider,
    { store: store },
    React.createElement(
      HashRouter,
      null,
      React.createElement(
        Switch,
        null,
        React.createElement(Route, {
          exact: true,
          path: "/",
          component: ListPage
        }),
        React.createElement(Route, {
          path: "/:id",
          render: function(props) {
            return React.createElement(
              DetailPage,
              __assign({}, props, { id: props.match.params.id })
            );
          }
        })
      )
    )
  );
});
