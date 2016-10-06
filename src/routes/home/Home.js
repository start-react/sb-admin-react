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
import Donut from '../../components/Donut';

import {
  LineChart, Tooltip,
  Line, XAxis, YAxis, Area,
  CartesianGrid, AreaChart, Bar, BarChart,
  ResponsiveContainer } from '../../vendor/recharts';

const title = 'Sb Admin React';


const data = [
      { name: 'Page A', uv: 4000, pv: 2400, amt: 2400, value: 600 },
      { name: 'Page B', uv: 3000, pv: 1398, amt: 2210, value: 300 },
      { name: 'Page C', uv: 2000, pv: 9800, amt: 2290, value: 500 },
      { name: 'Page D', uv: 2780, pv: 3908, amt: 2000, value: 400 },
      { name: 'Page E', uv: 1890, pv: 4800, amt: 2181, value: 200 },
      { name: 'Page F', uv: 2390, pv: 3800, amt: 2500, value: 700 },
      { name: 'Page G', uv: 3490, pv: 4300, amt: 2100, value: 100 },
];

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
            <StatWidget style="panel-primary"
                    icon="fa fa-comments fa-5x"
                    count="26"
                    headerText="New Comments!"
                    footerText="View Details"
                    linkTo="/" />
          </div>
          <div className="col-lg-3 col-md-6">
            <StatWidget style = "panel-green"
                    icon = "fa fa-tasks fa-5x"
                    count = "12"
                    headerText="New Tasks!"
                    footerText="View Details"
                    linkTo="/" />
          </div>
          <div className="col-lg-3 col-md-6">
            <StatWidget style="panel-yellow"
                    icon="fa fa-shopping-cart fa-5x"
                    count="124"
                    headerText="New Orders!"
                    footerText="View Details"
                    linkTo="/" />
          </div>
          <div className="col-lg-3 col-md-6">
            <StatWidget style="panel-red"
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
                <ResponsiveContainer width="100%" aspect={2}>
                  <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }} >
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid stroke="#ccc" />
                    <Tooltip />
                    <Area type='monotone' dataKey='uv' stackId="1" stroke='#8884d8' fill='#8884d8' />
                    <Area type='monotone' dataKey='pv' stackId="1" stroke='#82ca9d' fill='#82ca9d' />
                    <Area type='monotone' dataKey='amt' stackId="1" stroke='#ffc658' fill='#ffc658' />
                  </AreaChart>
                </ResponsiveContainer>
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
                <ResponsiveContainer width="100%" aspect={2}>
                  <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }} >
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="pv" stackId="1" fill="#8884d8" />
                    <Bar dataKey="uv" stackId="1" fill="#82ca9d" />
                    <Bar type="monotone" dataKey="amt" fill="#ffc658" />
                  </BarChart>
                </ResponsiveContainer>
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
                <Donut data={data} color="#8884d8" innerRadius="35" outerRadius="55" />
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
