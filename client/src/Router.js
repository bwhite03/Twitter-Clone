import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container } from "@material-ui/core";
import HomePage from "./pages/homepage/HomePage";
import ProfilePage from "./pages/profilepage/ProfilePage";
import ProfilePages from "./pages/profilepages/ProfilePages";
import SignUpPage from "./pages/sign-up-page/SignUpPage";
import SignInPage from "./pages/sign-in-page/SignInPage";
import CommentPage from "./pages/commentPage/CommentPage";
import NotificationPage from "./pages/notificationPage/NotificationPage";
import MessagePage from "./pages/messagePage/MessagePage";
import MessagesPage from "./pages/messagesPage/MessagesPage";
import SettingsPage from "./pages/settingsPage/SettingsPage";
import { Provider } from "react-redux";
import { store } from "./store/store";
import "./App.scss";

function Router() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Container maxWidth="lg">
          <Switch>
            <Route
              exact
              path="/"
              render={() =>
                localStorage.getItem("auth-token") ? (
                  <HomePage />
                ) : (
                  <SignInPage />
                )
              }
            />
            <Route exact path="/profile" component={ProfilePage} />
            <Route exact path="/signup" component={SignUpPage} />
            <Route exact path="/signin" component={SignInPage} />
            <Route exact path="/notifications" component={NotificationPage} />
            <Route exact path="/messages" component={MessagePage} />
            <Route exact path="/settings" component={SettingsPage} />
            <Route exact path="/messages/:id" component={MessagesPage} />
            <Route exact path="/:id" component={ProfilePages} />
            <Route exact path="/comment/:id" component={CommentPage} />
          </Switch>
        </Container>
      </BrowserRouter>
    </Provider>
  );
}

export default Router;
