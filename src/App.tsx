import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import { Me } from "./pages/Me";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Me} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </Router>
  );
};
