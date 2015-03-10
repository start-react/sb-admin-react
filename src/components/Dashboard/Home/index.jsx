/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');

var BigButton = require('./partials/bigButton');
var AreaChart = require('./partials/areaChart');
var BarChart = require('./partials/barChart');
var Timeline = require('./partials/timeline');
var NotificationPanel = require('./partials/notificationPanel');
var DonutChart = require('./partials/donutChart');
var Chat = require('./partials/chat');


module.exports = React.createClass({

	render: function(){
		
		return <div>
        			<div className="row">
                        <div className="col-lg-12">
                            <h1 className="page-header">Dashboard</h1>
                        </div>
                    </div>
                    <div className="row">
                        
                        <BigButton />

                    </div>
                    <div className="row">

                        <div className="col-lg-8">
                            
                            <AreaChart />

                            <BarChart />

                            <Timeline />

                        </div>

                        <div className="col-lg-4">
                            <NotificationPanel />

                            <DonutChart />

                            <Chat />

                        </div>
                    </div>
                </div>;
	}
});