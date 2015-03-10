/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');


module.exports = React.createClass({

	render: function(){
		
		return <div className="panel panel-default">
                    <div className="panel-heading">
                        Donut Chart Example
                    </div>
                    <div className="panel-body">
                        <div id="morris-donut-chart"></div>
                    </div>
                </div>;
	}
});