/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

// import { Panel, Input, Button } from 'react-bootstrap';
// import Header from '../../components/Header/Header.js';
// import Input from 'react-bootstrap/lib/InputGroup';

// import withStyles from 'isomorphic-style-loader/lib/withStyles';
// import s from './Table.css';
import React, { PropTypes } from 'react';

import Tables from '../../../components/Tables';

const title = 'Table';

// function handleLogin() {
//   console.log('login function');
// }


function displayTable(props, context) {
  context.setTitle(title);
  return (
    <Tables />

  );
}


displayTable.contextTypes = { setTitle: PropTypes.func.isRequired };

export default displayTable;
