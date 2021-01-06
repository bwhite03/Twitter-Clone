import React from "react";
import ReactDOM from "react-dom";
import Router from "./Router";
import { Provider } from "react-redux";
import { store } from "./store/store";
import "./sass/App.scss";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
