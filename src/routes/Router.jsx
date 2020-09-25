import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//Components
import Home from "../pages/Home";
import Error404 from "../pages/Error404";

const Router = () => {
  return (
    <BrowserRouter basename="agency-react">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/" component={Error404} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
