/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var Router = require('react-router');

var Navbar = require('react-bootstrap/Navbar');
var Nav = require('react-bootstrap/Nav');
var NavItem = require('react-bootstrap/NavItem');
var DropdownButton = require('react-bootstrap/DropdownButton');
var DropdownMenu = require('react-bootstrap/DropdownMenu');
var MenuItem = require('react-bootstrap/MenuItem');
var ProgressBar = require('react-bootstrap/ProgressBar');
var Link = Router.Link;


var _ = require('lodash');

var Navigation = Router.Navigation;

module.exports = React.createClass({

	mixins: [Navigation],

	render: function(){
		return <div className="navbar-default sidebar" role="navigation">
                <div className="sidebar-nav navbar-collapse">
                    <ul className="nav" id="side-menu">
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
                            <Link to="home"><i className="fa fa-dashboard fa-fw"></i> Dashboard</Link>
                        </li>
                        <li>
                            <a href="#"><i className="fa fa-bar-chart-o fa-fw"></i> Charts<span className="fa arrow"></span></a>
                            <ul className="nav nav-second-level">
                                <li>
                                    <Link to="flot-chart"> Flot Charts</Link>

                                </li>
                                <li>
                                    <Link to="morris-chart"> Morris.js Charts</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="tables"><i className="fa fa-table fa-fw"></i> Tables</Link>
                        </li>
                        <li>
                            <Link to="forms"><i className="fa fa-edit fa-fw"></i> Forms</Link>
                        </li>
                        <li>
                            <a href="#"><i className="fa fa-wrench fa-fw"></i> UI Elements<span className="fa arrow"></span></a>
                            <ul className="nav nav-second-level">
                                <li>
                                    <Link to="panels"> Panels and Wells</Link>
                                </li>
                                <li>
                                    <Link to="buttons"> Buttons</Link>
                                </li>
                                <li>
                                    <Link to="notifications"> Notifications</Link>
                                </li>
                                <li>
                                    <Link to="typography">Typography</Link>
                                </li>
                                <li>
                                    <Link to="icons"> Icons</Link>
                                </li>
                                <li>
                                    <Link to="grid"> Grid</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#"><i className="fa fa-sitemap fa-fw"></i> Multi-Level Dropdown<span className="fa arrow"></span></a>
                            <ul className="nav nav-second-level">
                                <li>
                                    <a href="#">Second Level Item</a>
                                </li>
                                <li>
                                    <a href="#">Second Level Item</a>
                                </li>
                                <li>
                                    <a href="#">Third Level <span className="fa arrow"></span></a>
                                    <ul className="nav nav-third-level">
                                        <li>
                                            <a href="#">Third Level Item</a>
                                        </li>
                                        <li>
                                            <a href="#">Third Level Item</a>
                                        </li>
                                        <li>
                                            <a href="#">Third Level Item</a>
                                        </li>
                                        <li>
                                            <a href="#">Third Level Item</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="active">
                            <a href="#"><i className="fa fa-files-o fa-fw"></i> Sample Pages<span className="fa arrow"></span></a>
                            <ul className="nav nav-second-level">
                                <li>
                                    <Link to="blank"> Blank Page</Link>
                                </li>
                                <li>
                                    <Link to="login"> Login Page</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>;
   	}

});