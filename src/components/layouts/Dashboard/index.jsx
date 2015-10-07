import React from "react";
import Router, { Link, RouteHandler } from "react-router";

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

  adjustResize: function(){

    var pageWrapper = this.refs.pageWrapper.getDOMNode();
    $(pageWrapper).css('min-height', $(window).height());
      
  },

  componentDidMount: function() {

    $(window).resize(this.adjustResize);
    this.adjustResize();

  },

  componentWillUnmount: function(){
    
    $(window).unbind('resize',this.adjustResize);

  },

  mixins: [Reflux.connect(AuthStore), Router.Navigation],

  render: function() {

    if(this.state.user.AuthToken == '') {
        this.transitionTo('login');
        return <div></div>;
    }

    return (
        <div id="wrapper">
        <Navbar brand={<img src={ require('../../../common/logo.png') } /> } fluid={true}  style={ {margin: 0} }>
            <Nav style={ {margin: 0} } >
                <NavItem>{this.state.showModal}</NavItem>
                <NavItem onClick={AuthActions.showModal}><button className="btn btn-success btn-xs">Show Status</button></NavItem>
                
                        
                        
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
                                <Link to="dashboard.first"><i className="fa fa-dashboard fa-fw"></i> &nbsp;First</Link>
                            </li>
                            
                            <li>
                                <Link to="dashboard.second"><i className="fa fa-bar-chart-o fa-fw"></i> &nbsp;Second</Link>
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
