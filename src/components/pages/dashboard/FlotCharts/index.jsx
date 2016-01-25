import React from 'react';
import AsyncElement from '../../../common/AsyncElement';

var PreFlotCharts = React.createClass({

  mixins: [ AsyncElement ],

  bundle: require('bundle?lazy!./FlotCharts.jsx'),

  preRender: function () {
  	return <div></div>;
  }
});

export default PreFlotCharts;