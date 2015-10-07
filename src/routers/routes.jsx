import React from "react";
import { Route, DefaultRoute, RouteHandler } from "react-router";

import BaseLayout from "../components/layouts/Base";
import DashboardLayout from "../components/layouts/Dashboard";

import DashboardFirstPage from "../components/pages/dashboard/First";
import DashboardSecondPage from "../components/pages/dashboard/Second";
import LoginPage from "../components/pages/Login";
import LogoutPage from "../components/pages/Logout";

export default class Routes {

  static getRoutes = function() {
    return (
      <Route name="base" path="/" handler={BaseLayout}>
        <Route name="dashboard" path="/dashboard" handler={DashboardLayout}>
          <Route name="dashboard.first" path="/first" handler={DashboardFirstPage} />
          <Route name="dashboard.second" path="/second" handler={DashboardSecondPage} />
        </Route>
        <Route name="login" path="/login" handler={LoginPage} />
        <Route name="logout" path="/logout" handler={LogoutPage} />
        <DefaultRoute name="index" handler={LoginPage} />
      </Route>
    );
  }

}
// <DefaultRoute name="dashboard.index" handler={DashboardFirstPage} />
