import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import VerifyPage from "../src/fallBackPage";
const HomePage = lazy(() => import("../src/routes/index"));
ReactDOM.render(
  <BrowserRouter>
    <Route
      path="/"
      render={() => (
        <div className="startoftheinnersec">
          <Suspense fallback={<VerifyPage />}>
            <HomePage />
          </Suspense>
        </div>
      )}
    />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
