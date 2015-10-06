import React from "react";
import { Route, DefaultRoute, RouteHandler } from "react-router";

import LandingPage from "../pages/landing/page";
import HomePage from "../components/home/page";
import Dashboard from "../pages/dashboard/page";
import LoginPage from "../components/login-page/page";
import LogoutPage from "../components/logout-page/page";


export default class LoggedOutRouter extends React.Component {
  render() {
    return (
      <div id="container">
        <RouteHandler {...this.props} />
      </div>
    );
  }

  static getRoutes = function() { console.log("LoggedOutRouter");
    return (
      <Route name="app" path="/" handler={LoggedOutRouter}>
        <Route name="Dashboard" path="/dashboard" handler={HomePage} />
        <Route name="Sales" path="/sales" handler={HomePage} />
        <Route name="Logout" path="/logout" handler={LogoutPage} />
        <DefaultRoute name="landing" handler={LoginPage} />
      </Route>
    );
  }
}
