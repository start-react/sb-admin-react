/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import App from '../components/App';

// Child routes
import home from './home';
import contact from './contact';
import login from './login';
import table from './dashboard-pages/Tables';
import button from './dashboard-pages/Buttons';
import flotcharts from './dashboard-pages/FlotCharts';
import forms from './dashboard-pages/Forms';
import grid from './dashboard-pages/Grid';
import icons from './dashboard-pages/Icons';
import morrisjscharts from './dashboard-pages/MorrisjsCharts';
import notification from './dashboard-pages/Notification';
import panelwells from './dashboard-pages/PanelWells';
import typography from './dashboard-pages/Typography';
import blank from './dashboard-pages/Blank';
import register from './register';
import content from './content';
import error from './error';

export default {

  path: '/',

  // keep in mind, routes are evaluated in order
  children: [
    home,
    contact,
    login,
    table,
    button,
    flotcharts,
    forms,
    grid,
    icons,
    morrisjscharts,
    notification,
    panelwells,
    typography,
    register,
    blank,

    // place new routes before...
    content,
    error,
  ],

  async action({ next, render, context }) {
    const component = await next();
    if (component === undefined) return component;
    return render(
      <App context={context}>{component}</App>
    );
  },

};
