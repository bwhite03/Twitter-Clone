import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container } from "@material-ui/core";
import HomePage from "./pages/homepage/HomePage";
import ProfilePage from "./pages/profilepage/ProfilePage";
import ProfilePages from "./pages/profilepages/ProfilePages";
import SignUpPage from "./pages/sign-up-page/SignUpPage";
import SignInPage from "./pages/sign-in-page/SignInPage";
import { Provider } from "react-redux";
import { store } from "./store/store";
import "./App.scss";

function Router() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Container maxWidth="lg">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/profile" component={ProfilePage} />
            <Route exact path="/signup" component={SignUpPage} />
            <Route exact path="/signin" component={SignInPage} />
            <Route exact path="/:id" component={ProfilePages} />
          </Switch>
        </Container>
      </BrowserRouter>
    </Provider>
  );
}

export default Router;
