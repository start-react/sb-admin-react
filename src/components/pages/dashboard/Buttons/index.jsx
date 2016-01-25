import React from 'react';
import AsyncElement from '../../../common/AsyncElement';

var PreButtons = React.createClass({

  mixins: [ AsyncElement ],

  bundle: require('bundle?lazy!./Buttons.jsx'),

  preRender: function () {
  	return <div></div>;
  }
});

export default PreButtons;