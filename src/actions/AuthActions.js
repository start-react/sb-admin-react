var Reflux = require('reflux');

var AuthActions = Reflux.createActions(
	[
		'loggedIn',
		'loggedOut',
		'showModal',
		'hideModal',
		'handleLogin',
		'loginError'
	]
)

export default AuthActions;