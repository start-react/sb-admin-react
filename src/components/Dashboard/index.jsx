/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var Col = require('react-bootstrap/Col');
var Header = require('./partials/Header');

var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var Dashboard = React.createClass({

	render: function(){
		return (<RouteHandler {...this.props} />);
	}
});

module.exports = Dashboard;