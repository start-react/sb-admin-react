/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');

module.exports = React.createClass({

	render: function(){
		
		return <div className="panel panel-default">
                        <div className="panel-heading">
                            <i className="fa fa-bar-chart-o fa-fw"></i> Donut Chart Example
                        </div>
                        <div className="panel-body">
                            <div id="morris-donut-chart"></div>
                            <a href="#" className="btn btn-default btn-block">View Details</a>
                        </div>
                    </div>;
    }
});