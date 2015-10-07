var Reflux = require('reflux');

var AuthActions = Reflux.createActions(
	[
		'loggedIn',
		'loggedOut',
		'showModal',
		'hideModal',
		'handleLogin',
		'showAuthStatusModal',
		'handleLogout',
		'loginError'
	]
)

export default AuthActions;