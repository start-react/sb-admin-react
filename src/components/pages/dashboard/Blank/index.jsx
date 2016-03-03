import React from 'react';
import AsyncElement from '../../../common/AsyncElement';

var PreBlank = React.createClass({

  mixins: [ AsyncElement ],

  bundle: require('bundle?lazy!./Blank.jsx'),

  preRender: function () {
  	return <div></div>;
  }
});

export default PreBlank;