/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var Router = require('react-router');


var Sidebar = require('./partials/sidebar');
var Topbar = require('./partials/topbar');

var _ = require('lodash');

var Navigation = Router.Navigation;

module.exports = React.createClass({

	mixins: [Navigation],

	render: function(){

		var that = this;

		return (<nav className="navbar navbar-default navbar-static-top" role="navigation" style={{"margin-bottom": "0"}}>
                
                <Topbar />
                <Sidebar />

            </nav>);

	}
	
});


