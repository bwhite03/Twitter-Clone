import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import Nav from "./components/nav/Nav";

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
