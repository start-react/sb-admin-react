import React from 'react';
import AsyncElement from '../../../common/AsyncElement';

var PreTables = React.createClass({

  mixins: [ AsyncElement ],

  bundle: require('bundle?lazy!./Tables.jsx'),

  preRender: function () {
  	return <div>Loading Tables...</div>;
  }
});

export default PreTables;