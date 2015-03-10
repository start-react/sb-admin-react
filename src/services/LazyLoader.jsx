/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');

var NProgress = require('nprogress-npm');

require('./nprogress.css');

module.exports = function(componentToBeLoaded){

	return React.createClass({

		loadedComponent: null,

		load: function(){

			if (this.constructor.loadedComponent) {
				NProgress.done();
				return;			
			}

			this.bundle(function (component) {
				this.constructor.loadedComponent = component;
				this.forceUpdate();
				NProgress.done();
			}.bind(this));

		},

		componentDidMount: function () {
			NProgress.start();
			setTimeout(this.load, 500); // feel it good
		},

		render: function () {

			var component = this.constructor.loadedComponent;

			if (component) {
				// can't find RouteHandler in the loaded component, so we just grab
				// it here first.
				//this.props.activeRoute = <RouteHandler {...this.props} />;
				return component(this.props);

			}

			return <span></span>;

		},
		
		bundle: componentToBeLoaded
	});

}