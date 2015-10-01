/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';

class LandingPage extends Component {

  static contextTypes = {
    //onSetTitle: PropTypes.func.isRequired,
  };

  render() {
    const title = 'Log In';
    //this.context.onSetTitle(title);
    return (
          <div className="col-md-4 col-md-offset-4">

            <div className="text-center" style={{padding:'30px'}}>
              <img className="Header-brandImg" src={require('../../common/logo.png')} width="200" height="38" alt="React" />
            </div>
                    
            <div className="login-panel panel panel-default">

                <div>
                </div>
                <div className="panel-heading">
                    <h3 className="panel-title">Please Sign In</h3>
                </div>
                <div className="panel-body">
                    <form role="form">
                        <fieldset>
                            <div className="form-group">
                                <input onChange={this.setLoginID.bind(this)} className="form-control" placeholder="login ID" ref="loginID" type="text" autofocus="" />
                            </div>
                            <div className="form-group">
                                <input onChange={this.setPassword.bind(this)} className="form-control" placeholder="Password" ref="password" type="password" />
                            </div>
                            <button className="btn btn-lg btn-success btn-block" onClick={this.verifyLogin.bind(this)}>Login</button>
                        </fieldset>
                    </form>
                </div>
            </div>

          </div>
        
    );
  };

  verifyLogin(e) {
    // var test = this.refs.loginID;

    console.log("verify login", this.state.loginID, this.state.password);

    // APIService.getAuthenticatedToken(this.state.loginID + ':' + this.state.password);
    if(this.state.loginID == 'sahusoft' && this.state.password == 'agiledevelopment'){
      console.log("correct login");
      document.location.href = '/dashboard/first';
      //Link.handleClick(e);
    }
    else
      console.log("incorrect login");
    
  };

  setLoginID(e) {
    this.setState({loginID: e.target.value});
  };

  setPassword(e) {
    this.setState({password: e.target.value});
  };

}

export default LandingPage;