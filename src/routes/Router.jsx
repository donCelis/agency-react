import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//Components
import {
  Home,
  About,
  Skills,
  Resume,
  Works,
  Blog,
  Error404,
  Contact,
  Feed,
} from "../pages";

const Router = () => {
  return (
    <BrowserRouter basename="agency-react">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/works" component={Works} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/feed" component={Feed} />
        <Route component={Error404} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
