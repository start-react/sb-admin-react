import React from 'react';
import AsyncElement from '../../../common/AsyncElement';

var PreGrid = React.createClass({

  mixins: [ AsyncElement ],

  bundle: require('bundle?lazy!./Grid.jsx'),

  preRender: function () {
  	return <div></div>;
  }
});

export default PreGrid;