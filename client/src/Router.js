import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./components/nav/Nav";
import SideInfo from "./components/side-info/SideInfo";
import HomePage from "./pages/homepage/HomePage";
import ProfilePage from "./pages/profilepage/ProfilePage";

function Router() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Nav />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/profile" component={ProfilePage} />
        </Switch>
        <SideInfo />
      </div>
    </BrowserRouter>
  );
}

export default Router;
