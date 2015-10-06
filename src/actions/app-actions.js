var Reflux = require('reflux');

var AppActions = Reflux.createActions(
	['loggedIn', 'loggedOut', 'showModal', 'hideModal', 'handleLogin']
)

export default AppActions;