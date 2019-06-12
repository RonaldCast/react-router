import React from "react";
import { Route, Switch } from "react-router-dom";

import App from "./App";
import Category from "./components/Category";
import Home from "./components/Home";
import Product from "./components/Product";

const configRouter = () => (
  <App>
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/category" component={Home} />
      <Route path="/producto" component={Home} />
    </Switch>
  </App>
);

export default configRouter;
