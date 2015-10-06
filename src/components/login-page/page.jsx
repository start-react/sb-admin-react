var React = require('react');
var AppActions = require('../../actions/app-actions');
var Router = require('react-router');
var Reflux = require('reflux');
var AppStore = require('../../stores/app-store');

var LoginPage = React.createClass({
    
    componentWillUnmount: function(){
        console.log("component is unmounting");
    },
    
    getInitialState: function(){
        return {loginID: '', password: ''};
    },

    mixins: [Reflux.connect(AppStore), Router.Navigation],

    render: function(){

        if(this.state.AuthToken != '')
            this.transitionTo('Dashboard');

        return <div className="col-md-4 col-md-offset-4">

                <div className="text-center" style={{padding:'30px'}}>
                  <img className="Header-brandImg" src={require('../../common/logo.png')} width="200" height="38" alt="React" />
                </div>
                        
                <div className="login-panel panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Please Sign In</h3>
                    </div>
                    <div className="panel-body">
                        <form role="form" onSubmit={this.handleLogin}>
                            <fieldset>
                                <div className="form-group">
                                    <input onChange={this.setLoginID} className="form-control" placeholder="login ID" ref="loginID" type="text" autofocus="" />
                                </div>
                                <div className="form-group">
                                    <input onChange={this.setPassword} className="form-control" placeholder="Password" ref="password" type="password" />
                                </div>
                                <button className="btn btn-lg btn-success btn-block">Login</button>
                            </fieldset>
                        </form>
                    </div>
                </div>

            </div>

    },

    setLoginID: function(e) {
        this.setState({loginID: e.target.value});
    },

    setPassword: function(e) {
        this.setState({password: e.target.value});
    },

    handleLogin: function(e){

        e.stopPropagation();
        e.preventDefault();

        if(this.state.loginID != '' && this.state.password != '')
            AppActions.handleLogin(this.state.loginID, this.state.password);
    }
});

export default LoginPage;