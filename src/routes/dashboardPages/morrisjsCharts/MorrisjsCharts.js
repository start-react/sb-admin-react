import React, { PropTypes } from 'react';
import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import Donut from '../../../components/Donut';

import {
  LineChart, Tooltip,
  Line, XAxis, YAxis, Area,
  CartesianGrid, AreaChart, Bar, BarChart,
  ResponsiveContainer } from '../../../vendor/recharts';
// ResponsiveContainer is broken so we have customise the ResponsiveContainer

const title = 'MorrisjsCharts';

const data = [
      { name: 'Page A', uv: 4000, pv: 2400, amt: 2400, value: 600 },
      { name: 'Page B', uv: 3000, pv: 1398, amt: 2210, value: 300 },
      { name: 'Page C', uv: 2000, pv: 9800, amt: 2290, value: 500 },
      { name: 'Page D', uv: 2780, pv: 3908, amt: 2000, value: 400 },
      { name: 'Page E', uv: 1890, pv: 4800, amt: 2181, value: 200 },
      { name: 'Page F', uv: 2390, pv: 3800, amt: 2500, value: 700 },
      { name: 'Page G', uv: 3490, pv: 4300, amt: 2100, value: 100 },
];

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
              <ResponsiveContainer width="100%" aspect={2}>
                <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }} >
                  <XAxis dataKey="name" />
                  <YAxis />
                  <CartesianGrid stroke="#ccc" />
                  <Tooltip />
                  <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
                  <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                  <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </Panel>
        </div>

        <div className="col-lg-6">
          <Panel header={<span>Bar Chart Example</span>} >
            <div>
              <ResponsiveContainer width="100%" aspect={2}>
                <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }} >
                  <CartesianGrid stroke="#ccc" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="pv" stackId="1" fill="#8884d8" />
                  <Bar dataKey="uv" stackId="1" fill="#82ca9d" />
                  <Bar type="monotone" dataKey="amt" fill="#ffc658" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Panel>
        </div>

        <div className="col-lg-6">
          <Panel header={<span>Line Chart Example</span>} >
            <div>
              <ResponsiveContainer width="100%" aspect={2}>
                <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid stroke="#ccc" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                  <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
                  <Line type="monotone" dataKey="amt" stroke="#ffc658" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Panel>
        </div>

        <div className="col-lg-6">
          <Panel header={<span>Donut Chart Example</span>} >
            <div>
              <Donut data={data} color="#8884d8" innerRadius="60" outerRadius="80" />
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
                <a target="_blank" rel="noopener noreferrer" href="http://morrisjs.github.io/morris.js/" >
                  'http://morrisjs.github.io/morris.js/'
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
