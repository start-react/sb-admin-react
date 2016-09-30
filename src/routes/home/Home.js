/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {
  MenuItem,
  DropdownButton,
  Panel, PageHeader, ListGroup, ListGroupItem, Button,
} from 'react-bootstrap';

// import Header from '../../components/Header/Header.js';
// import Sidebar from '../../components/Sidebar';
import s from './Home.css';
import StatWidget from '../../components/Widget';

const title = 'Sb Admin React';

function Home({ news }, context) {
  context.setTitle(title);
  return (
    <div>

        <div className="row">
          <div className="col-lg-12">
            <PageHeader>Dashboard</PageHeader>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-6">
            <StatWidget style="primary"
                    icon="fa fa-comments fa-5x"
                    count="26"
                    headerText="New Comments!"
                    footerText="View Details"
                    linkTo="/" />
          </div>
          <div className="col-lg-3 col-md-6">
            <StatWidget style = "success"
                    icon = "fa fa-tasks fa-5x"
                    count = "12"
                    headerText="New Tasks!"
                    footerText="View Details"
                    linkTo="/" />
          </div>
          <div className="col-lg-3 col-md-6">
            <StatWidget style="warning"
                    icon="fa fa-shopping-cart fa-5x"
                    count="124"
                    headerText="New Orders!"
                    footerText="View Details"
                    linkTo="/" />
          </div>
          <div className="col-lg-3 col-md-6">
            <StatWidget style="danger"
                    icon="fa fa-support fa-5x"
                    count="13"
                    headerText="Support Tickets!"
                    footerText="View Details"
                    linkTo="/" />
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8">

            <Panel header={<span>
              <i className="fa fa-bar-chart-o fa-fw"></i> Area Chart Example
                  <div className="pull-right">
                      <DropdownButton title="Dropdown" bsSize="xs" pullRight id="dropdownButton1" >
                        <MenuItem eventKey="1">Action</MenuItem>
                        <MenuItem eventKey="2">Another action</MenuItem>
                        <MenuItem eventKey="3">Something else here</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey="4">Separated link</MenuItem>
                      </DropdownButton>
                  </div>
              </span>}
            >
              <div>
                Panel contents
              </div>

            </Panel>

            <Panel header={<span>
              <i className="fa fa-bar-chart-o fa-fw"></i> Bar Chart Example
                  <div className="pull-right">
                      <DropdownButton title="Dropdown" bsSize="xs" pullRight id="dropdownButton2">
                        <MenuItem eventKey="1">Action</MenuItem>
                        <MenuItem eventKey="2">Another action</MenuItem>
                        <MenuItem eventKey="3">Something else here</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey="4">Separated link</MenuItem>
                      </DropdownButton>
                  </div>
              </span>}
            >
              <div>
                Panel contents
              </div>
            </Panel>

            <Panel header={<span>
              <i className="fa fa-clock-o fa-fw"></i> Responsive Timeline
              </span>}
            >
              <div>
                Panel contents
              </div>
            </Panel>

          </div>

          <div className="col-lg-4">

            <Panel header={<span>
              <i className="fa fa-bell fa-fw"></i> Notifications Panel
              </span>}
            >
              <ListGroup>
                <ListGroupItem href="javascript:void(0)"><i className="fa fa-comment fa-fw"></i> New Comment
                  <span className="pull-right text-muted small"><em>4 minutes ago</em></span>
                </ListGroupItem>
                <ListGroupItem href="javascript:void(0)">
                  <i className="fa fa-twitter fa-fw"></i> 3 New Followers
                  <span className="pull-right text-muted small"><em>12 minutes ago</em></span>
                </ListGroupItem>
                <ListGroupItem href="javascript:void(0)">
                  <i className="fa fa-envelope fa-fw"></i> Message Sent
                  <span className="pull-right text-muted small"><em>27 minutes ago</em></span>
                </ListGroupItem>
                <ListGroupItem href="javascript:void(0)">
                  <i className="fa fa-tasks fa-fw"></i> New Task
                  <span className="pull-right text-muted small"><em>43 minutes ago</em></span>
                </ListGroupItem>
                <ListGroupItem href="javascript:void(0)">
                  <i className="fa fa-upload fa-fw"></i> Server Rebooted
                  <span className="pull-right text-muted small"><em>11:32 AM</em></span>
                </ListGroupItem>
                <ListGroupItem href="javascript:void(0)">
                  <i className="fa fa-bolt fa-fw"></i> Server Crashed!
                  <span className="pull-right text-muted small"><em>11:13 AM</em></span>
                </ListGroupItem>
                <ListGroupItem href="javascript:void(0)">
                  <i className="fa fa-warning fa-fw"></i> Server Not Responding
                  <span className="pull-right text-muted small"><em>10:57 AM</em></span>
                </ListGroupItem>
                <ListGroupItem href="javascript:void(0)">
                  <i className="fa fa-shopping-cart fa-fw"></i> New Order Placed
                  <span className="pull-right text-muted small"><em>9:49 AM</em></span>
                </ListGroupItem>
                <ListGroupItem href="javascript:void(0)">
                  <i className="fa fa-money fa-fw"></i> Payment Received
                  <span className="pull-right text-muted small"><em>Yesterday</em></span>
                </ListGroupItem>
              </ListGroup>
              <Button block>View All Alerts</Button>
            </Panel>

            <Panel header={<span>
              <i className="fa fa-bar-chart-o fa-fw"></i> Donut Chart Example
              </span>}
            >
              <div>
                Panel contents
              </div>
            </Panel>

          </div>

        </div>
      </div>
  );
}

Home.propTypes = {
  news: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    contentSnippet: PropTypes.string,
  })).isRequired,
};
Home.contextTypes = { setTitle: PropTypes.func.isRequired };

export default withStyles(s)(Home);
