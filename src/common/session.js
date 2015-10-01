/**
 * Singleton representing the current session.
 *
 * Currently using `window.user` to determine if user is logged in.
 */
class Session {

  constructor(config = {}) {
    this._config = config;
    this._config.user = "sahusoft";
  }

  isLoggedIn() {
    return this._config.user ? true : false;
  }

  setLoggedIn(user) {
  	this._config.user = user;
  }

  setLoggedOut() {
  	this._config.user = false;
  }
  
}

let session = new Session(window);


export default session;