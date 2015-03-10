/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var AsyncMixin = require('mixins/AsyncMixin');

module.exports = React.createClass({
	mixins: [ AsyncMixin ],
	bundle: require('bundle?lazy!./index.jsx')
});