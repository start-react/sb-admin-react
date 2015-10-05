var LoginDispatcher = require("../dispatchers/login-dispatcher");
var AppConstants = require("../constants/app-constants");
var assign = require("react/lib/Object.assign");
var EventEmitter = require('events').EventEmitter;
var APIService = require('../utils/APIService');
var Encode = require('../utils/Encode');

// var ResourceApiUtils = require('resource-api-utils/lib');
 

import {when, request} from 'jQuery';


var CHANGE_EVENT = 'change';

var _user = [];

function _login(user){
	console.log("store login function", user);

	var loginDetails = Encode.encodeBase64(user.loginID + ',' + user.password);
	console.log("encode test", loginDetails);

// 	var Api = ResourceApiUtils.create('https://bluescreenapi.lancasterfarms.com/hello/@world');

// 	Api.getList().then(function(response) {
//   	console.log(response);
// }, function(error) {
//   //error
// });
	
	// var prom = APIService.getTest();
	// 	prom.then(function(data){
	// 		console.log("apicall", data);
	// 	});
	
	// var test = when(request({
	// 	      url: 'https://bluescreenapi.lancasterfarms.com/hello/@world',
	// 	      method: 'GET',
	// 	      crossOrigin: true,
	// 	      type: 'json',
	// 	      data: {
	// 	      }
 //  			}));

	// test.then(function(response) {
	// 	      	console.log("handleAuth", response);
	// 	        // var jwt = response.id_token;
	// 	        // LoginActions.loginUser(jwt);
	// 	        return true;
	// 	      });

	return true;
}

var LoginStore = assign(EventEmitter.prototype, {
	emitChange: function(){
		console.log("inside emit change");
		this.emit(CHANGE_EVENT)
	},

	// addChangeListener: function(callback){
	// 	console.log("inside addChangeListener");
	// 	this.on(CHANGE_EVENT, callback)
	// },

	// removeChangeListener: function(callback){
	// 	console.log("inside removeChangeListener");
	// 	this.removeListener(CHANGE_EVENT, callback)
	// },

	// dispatcherIndex: LoginDispatcher.register(function(payload){
	// 	console.log("inside store");
	// 	var action = payload.action;
	// 	console.log("dispatcherIndex", action.actionType);
	// 	switch(action.actionType){
	// 		case AppConstants.USER_LOGIN:
	// 			_login(payload.action.user);
	// 			break;
	// 	}

	// 	LoginStore.emitChange();

	// 	return true;
	// });
})

LoginDispatcher.register(function(payload){
	console.log("payload", payload);
	var action = payload.action;
		console.log("dispatcherIndex", action.actionType);
		switch(action.actionType){
			case AppConstants.USER_LOGIN:
				_login(payload.action.user);
				break;
		}

		LoginStore.emitChange();
	return true;
});

export default LoginStore;