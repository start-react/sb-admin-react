import React from 'react';
import AsyncElement from '../../../common/AsyncElement';

var PreForms = React.createClass({

  mixins: [ AsyncElement ],

  bundle: require('bundle?lazy!./Forms.jsx'),

  preRender: function () {
  	return <div>Loading Forms...</div>;
  }
});

export default PreForms;