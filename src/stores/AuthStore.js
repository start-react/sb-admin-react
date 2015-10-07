var React = require('react');
var Reflux = require('reflux');

var AuthAPIService = require('../Utils/AuthAPIService');
var AuthActions = require('../actions/AuthActions');

var AuthStore = Reflux.createStore({

	listenables: [AuthActions],

	data: {
		showModal: false,
		loggedIn: false,
		user: {
			name: "Billy Bob",
			AuthToken: ''
		},
		loginErrorMessage: '',
		loading: false
	},

	getInitialState() {
        return this.data;
    },

	onLoggedIn(token){
		console.log("onLoggedIn", token);

		this.data.loggedIn = true;
		this.data.user.AuthToken = token;
		this.data.loading = false;
		this.trigger(this.data);
		console.log(this.data);
	},

	onHandleLogout(){
		this.data.loggedIn = false;
		this.data.user.name = '';
		this.data.user.AuthToken = '';
		this.data.loading = false;
		this.trigger(this.data);
	},

	onShowModal(){
		console.log("onShowModal");
		this.data.showModal = true;
        this.trigger(this.data);
	},

	onHideModal(){
		console.log("onHideModal");
		this.data.showModal = false;
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
		console.log("onLoginError", message);
		this.data.loading = false;
		this.data.loginErrorMessage = message;
		this.trigger(this.data);
	},

	isLoggedIn(){
		console.log("check", this.data, {person});
		return this.data.loggedIn;
	},

	getName(){
		return this.data.user.name;
	},

	
});

export default AuthStore;
