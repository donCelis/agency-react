import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//Components
import { Home, Error404 } from "../pages";

const Router = () => {
  return (
    <BrowserRouter basename="agency-react">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={Error404} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
