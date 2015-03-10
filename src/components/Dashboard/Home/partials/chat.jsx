/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');

module.exports = React.createClass({

	render: function(){
		
		return <div className="chat-panel panel panel-default">
                    <div className="panel-heading">
                        <i className="fa fa-comments fa-fw"></i>
                        Chat
                        <div className="btn-group pull-right">
                            <button type="button" className="btn btn-default btn-xs dropdown-toggle" data-toggle="dropdown">
                                <i className="fa fa-chevron-down"></i>
                            </button>
                            <ul className="dropdown-menu slidedown">
                                <li>
                                    <a href="#">
                                        <i className="fa fa-refresh fa-fw"></i> Refresh
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-check-circle fa-fw"></i> Available
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-times fa-fw"></i> Busy
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-clock-o fa-fw"></i> Away
                                    </a>
                                </li>
                                <li className="divider"></li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-sign-out fa-fw"></i> Sign Out
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/*<!-- /.panel-heading -->*/}
                    <div className="panel-body">
                        <ul className="chat">
                            <li className="left clearfix">
                                <span className="chat-img pull-left">
                                    <img src="http://placehold.it/50/55C1E7/fff" alt="User Avatar" className="img-circle" />
                                </span>
                                <div className="chat-body clearfix">
                                    <div className="header">
                                        <strong className="primary-font">Jack Sparrow</strong>
                                        <small className="pull-right text-muted">
                                            <i className="fa fa-clock-o fa-fw"></i> 12 mins ago
                                        </small>
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.
                                    </p>
                                </div>
                            </li>
                            <li className="right clearfix">
                                <span className="chat-img pull-right">
                                    <img src="http://placehold.it/50/FA6F57/fff" alt="User Avatar" className="img-circle" />
                                </span>
                                <div className="chat-body clearfix">
                                    <div className="header">
                                        <small className=" text-muted">
                                            <i className="fa fa-clock-o fa-fw"></i> 13 mins ago</small>
                                        <strong className="pull-right primary-font">Bhaumik Patel</strong>
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.
                                    </p>
                                </div>
                            </li>
                            <li className="left clearfix">
                                <span className="chat-img pull-left">
                                    <img src="http://placehold.it/50/55C1E7/fff" alt="User Avatar" className="img-circle" />
                                </span>
                                <div className="chat-body clearfix">
                                    <div className="header">
                                        <strong className="primary-font">Jack Sparrow</strong>
                                        <small className="pull-right text-muted">
                                            <i className="fa fa-clock-o fa-fw"></i> 14 mins ago</small>
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.
                                    </p>
                                </div>
                            </li>
                            <li className="right clearfix">
                                <span className="chat-img pull-right">
                                    <img src="http://placehold.it/50/FA6F57/fff" alt="User Avatar" className="img-circle" />
                                </span>
                                <div className="chat-body clearfix">
                                    <div className="header">
                                        <small className=" text-muted">
                                            <i className="fa fa-clock-o fa-fw"></i> 15 mins ago</small>
                                        <strong className="pull-right primary-font">Bhaumik Patel</strong>
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="panel-footer">
                        <div className="input-group">
                            <input id="btn-input" type="text" className="form-control input-sm" placeholder="Type your message here..." />
                            <span className="input-group-btn">
                                <button className="btn btn-warning btn-sm" id="btn-chat">
                                    Send
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
    }
});            