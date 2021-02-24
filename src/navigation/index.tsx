import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Bio from "../pages/Bio";
import Blog from "../pages/Blog";

export default function Router() {
  return (
    <Switch>
      <Route exact path="/me" component={Home} name="Home" />
      <Route exact path="/bio" component={Bio} name="Bio" />
      <Route exact path="/blog" component={Blog} name="Blog" />
    </Switch>
  );
}
