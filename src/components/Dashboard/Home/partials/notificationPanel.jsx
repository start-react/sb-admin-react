/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');

module.exports = React.createClass({

	render: function(){
		
		return <div className="panel panel-default">
                    <div className="panel-heading">
                        <i className="fa fa-bell fa-fw"></i> Notifications Panel
                    </div>
                    <div className="panel-body">
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
                </div>;
    }
});