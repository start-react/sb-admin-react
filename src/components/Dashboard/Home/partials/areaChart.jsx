/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');

module.exports = React.createClass({

	render: function(){
		
		return <div className="panel panel-default">
	                <div className="panel-heading">
	                    <i className="fa fa-bar-chart-o fa-fw"></i> Area Chart Example
	                    <div className="pull-right">
	                        <div className="btn-group">
	                            <button type="button" className="btn btn-default btn-xs dropdown-toggle" data-toggle="dropdown">
	                                Actions
	                                <span className="caret"></span>
	                            </button>
	                            <ul className="dropdown-menu pull-right" role="menu">
	                                <li><a href="#">Action</a>
	                                </li>
	                                <li><a href="#">Another action</a>
	                                </li>
	                                <li><a href="#">Something else here</a>
	                                </li>
	                                <li className="divider"></li>
	                                <li><a href="#">Separated link</a>
	                                </li>
	                            </ul>
	                        </div>
	                    </div>
	                </div>
	                <div className="panel-body">
	                    <div id="morris-area-chart"></div>
	                </div>
	            </div>;
    }
});      