import React from 'react';
import Router from 'react-router';
import {Panel, Input, Button} from 'react-bootstrap';

var LoginPage = React.createClass({

  getInitialState: function(){
    return {
      loginID: '',
      password: '',
      isSubmitted: false
    };
  },

  mixins: [Router.Navigation],

  render: function(){
  
    return <div className="col-md-4 col-md-offset-4">

        <div className="text-center">
          <h1 className="login-brand-text">SB Admin React</h1>
          <h3 className="text-muted">Created by <a href="http://startreact.com">StartReact.com</a> team</h3>
        </div>

        <Panel header={<h3>Please Sign In</h3>} className="login-panel">

          <form role="form" onSubmit={this.handleLogin}>
            <fieldset>
              <div className="form-group">
                <Input onChange={this.setLoginID} className="form-control" placeholder="Username" ref="loginID" type="text" autofocus="" name="name" />
              </div>

              <div className="form-group">
                <Input onChange={this.setPassword} className="form-control" placeholder="Password" ref="password" type="password" name="password" />
              </div>
              <Input type="checkbox" label="Remember Me" />
              <Button type="submit" bsSize="large" bsStyle="success" block>Login</Button>
              
            </fieldset>
          </form>

        </Panel>
        
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