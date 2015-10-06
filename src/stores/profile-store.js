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
		console.log({person});
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
        console.log("store data", this.data);
	},
	// getInitialState(){
	// 	return {person};
	// },

	setLoggedIn(){
		
		person.LoggedIn = true;
		this.trigger({person});
	},

	isLoggedIn(){
		console.log("check", {person});
		return person.LoggedIn;
	},

	getName(){
		return this.data;
	},

	data: {showModal: false},

	init() {
        setInterval(()=>{
            this.data.showModal = !(this.data.showModal);
            this.trigger(this.data);
        }, 5000)
    },

    getInitialState() {
        return this.data;
    }
});

export default ProfileStore;
