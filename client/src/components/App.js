// @flow

import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { hot } from "react-hot-loader";
import { AUTH } from "../constants/routes";
import Auth from "./auth/Auth";

const App = () => (
  <div>
    <Switch>
      <Route path={AUTH} component={Auth} />
      <Redirect exact from="/" to={AUTH} />
    </Switch>
  </div>
);

export default hot(module)(App);
