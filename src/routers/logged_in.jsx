import React from "react";
import { Route, DefaultRoute, RouteHandler, Link } from "react-router";

import HomePage from "../pages/home/page";
import Dashboard from "../pages/dashboard/page";
import ModalApp from "../pages/StatusModal/page";
import LoginPage from "../components/login-page/page";

export default class LoggedInRouter extends React.Component {
  render() {
    return (
      <div id="container">
        <RouteHandler {...this.props} />
      </div>
    );
  }

  static getRoutes = function() {  console.log("LoggedInRouter");
    return (
      <Route name="app" path="/" handler={LoggedInRouter}>
        <Route name="test" path="/test" handler={LoginPage} />
        <Route name="modal" path="/modalnotinuse" handler={HomePage} />
        <Route name="Dashboard" path="/dashboard" handler={HomePage} />
        <Route name="Sales" path="/sales" handler={HomePage} />
        <DefaultRoute name="home" handler={HomePage} />
      </Route>
    );
  }

}
// <div id="navigation">
//           <header>
//             <ul>
//               <li><Link to="home">Home</Link></li>
//               <li><button id="modal-button"></button></li>
//             </ul>
//           </header>
//         </div>