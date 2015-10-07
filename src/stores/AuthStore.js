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

	},

	getInitialState() {
        return this.data;
    },

	onLoggedIn(token){
		console.log("onLoggedIn", token);

		person.LoggedIn = true;
		this.trigger({person});
		
		this.data.LoggedIn = true;
		this.data.AuthToken = token;
		this.trigger(this.data);
		console.log(this.data);
	},

	onLoggedOut(){
		console.log("onLoggedOut");
		person.LoggedIn = false;
		this.trigger({person});
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


		//console.log("onHandleLogin", loginID, password);
		//UtilsAPI.test();
		// APIService.test();
		AuthAPIService.login(loginID, password);

	},

	isLoggedIn(){
		console.log("check", this.data, {person});
		return this.data.LoggedIn;
	},

	getName(){
		return person.name;
	},

	
});

export default AuthStore;
