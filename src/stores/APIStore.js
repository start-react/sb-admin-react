var React = require('react');
var Reflux = require('reflux');

var UserAPIService = require('../Utils/UserAPIService');
var AuthActions = require('../actions/AuthActions');
var UserActions = require('../actions/UserActions');
var APIConstants = require('../constants/APIConstants');

var APIStore = Reflux.createStore({

	listenables: [AuthActions, UserActions],

	data: {
		AuthToken: ''
	},

	getInitialState() {

		return this.data;
	},

	onLoggedIn(token){
		console.log("APIStore onLoggedIn");
		this.data.AuthToken = token;
		
	}
	
});

export default APIStore;
