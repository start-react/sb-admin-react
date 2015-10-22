var React = require('react');
var Router = require('react-router');
var Reflux = require('reflux');

var AuthActions = require('../../actions/AuthActions');
var AuthStore = require('../../stores/AuthStore');

var LoginPage = React.createClass({

  getInitialState: function(){
    return {
      loginID: '',
      password: '',
      isSubmitted: false
    };
  },

  mixins: [
    Reflux.connect(AuthStore, 'authStore'),
    Router.Navigation
  ],

  getError: function(){

    if( (!this.state.loginID || !this.state.password) && this.state.isSubmitted ) {
      return <div className="alert alert-danger" style={ {'color': 'red'} }>
        *Please provide a username and password
      </div>;
    }

    if(this.state.authStore.loginErrorMessage && this.state.isSubmitted) {
      return <div className="alert alert-danger" style={ {'color': 'red'} }>
        *{this.state.authStore.loginErrorMessage}
      </div>;
    }

  },

  render: function(){
    
      

    return <div className="col-md-4 col-md-offset-4">

              <div className="text-center" style={{padding:'30px'}}>
                "SB Admin React"
              </div>

              {this.getError()}

              <div className="login-panel panel panel-default">
                <div className="panel-heading">
                  <h3 className="panel-title">Please Sign In</h3>
                </div>

                <div className="panel-body">
                  <form role="form" onSubmit={this.handleLogin}>
                    <fieldset>
                      <div className="form-group">
                        <input onChange={this.setLoginID} className="form-control" placeholder="Username" ref="loginID" type="text" autofocus="" name="name" />
                      </div>

                      <div className="form-group">
                        <input onChange={this.setPassword} className="form-control" placeholder="Password" ref="password" type="password" name="password" />
                      </div>

                      <button className="btn btn-lg btn-success btn-block" disabled={this.state.authStore.loading}>{this.state.authStore.loading?'Loading...':'Login'}</button>
                      
                    </fieldset>
                  </form>

                </div>
              </div>

            </div>

  },

  setLoginID: function(e) {

    this.setState({
      loginID: e.target.value,
      loginError: ''
    });

  },

  setPassword: function(e) {

    this.setState({
      password: e.target.value,
      loginError: ''
    });

  },

  handleLogin: function(e){

    this.transitionTo('dashboard');

    return false;

  }

});

export default LoginPage;