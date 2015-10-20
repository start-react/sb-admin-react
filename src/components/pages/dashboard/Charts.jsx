import React, { PropTypes, Component } from 'react';

var Reflux = require("reflux");
var APIStore = require('../../../stores/APIStore');
var UserActions = require('../../../actions/UserActions');

var Charts = React.createClass({

	mixins: [Reflux.connect(APIStore, 'apiStore')],

  render: function() {
    return (

      <div>
        This is the Charts page
      </div>
          
    );
  }

});

export default Charts;