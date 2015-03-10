'use strict';

var AppDispatcher = require("dispatcher/App");

module.exports = {

	dispatcherTokens: [],

	registerAppDispatcher: function(fn) {

		this.dispatcherTokens.push(AppDispatcher.register(fn));

	},

	componentDidUnmount: function() {

		for(var i in this.dispatcherTokens)
			AppDispatcher.unregister(this.dispatcherTokens[i]);

	}

};