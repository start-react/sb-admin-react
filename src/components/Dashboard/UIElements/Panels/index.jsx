/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');

var Col = require('react-bootstrap/Col');

module.exports = React.createClass({

	render: function(){
		
		return <div>
					<div className="row">
					    <div className="col-lg-12">
					        <h1 className="page-header">Panels and Wells</h1>
					    </div>
					</div>
					<div className="row">
					    <div className="col-lg-4">
					        <div className="panel panel-default">
					            <div className="panel-heading">
					                Default Panel
					            </div>
					            <div className="panel-body">
					                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
					            </div>
					            <div className="panel-footer">
					                Panel Footer
					            </div>
					        </div>
					    </div>
					    <div className="col-lg-4">
					        <div className="panel panel-primary">
					            <div className="panel-heading">
					                Primary Panel
					            </div>
					            <div className="panel-body">
					                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
					            </div>
					            <div className="panel-footer">
					                Panel Footer
					            </div>
					        </div>
					    </div>
					    <div className="col-lg-4">
					        <div className="panel panel-success">
					            <div className="panel-heading">
					                Success Panel
					            </div>
					            <div className="panel-body">
					                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
					            </div>
					            <div className="panel-footer">
					                Panel Footer
					            </div>
					        </div>
					    </div>
					</div>
					<div className="row">
					    <div className="col-lg-4">
					        <div className="panel panel-info">
					            <div className="panel-heading">
					                Info Panel
					            </div>
					            <div className="panel-body">
					                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
					            </div>
					            <div className="panel-footer">
					                Panel Footer
					            </div>
					        </div>
					    </div>
					    <div className="col-lg-4">
					        <div className="panel panel-warning">
					            <div className="panel-heading">
					                Warning Panel
					            </div>
					            <div className="panel-body">
					                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
					            </div>
					            <div className="panel-footer">
					                Panel Footer
					            </div>
					        </div>
					    </div>
					    <div className="col-lg-4">
					        <div className="panel panel-danger">
					            <div className="panel-heading">
					                Danger Panel
					            </div>
					            <div className="panel-body">
					                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
					            </div>
					            <div className="panel-footer">
					                Panel Footer
					            </div>
					        </div>
					    </div>
					</div>
					<div className="row">
					    <div className="col-lg-4">
					        <div className="panel panel-green">
					            <div className="panel-heading">
					                Green Panel
					            </div>
					            <div className="panel-body">
					                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
					            </div>
					            <div className="panel-footer">
					                Panel Footer
					            </div>
					        </div>
					    </div>
					    <div className="col-lg-4">
					        <div className="panel panel-yellow">
					            <div className="panel-heading">
					                Yellow Panel
					            </div>
					            <div className="panel-body">
					                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
					            </div>
					            <div className="panel-footer">
					                Panel Footer
					            </div>
					        </div>
					    </div>
					    <div className="col-lg-4">
					        <div className="panel panel-red">
					            <div className="panel-heading">
					                Red Panel
					            </div>
					            <div className="panel-body">
					                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
					            </div>
					            <div className="panel-footer">
					                Panel Footer
					            </div>
					        </div>
					    </div>
					</div>
					<div className="row">
					    <div className="col-lg-12">
					        <div className="panel panel-default">
					            <div className="panel-heading">
					                Collapsible Accordion Panel Group
					            </div>
					            <div className="panel-body">
					                <div className="panel-group" id="accordion">
					                    <div className="panel panel-default">
					                        <div className="panel-heading">
					                            <h4 className="panel-title">
					                                <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">Collapsible Group Item #1</a>
					                            </h4>
					                        </div>
					                        <div id="collapseOne" className="panel-collapse collapse in">
					                            <div className="panel-body">
					                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					                            </div>
					                        </div>
					                    </div>
					                    <div className="panel panel-default">
					                        <div className="panel-heading">
					                            <h4 className="panel-title">
					                                <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">Collapsible Group Item #2</a>
					                            </h4>
					                        </div>
					                        <div id="collapseTwo" className="panel-collapse collapse">
					                            <div className="panel-body">
					                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					                            </div>
					                        </div>
					                    </div>
					                    <div className="panel panel-default">
					                        <div className="panel-heading">
					                            <h4 className="panel-title">
					                                <a data-toggle="collapse" data-parent="#accordion" href="#collapseThree">Collapsible Group Item #3</a>
					                            </h4>
					                        </div>
					                        <div id="collapseThree" className="panel-collapse collapse">
					                            <div className="panel-body">
					                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					                            </div>
					                        </div>
					                    </div>
					                </div>
					            </div>
					        </div>
					    </div>
					</div>
					<div className="row">
					    <div className="col-lg-6">
					        <div className="panel panel-default">
					            <div className="panel-heading">
					                Basic Tabs
					            </div>
					            <div className="panel-body">
					                <ul className="nav nav-tabs">
					                    <li className="active"><a href="#home" data-toggle="tab">Home</a>
					                    </li>
					                    <li><a href="#profile" data-toggle="tab">Profile</a>
					                    </li>
					                    <li><a href="#messages" data-toggle="tab">Messages</a>
					                    </li>
					                    <li><a href="#settings" data-toggle="tab">Settings</a>
					                    </li>
					                </ul>

					                <div className="tab-content">
					                    <div className="tab-pane fade in active" id="home">
					                        <h4>Home Tab</h4>
					                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					                    </div>
					                    <div className="tab-pane fade" id="profile">
					                        <h4>Profile Tab</h4>
					                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					                    </div>
					                    <div className="tab-pane fade" id="messages">
					                        <h4>Messages Tab</h4>
					                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					                    </div>
					                    <div className="tab-pane fade" id="settings">
					                        <h4>Settings Tab</h4>
					                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					                    </div>
					                </div>
					            </div>
					        </div>
					    </div>
					    <div className="col-lg-6">
					        <div className="panel panel-default">
					            <div className="panel-heading">
					                Pill Tabs
					            </div>
					            <div className="panel-body">
					                <ul className="nav nav-pills">
					                    <li className="active"><a href="#home-pills" data-toggle="tab">Home</a>
					                    </li>
					                    <li><a href="#profile-pills" data-toggle="tab">Profile</a>
					                    </li>
					                    <li><a href="#messages-pills" data-toggle="tab">Messages</a>
					                    </li>
					                    <li><a href="#settings-pills" data-toggle="tab">Settings</a>
					                    </li>
					                </ul>

					                <div className="tab-content">
					                    <div className="tab-pane fade in active" id="home-pills">
					                        <h4>Home Tab</h4>
					                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					                    </div>
					                    <div className="tab-pane fade" id="profile-pills">
					                        <h4>Profile Tab</h4>
					                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					                    </div>
					                    <div className="tab-pane fade" id="messages-pills">
					                        <h4>Messages Tab</h4>
					                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					                    </div>
					                    <div className="tab-pane fade" id="settings-pills">
					                        <h4>Settings Tab</h4>
					                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					                    </div>
					                </div>
					            </div>
					        </div>
					    </div>
					</div>
					<div className="row">
					    <div className="col-lg-4">
					        <div className="well">
					            <h4>Normal Well</h4>
					            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
					        </div>
					    </div>
					    <div className="col-lg-4">
					        <div className="well well-lg">
					            <h4>Large Well</h4>
					            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
					        </div>
					    </div>
					    <div className="col-lg-4">
					        <div className="well well-sm">
					            <h4>Small Well</h4>
					            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
					        </div>
					    </div>
					</div>
					<div className="row">
					    <div className="col-lg-12">
					        <div className="jumbotron">
					            <h1>Jumbotron</h1>
					            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing.</p>
					            <p><a className="btn btn-primary btn-lg" role="button">Learn more</a>
					            </p>
					        </div>
					    </div>
					</div>
                    
                </div>;
	}
});