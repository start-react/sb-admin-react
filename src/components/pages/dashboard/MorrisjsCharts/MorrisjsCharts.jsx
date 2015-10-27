import React, { PropTypes, Component } from 'react';
import {Panel, Button, PageHeader} from 'react-bootstrap';

var MorrisjsCharts = React.createClass({

  render: function() {
    return (

      <div>

        <div className="row">
          <div className="col-lg-12">
            <PageHeader>Morris.js Charts</PageHeader>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <Panel header={<span>Area Chart Example</span>} >
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

          <div className="col-lg-6">
            <Panel header={<span>Line Chart Example</span>} >
              <div>
                Panel contents
              </div>
            </Panel>
          </div>

          <div className="col-lg-6">
            <Panel header={<span>Donut Chart Example</span>} >
              <div>
                Panel contents
              </div>
            </Panel>
          </div>

          <div className="col-lg-12">
            <Panel header={<span>Morris.js Usage</span>} >
              <div>
                <p>Morris.js is a jQuery based charting plugin created by Olly Smith. In SB Admin, we are using the most recent version of Morris.js which includes the resize function, which makes the charts fully responsive. The documentation for Morris.js is available on their website, <a target="_blank" href="http://morrisjs.github.io/morris.js/">http://morrisjs.github.io/morris.js/</a>.</p>
                <Button bsSize="large" block href="http://morrisjs.github.io/morris.js/">View Morris.js Documentation</Button>
              </div>
            </Panel>
          </div>
        </div>
      </div>
          
    );
  }

});

export default MorrisjsCharts;