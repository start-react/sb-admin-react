/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');


module.exports = React.createClass({

	render: function(){
		
		return <div className="panel panel-default">
                    <div className="panel-heading">
                        Multiple Axes Line Chart Example
                    </div>
                    <div className="panel-body">
                        <div className="flot-chart">
                            <div className="flot-chart-content" id="flot-line-chart-multi"></div>
                        </div>
                    </div>
                </div>;
	}
});