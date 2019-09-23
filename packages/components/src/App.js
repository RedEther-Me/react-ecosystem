import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Navigation from "./components/Navigation";

import FormsView from "./components/forms";
import NavigationView from "./components/nav";

export default () => (
  <BrowserRouter>
    <Navigation />
    <main className="container-fluid">
      <Switch>
        <Route path="/forms" component={FormsView} />
        <Route path="/navigation" component={NavigationView} />
        <Redirect to="/forms" />
      </Switch>
    </main>
  </BrowserRouter>
);
