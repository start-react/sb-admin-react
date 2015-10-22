import React from "react";
import Router, { Link, RouteHandler } from "react-router";

import styles from "./style.css";
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, ProgressBar} from "react-bootstrap";
import $ from "jQuery";
import classNames from "classnames";

var Reflux = require("reflux");
var AuthStore = require('../../../stores/AuthStore');
var AuthActions = require('../../../actions/AuthActions');


var HomePage = React.createClass({
    
  componentWillMount: function() {
    this.setState({Height: $(window).height()});
  },

  componentDidMount: function() {

  },

  componentWillUnmount: function(){
    
    $(window).unbind('resize',this.adjustResize);

  },

  getInitialState: function(){
    
    return {
      uiElementsCollapsed: false
    };

  },

  mixins: [Reflux.connect(AuthStore, "authStore"), Router.Navigation],

  render: function() {

    if(this.state.authStore.user.AuthToken == '') {
        this.transitionTo('login');
        return <div></div>;
    }

    return (
        <div id="wrapper">
        <Navbar brand="SB Admin React" fluid={true}  style={ {margin: 0} }>
            <Nav style={ {margin: 0} } >
                <NavDropdown title=<i className="fa fa-envelope fa-fw"></i> pullRight >
                  <MenuItem eventKey="1">
                    <div> <strong>John Smith</strong> <span className="pull-right text-muted"> <em>Yesterday</em> </span> </div> 
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>

                  </MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey="2">
                    <div> <strong>John Smith</strong> <span className="pull-right text-muted"> <em>Yesterday</em> </span> </div> 
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div>
                  </MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey="3">
                    <div> <strong>John Smith</strong> <span className="pull-right text-muted"> <em>Yesterday</em> </span> </div> 
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eleifend...</div> 
                  </MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey="4">
                    <strong>Read All Messages</strong> <i className="fa fa-angle-right"></i>
                  </MenuItem>
                </NavDropdown>

                <NavDropdown title=<i className="fa fa-tasks fa-fw"></i> pullRight >
                  <MenuItem eventKey="1" style={ {width: 300} }>
                    <div> 
                      <p> <strong>Task 1</strong> <span className="pull-right text-muted">40% Complete</span> </p> 
                      <div>
                        <ProgressBar active bsStyle="success" now={40} /> 
                      </div> 
                    </div>
                  </MenuItem> 
                  <MenuItem divider />
                  <MenuItem eventKey="2">
                    <div> 
                      <p> <strong>Task 2</strong> <span className="pull-right text-muted">20% Complete</span> </p> 
                      <div>
                        <ProgressBar active bsStyle="info" now={20} />
                      </div> 
                    </div> 
                  </MenuItem> 
                  <MenuItem divider />
                  <MenuItem eventKey="3">
                    <div> 
                      <p> <strong>Task 3</strong> <span className="pull-right text-muted">60% Complete</span> </p> 
                      <div>
                        <ProgressBar active bsStyle="warning" now={60} />
                      </div> 
                    </div> 
                  </MenuItem> 
                  <MenuItem divider />
                  <MenuItem eventKey="4">
                    <div> 
                      <p> <strong>Task 4</strong> <span className="pull-right text-muted">80% Complete</span> </p> 
                      <div>
                        <ProgressBar active bsStyle="danger" now={80} />
                      </div> 
                    </div>
                  </MenuItem> 
                  <MenuItem divider />
                  <MenuItem eventKey="5">
                      <strong>See All Tasks</strong> <i className="fa fa-angle-right"></i>
                  </MenuItem>
                </NavDropdown>

                <NavDropdown title=<i className="fa fa-bell fa-fw"></i> pullRight >
                  <MenuItem eventKey="1" style={ {width: 300} }>
                    <div> <i className="fa fa-comment fa-fw"></i> New Comment <span className="pull-right text-muted small">4 minutes ago</span> </div>
                  </MenuItem> 
                  <MenuItem divider />
                  <MenuItem eventKey="2">
                    <div> <i className="fa fa-twitter fa-fw"></i> 3 New Followers <span className="pull-right text-muted small">12 minutes ago</span> </div>
                  </MenuItem> 
                  <MenuItem divider />
                  <MenuItem eventKey="3">
                    <div> <i className="fa fa-envelope fa-fw"></i> Message Sent <span className="pull-right text-muted small">4 minutes ago</span> </div>
                  </MenuItem> 
                  <MenuItem divider />
                  <MenuItem eventKey="4">
                    <div> <i className="fa fa-tasks fa-fw"></i> New Task <span className="pull-right text-muted small">4 minutes ago</span> </div>
                  </MenuItem> 
                  <MenuItem divider />
                  <MenuItem eventKey="5">
                    <div> <i className="fa fa-upload fa-fw"></i> Server Rebooted <span className="pull-right text-muted small">4 minutes ago</span> </div>
                  </MenuItem> 
                  <MenuItem divider />
                  <MenuItem eventKey="6">
                    <strong>See All Alerts</strong> <i className="fa fa-angle-right"></i>
                  </MenuItem>
                </NavDropdown>

                <NavDropdown title=<i className="fa fa-user fa-fw"></i> pullRight >
                  <MenuItem eventKey="1">
                    <i className="fa fa-user fa-fw"></i> User Profile
                  </MenuItem> 
                  <MenuItem eventKey="2">
                    <i className="fa fa-gear fa-fw"></i> Settings
                  </MenuItem> 
                  <MenuItem eventKey="3">
                    <a href="http://www.strapui.com/">
                      <i className="fa fa-eye fa-fw"></i> Premium Angular Themes
                    </a>
                  </MenuItem> 
                  <MenuItem divider />
                  <MenuItem eventKey="4">
                    <Link to="login">
                      <i className="fa fa-sign-out fa-fw"></i> Logout
                    </Link>
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
                                <Link to="dashboard.home"><i className="fa fa-dashboard fa-fw"></i> &nbsp;Dashboard</Link>
                            </li>
                            
                            <li>
                                <NavDropdown title=<span><i className="fa fa-bar-chart-o fa-fw"></i> &nbsp;Charts</span> > 
                                  <MenuItem eventKey="1">
                                    <Link to="dashboard.flot-charts">Flot Charts</Link> 
                                  </MenuItem> 
                                  <MenuItem eventKey="2">
                                    <Link to="dashboard.morrisjs-charts">Morris.js Charts</Link> 
                                  </MenuItem>
                                </NavDropdown>
                            </li>

                            <li> 
                                <Link to="dashboard.tables"><i className="fa fa-table fa-fw"></i> &nbsp;Tables</Link>
                            </li> 
                            <li> 
                                <Link to="dashboard.forms"><i className="fa fa-edit fa-fw"></i> Forms</Link> 
                            </li>
                            <li> 
                                <a href="javascript:void(0)" onClick={ () => { this.setState({uiElementsCollapsed: !this.state.uiElementsCollapsed}); return false; } }><i className="fa fa-edit fa-fw"></i> UI Elements</a> 

                                <ul className={classNames({'nav nav-second-level': true, 'collapse': this.state.uiElementsCollapsed})}>
                                    <li>
                                      <Link to="dashboard.panels-wells">Panels and Wells</Link> 
                                    </li>
                                    <li>
                                      <Link to="dashboard.buttons">Buttons</Link> 
                                    </li>
                                    <li>
                                      <Link to="dashboard.notifications">Notifications</Link>
                                    </li>
                                    <li>
                                      <Link to="dashboard.typography">Typography</Link> 
                                    </li>
                                    <li>
                                      <Link to="dashboard.icons"> Icons</Link>
                                    </li>
                                    <li>
                                      <Link to="dashboard.grid">Grid</Link>
                                    </li>
                                </ul>

                            </li> 
                            <li> 
                              <NavDropdown title=<span><i className="fa fa-sitemap fa-fw"></i>&nbsp;Multi-Level Dropdown</span> > 
                                <MenuItem eventKey="1">Second Level Item</MenuItem>
                                <MenuItem eventKey="2">Second Level Item</MenuItem>
                                <MenuItem eventKey="3">
                                  <NavDropdown title=<span>Third Level</span> > 
                                    <MenuItem eventKey="4">Third Level Item</MenuItem> 
                                    <MenuItem eventKey="5">Third Level Item</MenuItem> 
                                    <MenuItem eventKey="6">Third Level Item</MenuItem> 
                                    <MenuItem eventKey="7">Third Level Item</MenuItem>
                                  </NavDropdown>
                                </MenuItem>
                              </NavDropdown>  
                            </li> 
                            <li>
                              <NavDropdown title=<span><i className="fa fa-files-o fa-fw"></i>&nbsp;Sample Pages</span> >
                                <MenuItem eventKey="1">
                                  <Link to="dashboard.blank">Blank Page</Link>
                                </MenuItem>
                                <MenuItem eventKey="2">
                                  <Link to="login">Login Page</Link>
                                </MenuItem>
                              </NavDropdown> 
                            </li>
                            <li>
                              <a href="http://www.strapui.com/">Premium Angular Themes</a>
                            </li>
                        </ul>

                    </div>
                </div>

                
                 

            {/*</nav>*/}
            </Navbar>


            <div id="page-wrapper" className="page-wrapper" ref="pageWrapper" style={{height: this.state.Height}}>
                <RouteHandler {...this.props} />
            </div>

        {/*<div>{this.state.showModal?<ModalApp />:''}</div>    */}
    </div>

    );
  },

  statics: {
    fetchData: function(params) {
      }
  }
  
});

export default HomePage;
