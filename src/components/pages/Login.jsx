var React = require('react');
var Router = require('react-router');
var Reflux = require('reflux');

var AuthActions = require('../../actions/AuthActions');
var AuthStore = require('../../stores/AuthStore');

var LoginPage = React.createClass({
    
    getInitialState: function(){
        return {loginID: '', password: ''};
    },

    mixins: [Reflux.connect(AuthStore), Router.Navigation],

    render: function(){
        console.log(this.state);

        if(this.state.user.AuthToken != '')
            this.transitionTo('dashboard');

        return <div className="col-md-4 col-md-offset-4">

                <div className="text-center" style={{padding:'30px'}}>
                  <img className="Header-brandImg" src={require('../../common/logo.png')} width="200" height="38" alt="React" />
                </div>
                {this.state.loginError
                    ?<div className="alert alert-danger" style={ {'color': 'red'} }>
                      * {this.state.loginError}
                    </div>
                    :''
                }
                <div className="login-panel panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Please Sign In</h3>
                    </div>
                    <div className="panel-body">
                        <form role="form" onSubmit={this.handleLogin}>
                            <fieldset>
                                <div className="form-group">
                                    <input onChange={this.setLoginID} className="form-control" placeholder="Username" ref="loginID" type="text" autofocus="" />
                                </div>
                                <div className="form-group">
                                    <input onChange={this.setPassword} className="form-control" placeholder="Password" ref="password" type="password" />
                                </div>
                                <button className="btn btn-lg btn-success btn-block" disabled={this.state.loading}>{this.state.loading?'Loading...':'Login'}</button>
                            </fieldset>
                        </form>
                        
                    </div>
                </div>

            </div>

    },

    setLoginID: function(e) {
        this.setState({loginID: e.target.value});
        this.setState({loginError: ''});
    },

    setPassword: function(e) {
        this.setState({password: e.target.value});
        this.setState({loginError: ''});
    },

    handleLogin: function(e){
        console.log("handleLogin", this.state);
        e.stopPropagation();
        e.preventDefault();

        if(this.state.loginID != '' && this.state.password != '')
            AuthActions.handleLogin(this.state.loginID, this.state.password);
        else
            AuthActions.loginError('Please provide Username and Password');
    }
});

export default LoginPage;