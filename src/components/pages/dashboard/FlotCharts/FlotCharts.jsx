import React, { PropTypes, Component } from 'react';
import {Panel, Button, PageHeader} from 'react-bootstrap';

var FlotCharts = React.createClass({

  render: function() {
    return (

      <div>
      	<div className="row">
          <div className="col-lg-12">
            <PageHeader>Flot</PageHeader>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <Panel header={<span>Line Chart Example</span>} >
              <div>
                Panel contents
              </div>
            </Panel>
          </div>
        </div>

        <div className="row">
        	<div className="col-lg-6">
            <Panel header={<span>Pie Chart Example</span>} >
              <div>
                Panel contents
              </div>
            </Panel>
          </div>

          <div className="col-lg-6">
            <Panel header={<span>Multiple Axes Line Chart Example</span>} >
              <div>
                Panel contents
              </div>
            </Panel>
          </div>

          <div className="col-lg-6">
            <Panel header={<span>Moving Line Chart Example</span>} >
              <div>
                Panel contents
              </div>
            </Panel>
          </div>

          <div className="col-lg-6">
            <Panel header={<span>Bar Chart Example</span>} >
              <div>
                Panel contents
              </div>
            </Panel>
          </div>

          <div className="col-lg-12">
            <Panel header={<span>Flot Charts Usage</span>} >
              <div>
                <p>Flot is a pure JavaScript plotting library for jQuery, with a focus on simple usage, attractive looks, and interactive features. In SB Admin, we are using the most recent version of Flot along with a few plugins to enhance the user experience. The Flot plugins being used are the tooltip plugin for hoverable tooltips, and the resize plugin for fully responsive charts. The documentation for Flot Charts is available on their website, <a target="_blank" href="http://www.flotcharts.org/">http://www.flotcharts.org/</a>.</p>
                <Button bsSize="large" block href="http://www.flotcharts.org/">View Flot Charts Documentation</Button>
              </div>
            </Panel>
          </div>

        </div>      
      </div>
          
    );
  }

});

export default FlotCharts;