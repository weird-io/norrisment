import * as React from "react";
import { Provider } from "react-redux";
import { createStore, Store } from "redux";
import { HashRouter, Switch, Route } from "react-router-dom";
import ListPage from "./components/pages/ListPage";
import DetailPage from "./components/pages/DetailPage";
import { AppState } from "./types/AppState";
// const middleware = applyMiddleware(thunk, logger(), catcher);
const store: Store<AppState> = createStore(() => { return {}; });

export default () => {
    return (
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
};
