/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');


module.exports = React.createClass({

	render: function(){
		
		return  <div className="panel panel-default">
                    <div className="panel-heading">
                        Bar Chart Example
                    </div>
                    <div className="panel-body">
                        <div className="flot-chart">
                            <div className="flot-chart-content" id="flot-bar-chart"></div>
                        </div>
                    </div>
                </div>;
	}
});