var Dispatcher = require('flux').Dispatcher;
var assign = require('react/lib/Object.assign');

var LoginDispatcher = assign(new Dispatcher(),{
	handleLoginAction: function(action){
		console.log("LoginDispatcher", action);
	
		this.dispatch({
			source: 'USER_LOGIN',
			action: action
		})
	}
});

export default LoginDispatcher;