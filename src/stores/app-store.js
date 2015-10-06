var React = require('react');
var Reflux = require('reflux');

var APIService = require('../utils/APIService');
var UserAPIService = require('../Utils/UserAPIService');

var ProfileActions = require('../actions/app-actions');
var UtilsAPI = require('../utils/utils-api');

var person = {
	name: "Billy Bob",
	LoggedIn: false
};

var ProfileStore = Reflux.createStore({
	listenables: [ProfileActions],

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
		UserAPIService.login(loginID, password);

	},

	isLoggedIn(){
		console.log("check", this.data, {person});
		return this.data.LoggedIn;
	},

	getName(){
		return person.name;
	},

	data: {showModal: false,
			LoggedIn: false,
			AuthToken: ''},

	getInitialState() {
        return this.data;
    }
});

export default ProfileStore;
