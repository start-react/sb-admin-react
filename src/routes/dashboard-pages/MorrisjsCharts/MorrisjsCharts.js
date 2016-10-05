import React, { PropTypes } from 'react';
import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';
import PageHeader from 'react-bootstrap/lib/PageHeader';

const title = 'MorrisjsCharts';


function displayMorrisjsCharts(props, context) {
  context.setTitle(title);
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
                <p>
                  Morris
                  Morris.js is a jQuery based charting plugin created by Olly Smith. In SB Admin,
                  we are using the most recent version of Morris.js which includes the resize
                  functions, which makes the charts fully responsive. The documentation for
                  Morris.js is available on their website,
                  <a target="_blank" rel="noopener noreferrer" href="http://morrisjs.github.io/morris.js/">
                    'http://morrisjs.github.io/morris.js/>'
                  </a>.
                </p>
                <Button bsSize="large" block href="http://morrisjs.github.io/morris.js/">
                  View Morris.js Documentation
                </Button>
              </div>
            </Panel>
          </div>
        </div>
    </div>
  );
}

displayMorrisjsCharts.contextTypes = { setTitle: PropTypes.func.isRequired };

export default displayMorrisjsCharts;
