/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');


module.exports = React.createClass({

	render: function(){
		
		return  <div className="panel panel-default">
                    <div className="panel-heading">
                        Area Chart Example
                    </div>
                    <div className="panel-body">
                        <div id="morris-area-chart"></div>
                    </div>
                </div>;
	}
});