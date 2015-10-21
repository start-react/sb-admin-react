import React, { PropTypes, Component } from 'react';
import {NavDropdown, MenuItem, Navbar, Nav, NavItem, Panel} from "react-bootstrap";

class Home extends Component {

  render() {
    return (
      	<div>
        	<div className="row">
                <div className="col-lg-12">
                    <h1 className="page-header">Dashboard</h1>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-3 col-md-6">
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <div className="row">
                                <div className="col-xs-3">
                                    <i className="fa fa-comments fa-5x"></i>
                                </div>
                                <div className="col-xs-9 text-right">
                                    <div className="huge">26</div>
                                    <div>New Comments!</div>
                                </div>
                            </div>
                        </div>
                        <a href="#">
                            <div className="panel-footer">
                                <span className="pull-left">View Details</span>
                                <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>
                                <div className="clearfix"></div>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6">
                    <div className="panel panel-green">
                        <div className="panel-heading">
                            <div className="row">
                                <div className="col-xs-3">
                                    <i className="fa fa-tasks fa-5x"></i>
                                </div>
                                <div className="col-xs-9 text-right">
                                    <div className="huge">12</div>
                                    <div>New Tasks!</div>
                                </div>
                            </div>
                        </div>
                        <a href="#">
                            <div className="panel-footer">
                                <span className="pull-left">View Details</span>
                                <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>
                                <div className="clearfix"></div>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6">
                    <div className="panel panel-yellow">
                        <div className="panel-heading">
                            <div className="row">
                                <div className="col-xs-3">
                                    <i className="fa fa-shopping-cart fa-5x"></i>
                                </div>
                                <div className="col-xs-9 text-right">
                                    <div className="huge">124</div>
                                    <div>New Orders!</div>
                                </div>
                            </div>
                        </div>
                        <a href="#">
                            <div className="panel-footer">
                                <span className="pull-left">View Details</span>
                                <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>
                                <div className="clearfix"></div>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6">
                    <div className="panel panel-red">
                        <div className="panel-heading">
                            <div className="row">
                                <div className="col-xs-3">
                                    <i className="fa fa-support fa-5x"></i>
                                </div>
                                <div className="col-xs-9 text-right">
                                    <div className="huge">13</div>
                                    <div>Support Tickets!</div>
                                </div>
                            </div>
                        </div>
                        <a href="#">
                            <div className="panel-footer">
                                <span className="pull-left">View Details</span>
                                <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>
                                <div className="clearfix"></div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-8">
                    <Panel header=<span><i className="fa fa-bar-chart-o fa-fw"></i> Area Chart Example
                                        <div className="pull-right">
                                            <div className="btn-group">
                                                <NavDropdown title=<a>Actions</a> pullRight >
                              						<MenuItem eventKey="1">
                                                		Action
                                                	</MenuItem>
                                                	<MenuItem eventKey="2">
            		     								Another action
            		     							</MenuItem>
                                                	<MenuItem eventKey="3">
            		     								Something else here
                                                    </MenuItem>
                                                    <MenuItem divider />
                                                	<MenuItem eventKey="4">
            		     								Separated link
            		     							</MenuItem>
                                                </NavDropdown>
                                            </div>
                                        </div>
                                    </span>  >
                        <div>
                            Panel contents
                        </div>
                    </Panel>

                    <Panel header=<span><i className="fa fa-bar-chart-o fa-fw"></i> Bar Chart Example
                                        <div className="pull-right">
                                            <div className="btn-group">
                                                <NavDropdown title=<a>Actions</a> pullRight >
                              						<MenuItem eventKey="1">
                                                		Action
                                                	</MenuItem>
                                                	<MenuItem eventKey="2">
            		     								Another action
            		     							</MenuItem>
                                                	<MenuItem eventKey="3">
            		     								Something else here
                                                    </MenuItem>
                                                    <MenuItem divider />
                                                	<MenuItem eventKey="4">
            		     								Separated link
            		     							</MenuItem>
                                                </NavDropdown>
                                            </div>
                                        </div>
                                    </span> >
                        <div>
                            Panel contents
                        </div>
                    </Panel>

                    <Panel header=<span><i className="fa fa-clock-o fa-fw"></i> Responsive Timeline</span> >
                        <div>
                            Panel contents
                        </div>
                    </Panel>

                </div>

                <div className="col-lg-4">
                    <Panel header=<span><i className="fa fa-bell fa-fw"></i> Notifications Panel</span> >
                        <div>
                            <div className="list-group">
                                <a href="#" className="list-group-item">
                                    <i className="fa fa-comment fa-fw"></i> New Comment
                                    <span className="pull-right text-muted small"><em>4 minutes ago</em>
                                    </span>
                                </a>
                                <a href="#" className="list-group-item">
                                    <i className="fa fa-twitter fa-fw"></i> 3 New Followers
                                    <span className="pull-right text-muted small"><em>12 minutes ago</em>
                                    </span>
                                </a>
                                <a href="#" className="list-group-item">
                                    <i className="fa fa-envelope fa-fw"></i> Message Sent
                                    <span className="pull-right text-muted small"><em>27 minutes ago</em>
                                    </span>
                                </a>
                                <a href="#" className="list-group-item">
                                    <i className="fa fa-tasks fa-fw"></i> New Task
                                    <span className="pull-right text-muted small"><em>43 minutes ago</em>
                                    </span>
                                </a>
                                <a href="#" className="list-group-item">
                                    <i className="fa fa-upload fa-fw"></i> Server Rebooted
                                    <span className="pull-right text-muted small"><em>11:32 AM</em>
                                    </span>
                                </a>
                                <a href="#" className="list-group-item">
                                    <i className="fa fa-bolt fa-fw"></i> Server Crashed!
                                    <span className="pull-right text-muted small"><em>11:13 AM</em>
                                    </span>
                                </a>
                                <a href="#" className="list-group-item">
                                    <i className="fa fa-warning fa-fw"></i> Server Not Responding
                                    <span className="pull-right text-muted small"><em>10:57 AM</em>
                                    </span>
                                </a>
                                <a href="#" className="list-group-item">
                                    <i className="fa fa-shopping-cart fa-fw"></i> New Order Placed
                                    <span className="pull-right text-muted small"><em>9:49 AM</em>
                                    </span>
                                </a>
                                <a href="#" className="list-group-item">
                                    <i className="fa fa-money fa-fw"></i> Payment Received
                                    <span className="pull-right text-muted small"><em>Yesterday</em>
                                    </span>
                                </a>
                            </div>
                            <a href="#" className="btn btn-default btn-block">View All Alerts</a>
                        </div>
                    </Panel>

                    <Panel header=<span><i className="fa fa-bar-chart-o fa-fw"></i> Donut Chart Example</span> >
                        <div>
                            Panel contents
                        </div>
                    </Panel>

                </div>

            </div>
      	</div>
    );
  };

}

export default Home;