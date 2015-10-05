var AppConstants = require('../constants/app-constants');
var LoginDispatcher = require('../dispatchers/login-dispatcher');

var LoginAction = {
	userLogin: function(user){
		console.log("userLogin", user);
		LoginDispatcher.handleLoginAction({
			actionType: AppConstants.USER_LOGIN,
			user: user
		})
	}
}

export default LoginAction;