import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./pages/Login/index";
import Home from "./pages/Home/index";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="*" component={() => <h1> 404 page not found</h1>} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
