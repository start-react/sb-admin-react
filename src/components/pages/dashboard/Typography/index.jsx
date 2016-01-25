import React from 'react';
import AsyncElement from '../../../common/AsyncElement';

var PreTypography = React.createClass({

  mixins: [ AsyncElement ],

  bundle: require('bundle?lazy!./Typography.jsx'),

  preRender: function () {
  	return <div></div>;
  }
});

export default PreTypography;