import React from 'react';
import AsyncElement from '../../../common/AsyncElement';

var PreHome = React.createClass({

  mixins: [ AsyncElement ],

  bundle: require('bundle?lazy!./Home.jsx'),

  preRender: function () {
  	return <div>Loading Home...</div>;
  }
});

export default PreHome;