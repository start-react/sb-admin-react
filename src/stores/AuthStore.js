var React = require('react');
var Reflux = require('reflux');

var AuthAPIService = require('../Utils/AuthAPIService');
var AuthActions = require('../actions/AuthActions');
var AuthConstants = require('../constants/AuthConstants');
var UserAPIService = require('../Utils/UserAPIService');

var AuthStore = Reflux.createStore({

	listenables: [AuthActions],

	data: {
		showUserModal: false,
		loggedIn: false,
		user: {
			name: "SB Admin"
		},
		loginErrorMessage: '',
		loading: false
	},

	getInitialState() {

		return this.data;

  },

	onLoggedIn(data){

		this.data.loggedIn = true;
		this.data.loading = false;
		this.trigger(this.data);

	},

	onHandleLogout(){

		this.data.loggedIn = false;
		this.data.user.name = '';
		this.data.user.AuthToken = '';
		this.data.loading = false;
		this.trigger(this.data);

	},

	onShowModal(){
		
		this.data.showUserModal = true;
    this.trigger(this.data);

	},

	onHideModal(){

		this.data.showUserModal = false;
		this.data.user.isTokenExpired = false;
    	this.trigger(this.data);

	},

	onHandleLogin(loginID, password){

		AuthAPIService.login(loginID, password);
		this.data.user.name = loginID;
		this.data.loginErrorMessage = '';
		this.data.loading = true;
		this.trigger(this.data);

	},

	onLoginError(message){

		this.data.loading = false;
		this.data.loginErrorMessage = message;
		this.trigger(this.data);

	},

	onShowAuthStatusModal(){

		this.data.user.isTokenExpired = true;
		this.trigger(this.data);

	}

});

export default AuthStore;
