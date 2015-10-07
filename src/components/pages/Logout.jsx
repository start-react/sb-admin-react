var React = require('react');
var Router = require('react-router');
var Reflux = require('reflux');
var AuthStore = require('../../stores/AuthStore');
var AuthActions = require('../../actions/AuthActions');

var LogoutPage = React.createClass({
    
  componentWillMount: function(){

    AuthActions.handleLogout();

  },
  
  mixins: [Reflux.connect(AuthStore), Router.Navigation],

  render: function(){

  	if(this.state.user.AuthToken == '') {

  		this.transitionTo('login');
  		return <div></div>;
      
  	}
      
  	return <div className="container">Redirecting</div>;
  }

});

export default LogoutPage;