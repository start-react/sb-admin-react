var Reflux = require('reflux');

var AuthActions = Reflux.createActions(
	[
		'loggedIn',
		'loggedOut',
		'showModal',
		'hideModal',
		'handleLogin',
		'handleLogout',
		'loginError'
	]
)

export default AuthActions;