import React from "react";
import { Route, DefaultRoute, RouteHandler } from "react-router";

var Base = React.createClass({

  render: function() {
  	return (
      <div id="container">
        <RouteHandler {...this.props} />
      </div>
    );
  }

});

export default Base;