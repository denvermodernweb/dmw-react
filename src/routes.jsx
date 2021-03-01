import React from "react";
import { Switch, Route } from "react-router";

import Home from "./pages/home";
import Sample from "./pages/sample";

const NotFound = () => (
  <div className="text-center">
    Oops, what you are looking for, does not exist.
  </div>
);

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/sample" exact component={Sample} />
    {/* ELSE */}
    <Route path="*" exact component={NotFound} />
  </Switch>
);

export default Routes;
