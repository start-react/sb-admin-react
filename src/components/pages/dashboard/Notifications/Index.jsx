import React from 'react';
import AsyncElement from '../../../common/AsyncElement';

var PreNotifications = React.createClass({

  mixins: [ AsyncElement ],

  bundle: require('bundle?lazy!./Notifications.jsx'),

  preRender: function () {
  	return <div>Loading Notifications...</div>;
  }
});

export default PreNotifications;