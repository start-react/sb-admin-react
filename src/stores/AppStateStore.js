var React = require('react');
var Reflux = require('reflux');

var AuthAPIService = require('../Utils/AuthAPIService');
var AuthActions = require('../actions/auth-actions');

var AppStateStore = Reflux.createStore({

	listenables: [AuthActions]

});

export default AppStateStore;