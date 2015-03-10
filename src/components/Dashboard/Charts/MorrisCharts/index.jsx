/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');

var AreaChart = require('./partials/areaChart');
var LineChart = require('./partials/lineChart');
var BarChart = require('./partials/barChart');
var DonutChart = require('./partials/donutChart');



module.exports = React.createClass({

	render: function(){
		
		return <div>
					<div className="row">
		                <div className="col-lg-12">
		                    <h1 className="page-header">Morris.js Charts</h1>
		                </div>
		            </div>
		            <div className="row">
		                <div className="col-lg-6">
		                    <AreaChart />
		                </div>

		                <div className="col-lg-6">
		                    <BarChart />
		                </div>


		                <div className="col-lg-6">
		                    <LineChart />
		                </div>
		                <div className="col-lg-6">
		                    <DonutChart />
		                </div>
		                <div className="col-lg-12">
		                    <div className="panel panel-default">
		                        <div className="panel-heading">
		                            Morris.js Usage
		                        </div>
		                        <div className="panel-body">
		                            <p>Morris.js is a jQuery based charting plugin created by Olly Smith. In SB Admin, we are using the most recent version of Morris.js which includes the resize function, which makes the charts fully responsive. The documentation for Morris.js is available on their website, <a target="_blank" href="http://morrisjs.github.io/morris.js/">http://morrisjs.github.io/morris.js/</a>.</p>
		                            <a target="_blank" className="btn btn-default btn-lg btn-block" href="http://morrisjs.github.io/morris.js/">View Morris.js Documentation</a>
		                        </div>
		                    </div>
		                </div>
		            </div>
		        </div>
	}
});