import React from "react";
import { Route, DefaultRoute, RouteHandler } from "react-router";

import LandingPage from "../pages/landing/page";
import HomePage from "../pages/home/page";
import Dashboard from "../pages/dashboard/page";
import LoginPage from "../components/login-page/page";


export default class LoggedOutRouter extends React.Component {
  render() {
    return (
      <div id="container">
        <RouteHandler {...this.props} />
      </div>
    );
  }

  static getRoutes = function() {
    return (
      <Route name="app" path="/" handler={LoggedOutRouter}>
        <Route name="test" path="/test" handler={LoginPage} />
        <Route name="Dashboard" path="/dashboard" handler={HomePage} />
        <Route name="Sales" path="/sales" handler={HomePage} />
        <DefaultRoute name="landing" handler={LandingPage} />
      </Route>
    );
  }
}
