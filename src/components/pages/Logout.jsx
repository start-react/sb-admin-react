var React = require('react');
var Router = require('react-router');
var Reflux = require('reflux');
var AuthStore = require('../../stores/AuthStore');
var AuthActions = require('../../actions/AuthActions');

var LogoutPage = React.createClass({
    
    componentWillUnmount: function(){
    },
    
    mixins: [Reflux.connect(AuthStore), Router.Navigation],

    render: function(){
    	console.log("logging out");

    	console.log(this.state);
    	if(this.state.user.AuthToken == '')
    		this.transitionTo('login');
    	return <div>Redirecting</div>;
    }

});

export default LogoutPage;