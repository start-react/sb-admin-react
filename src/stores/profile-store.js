var React = require('react');
var Reflux = require('reflux');

var ProfileActions = require('../actions/profile-actions');

var person = {
	name: "Billy Bob",
	LoggedIn: false
};

// var ProfileActions = Reflux.createActions(
// 	['loggedIn', 'loggedOut']
// )

var ProfileStore = Reflux.createStore({
	listenables: [ProfileActions],

	onLoggedIn(){
		console.log("onLoggedIn");
		person.LoggedIn = true;
		this.trigger({person});
	},

	onLoggedOut(){
		console.log("onLoggedOut");
		person.LoggedIn = false;
		this.trigger({person});
	},

	getInitialState(){
		return {person};
	},

	setLoggedIn(){
		console.log('setLoggedIn');
		person.LoggedIn = true;
		this.trigger({person});
	},

	isLoggedIn(){
		return person.LoggedIn;
	}
});

export default ProfileStore;
