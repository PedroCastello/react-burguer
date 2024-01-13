import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./containers/home";
import Users from "./containers/Users";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Orders" component={Users} />
      </Switch>
    </Router>
  );
}

export default Routes;
