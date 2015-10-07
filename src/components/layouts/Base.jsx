import React from "react";
import { Route, DefaultRoute, RouteHandler } from "react-router";

import Reflux from "reflux";
import AuthStore from '../../stores/AuthStore';
import AuthStatusModal from '../common/AuthStatusModal/index';
import UserStatusModal from '../common/UserStatusModal/index';
var Base = React.createClass({

  mixins: [Reflux.connect(AuthStore, 'authStore')],

  render: function() {
  	console.log("base state", this.state);
    return (
      <div id="container">
        <RouteHandler {...this.props} />
        {this.state.authStore.user.isTokenExpired
        	?<AuthStatusModal />
        	:null
        }
        {this.state.authStore.showUserModal
        	?<UserStatusModal />
        	:null
        }
      </div>
    );
  }

});

export default Base;