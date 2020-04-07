import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import Nav from "./components/nav/Nav";

function Router() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Nav />
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default Router;
