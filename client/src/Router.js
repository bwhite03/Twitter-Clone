import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container } from "@material-ui/core";
import Nav from "./components/nav/Nav";
import SideInfo from "./components/side-info/SideInfo";
import HomePage from "./pages/homepage/HomePage";
import ProfilePage from "./pages/profilepage/ProfilePage";
import "./App.scss";

function Router() {
  return (
    <BrowserRouter>
      <Container
        maxWidth="lg"
        style={{ display: "grid", gridTemplateColumns: "1fr 2fr 1fr" }}
      >
        <Nav />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/profile" component={ProfilePage} />
        </Switch>
        <SideInfo />
      </Container>
    </BrowserRouter>
  );
}

export default Router;
