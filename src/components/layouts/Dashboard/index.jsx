import React from "react";
import { Link, Router, RouteHandler } from "react-router";

import styles from "./style.css";
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, ProgressBar} from "react-bootstrap";
import $ from "jQuery";

var Reflux = require("reflux");
var AuthStore = require('../../../stores/AuthStore');
var AuthActions = require('../../../actions/AuthActions');


var HomePage = React.createClass({
  componentWillMount: function() {
    // console.log("[HomePage] will mount with server response: ", this.props.data.home);
    console.log("[HomePage] will mount with server response: ", this.props.data);
  },

  componentDidMount: function() {
    var pageWrapper = this.refs.pageWrapper.getDOMNode();
    $(pageWrapper).css('min-height', $(window).height());
  },

  mixins: [Reflux.connect(AuthStore)],

  render: function() {

    return (
        <div id="wrapper">
        <Navbar brand={<img src={ require('../../../common/logo.png') } /> } fluid={true}  style={ {margin: 0} }>
            <Nav style={ {margin: 0} } >
                <NavItem>{this.state.showModal}</NavItem>
                <NavItem onClick={AuthActions.showModal}><button className="btn btn-success btn-xs">Show Status</button></NavItem>
                <NavDropdown eventKey={1} title=<i className="fa fa-envelope fa-fw"></i> id="basic-nav-dropdown">
                            <MenuItem eventKey="1">
                                
                                    <div>
                                        <strong>John Smith</strong>
                                        <span className="pull-right text-muted">
                                            <em>Yesterday</em>
                                        </span>
                                    </div>
                                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</div>
                                
                            </MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey="2">
                                <a href="">
                                    <div>
                                        <strong>John Smith</strong>
                                        <span className="pull-right text-muted">
                                            <em>Yesterday</em>
                                        </span>
                                    </div>
                                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>
                                </a>
                            </MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey="3">
                                <a href="">
                                    <div>
                                        <strong>John Smith</strong>
                                        <span className="pull-right text-muted">
                                            <em>Yesterday</em>
                                        </span>
                                    </div>
                                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>
                                </a>
                            </MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey="4">
                                <a className="text-center" href="#">
                                    <strong>Read All Messages </strong>
                                    <i className="fa fa-angle-right"></i>
                                </a>
                            </MenuItem>
                        </NavDropdown>
                        <NavDropdown eventKey={2} title=<i className="fa fa-tasks fa-fw"></i> id="basic-nav-dropdown">
                            <MenuItem eventKey="1">
                                
                                    <div>
                                        <p>
                                            <strong>Task 1</strong>
                                            <span className="pull-right text-muted">40% Complete</span>
                                        </p>
                                        <ProgressBar now={40} className="progress progress-bar-success" />
                                        <div className="progress-bar progress-bar-success width:40%" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
                                                <span className="sr-only">40% Complete (success)</span>
                                        </div>
                                        
                                    </div>
                                
                            </MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey="2">
                                <a href="">
                                    <div>
                                        <p>
                                            <strong>Task 2</strong>
                                            <span className="pull-right text-muted">20% Complete</span>
                                        </p>
                                        <ProgressBar now={20} className="progress progress-bar-success" />
                                        <div className="progress-bar progress-bar-info width:20%" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" >
                                            <span className="sr-only">20% Complete</span>
                                        </div>
                                        
                                    </div>
                                </a>
                            </MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey="3">
                                <a href="">
                                    <div>
                                        <p>
                                            <strong>Task 3</strong>
                                            <span className="pull-right text-muted">60% Complete</span>
                                        </p>
                                        <ProgressBar now={60} className="progress progress-bar-success" />
                                        
                                        
                                    </div>
                                </a>
                            </MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey="4">
                                <a href="">
                                    <div>
                                        <p>
                                            <strong>Task 4</strong>
                                            <span className="pull-right text-muted">80% Complete</span>
                                        </p>
                                        <ProgressBar now={80} className="progress progress-bar-success" />
                                        <div className="progress-bar progress-bar-danger width:80%" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                                            <span className="sr-only">80% Complete (danger)</span>
                                        </div>
                                        
                                    </div>
                                </a>
                            </MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey="5">
                                <a className="text-center" href="#">
                                    <strong>See All Tasks </strong>
                                    <i className="fa fa-angle-right"></i>
                                </a>
                            </MenuItem>
                        </NavDropdown>
                        <NavDropdown eventKey={3} title=<i className="fa fa-bell fa-fw"></i> id="basic-nav-dropdown">
                            <MenuItem eventKey="1">
                                
                                    <div>
                                        <i className="fa fa-comment fa-fw"></i> New Comment
                                        <span className="pull-right text-muted small">4 minutes ago</span>
                                    </div>
                                
                            </MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey="2">
                                <a href="">
                                    <div>
                                        <i className="fa fa-twitter fa-fw"></i> 3 New Followers
                                        <span className="pull-right text-muted small">12 minutes ago</span>
                                    </div>
                                </a>
                            </MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey="3">
                                <a href="">
                                    <div>
                                        <i className="fa fa-envelope fa-fw"></i> Message Sent
                                        <span className="pull-right text-muted small">4 minutes ago</span>
                                    </div>
                                </a>
                            </MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey="4">
                                <a href="">
                                    <div>
                                        <i className="fa fa-tasks fa-fw"></i> New Task
                                        <span className="pull-right text-muted small">4 minutes ago</span>
                                    </div>
                                </a>
                            </MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey="5">
                                <a href="">
                                    <div>
                                        <i className="fa fa-upload fa-fw"></i> Server Rebooted
                                        <span className="pull-right text-muted small">4 minutes ago</span>
                                    </div>
                                </a>
                            </MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey="6">
                                <a className="text-center" href="#">
                                    <strong>See All Alerts </strong>
                                    <i className="fa fa-angle-right"></i>
                                </a>
                            </MenuItem>
                        </NavDropdown>
                        <NavDropdown className="pull-right" eventKey={4} title=<i className="fa fa-user"> {this.state.user.name}</i> id="basic-nav-dropdown">
                            <MenuItem eventKey="1">
                                
                                    <i className="fa fa-user fa-fw"></i> User Profile
                                
                            </MenuItem>
                            <MenuItem eventKey="2">
                                <a href="">
                                    <i className="fa fa-gear fa-fw"></i> Settings
                                </a>
                            </MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey="3">
                                
                                    <Link to="logout"><i className="fa fa-sign-out fa-fw"></i> Logout</Link>
                                
                            </MenuItem>
                        </NavDropdown>
            </Nav>
            {/*<nav className="navbar navbar-default navbar-static-top" style={ {'margin-bottom':0} } role="navigation">*/}
                
                <div className="navbar-default sidebar" style={ { 'marginLeft': '-20px' } } role="navigation">
                    <div className="sidebar-nav navbar-collapse">
                        <ul className="nav in" id="side-menu">
                            <li className="sidebar-search">
                                <div className="input-group custom-search-form">
                                    <input type="text" className="form-control" placeholder="Search..." />
                                    <span className="input-group-btn">
                                    <button className="btn btn-default" type="button">
                                        <i className="fa fa-search"></i>
                                    </button>
                                </span>
                                </div>
                            </li>
                            <li>
                                <Link to="dashboard.first"><i className="fa fa-dashboard fa-fw"></i>First</Link>
                            </li>
                            
                            <li>
                                <Link to="dashboard.second"><i className="fa fa-bar-chart-o fa-fw"></i>Second</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            {/*</nav>*/}
            </Navbar>


            <div id="page-wrapper" className="page-wrapper" ref="pageWrapper">
                <RouteHandler {...this.props} />
            </div>

        {/*<div>{this.state.showModal?<ModalApp />:''}</div>    */}
    </div>

    );
  },

  statics: {
    fetchData: function(params) {
      }
  },

  handleLogout: function(){
    console.log("logging out");
  }
});

export default HomePage;
