import React from "react";
import { Route, DefaultRoute, RouteHandler } from "react-router";

export default class Base {

  render() {
    return (
      <div id="container">
        <RouteHandler {...this.props} />
      </div>
    );
  }

}