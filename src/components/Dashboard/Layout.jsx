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
		return (
				<div id="wrapper">	
					<Header />
					
					<div id="page-wrapper">
						<div className="container-fluid">
								<RouteHandler {...this.props} />
						</div>
					</div>	
				</div>
		);
	}
});

module.exports = Dashboard;