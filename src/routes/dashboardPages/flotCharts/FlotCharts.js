import React, { PropTypes } from 'react';
import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import {
  LineChart, Tooltip, PieChart, Pie,
  Line, XAxis, YAxis, Legend,
  CartesianGrid, Bar, BarChart,
  ResponsiveContainer } from '../../../vendor/recharts';

const title = 'Flot Charts';

function plotData() {
  const data = [];
  const offset = 0;
  let sineValue;
  let cosValue;
  for (let i = 0; i < 12; i += 0.8) {
    sineValue = Math.sin(i + offset);
    cosValue = Math.cos(i + offset);
    data.push({ name: i, sine: sineValue, cosine: cosValue });
    // data.push({ name: i, cosine: cosValue });
  }
  return data;
}
const lineChartData = plotData();


const pieChartData = [
  { name: 'Group A', value: 400 }, { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 }, { name: 'Group D', value: 200 },
  { name: 'Group E', value: 278 }, { name: 'Group F', value: 189 },
];

const BarChartData = [
  { name: 'Page A', uv: 4000.343, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000.6756754, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000.987654, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780.472384, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890.98347593, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390.28913479283, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490.2345678, pv: 4300, amt: 2100 },
];

function displayFlotCharts(props, context) {
  context.setTitle(title);
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
              <ResponsiveContainer width="100%" aspect={2}>
                <LineChart data={lineChartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid stroke="#ccc" />
                  <XAxis />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="sine" stroke="#8884d8" />
                  <Line type="monotone" dataKey="cosine" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Panel>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6">
          <Panel header={<span>Pie Chart Example</span>} >
            <div>
              <ResponsiveContainer width="100%" aspect={2}>
                <PieChart >
                  <Pie isAnimationActive={false} data={pieChartData} fill="#8884d8" label />
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </Panel>
        </div>


        <div className="col-lg-6">
          <Panel header={<span>Bar Chart Example</span>} >
            <div>
              <ResponsiveContainer width="100%" aspect={2}>
                <BarChart
                  data={BarChartData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <XAxis dataKey="name" />
                  <YAxis />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="pv" fill="#8884d8" />
                  <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
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

        <div className="col-lg-12">
          <Panel header={<span>Flot Charts Usage</span>} >
            <div>
              <p>Flot is a pure JavaScript plotting library for jQuery, with a focus on simple
                usage, attractive looks, and interactive features. In SB Admin, we are using the
                most recent version of Flot along with a few plugins to enhance the user
                experience. The Flot plugins being used are the tooltip plugin for hoverable
                tooltips, and the resize plugin for fully responsive charts. The documentation
                for Flot Charts is available on their website,
                <a target="_blank" rel="noopener noreferrer" href="http://www.flotcharts.org/">
                  "http://www.flotcharts.org/"
                </a>.</p>
              <Button bsSize="large" block href="http://www.flotcharts.org/">View Flot Charts Documentation</Button>
            </div>
          </Panel>
        </div>

      </div>
    </div>
  );
}

displayFlotCharts.contextTypes = { setTitle: PropTypes.func.isRequired };

export default displayFlotCharts;
