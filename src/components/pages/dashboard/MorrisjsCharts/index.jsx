import React from 'react';
import AsyncElement from '../../../common/AsyncElement';

var PreMorrisjsCharts = React.createClass({

  mixins: [ AsyncElement ],

  bundle: require('bundle?lazy!./MorrisjsCharts.jsx'),

  preRender: function () {
  	return <div></div>;
  }
});

export default PreMorrisjsCharts;