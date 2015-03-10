/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');

var BarChart = require('./partials/barChart');
var LineChart = require('./partials/lineChart');
var MovingLineChart = require('./partials/movingLineChart');
var PieChart = require('./partials/pieChart');
var MultipleAxesLineChart = require('./partials/multipleAxesLineChart');


module.exports = React.createClass({

	render: function(){
		
		return <div>
				<div className="row">
	                <div className="col-lg-12">
	                    <h1 className="page-header">Flot</h1>
	                </div>
            	</div>
		            <div className="row">
		            
		                <div className="col-lg-12">
		                    <LineChart />
		                </div>

		                <div className="col-lg-6">
		                    <PieChart />
		                </div>

		                <div className="col-lg-6">
		                    <MultipleAxesLineChart />
		                </div>

		                <div className="col-lg-6">
		                    <MovingLineChart />
		                </div>

		                <div className="col-lg-6">
		                    <BarChart />
		                </div>

		                <div className="col-lg-12">
		                    <div className="panel panel-default">
		                        <div className="panel-heading">
		                            Flot Charts Usage
		                        </div>
		                        <div className="panel-body">
		                            <p>Flot is a pure JavaScript plotting library for jQuery, with a focus on simple usage, attractive looks, and interactive features. In SB Admin, we are using the most recent version of Flot along with a few plugins to enhance the user experience. The Flot plugins being used are the tooltip plugin for hoverable tooltips, and the resize plugin for fully responsive charts. The documentation for Flot Charts is available on their website, <a target="_blank" href="http://www.flotcharts.org/">http://www.flotcharts.org/</a>.</p>
		                            <a target="_blank" className="btn btn-default btn-lg btn-block" href="http://www.flotcharts.org/">View Flot Charts Documentation</a>
		                        </div>
		                    </div>
		                </div>
		            </div>
            </div> ;
	}
});