/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import App from '../../components/App';
import Login from './Login';
import LoginElement from './loginElement';

export default {

  path: '/login',

  action({ render, context }) {
    return render(
      <App context={context} login={true}>
        <LoginElement />
      </App>
    );
  },


};
