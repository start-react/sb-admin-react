/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
// import { Panel, Input, Button } from 'react-bootstrap';
import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';
import Input from 'react-bootstrap/lib/InputGroup';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Login.css';

const title = 'Log In';

// function handleLogin() {
//   console.log('login function');
// }


function Login(props, context) {
  context.setTitle(title);
  return (
    <div className="col-md-4 col-md-offset-4">
      <div className="text-center">
        <h1 className="login-brand-text">SB Admin React</h1>
        <h3 className="text-muted">Created by <a href="http://startreact.com">StartReact.com</a> team</h3>
      </div>

      <Panel header={<h3>Please Sign In</h3>} className="login-panel">

        <form role="form">
          <fieldset>
            <div className="form-group">
              <Input
                className="form-control"
                placeholder="Username"
                type="text"
                name="name"
              />
            </div>

            <div className="form-group">
              <Input
                className="form-control"
                placeholder="Password"
                type="password"
                name="password"
              />
            </div>
            <Input type="checkbox" label="Remember Me" />
            <Button type="submit" bsSize="large" bsStyle="success" block>Login</Button>

          </fieldset>
        </form>

      </Panel>

    </div>

  );
}


Login.contextTypes = { setTitle: PropTypes.func.isRequired };

export default withStyles(s)(Login);
