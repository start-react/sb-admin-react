import React from 'react';
import AsyncElement from '../../../common/AsyncElement';

var PreIcons = React.createClass({

  mixins: [ AsyncElement ],

  bundle: require('bundle?lazy!./Icons.jsx'),

  preRender: function () {
  	return <div></div>;
  }
});

export default PreIcons;