import React, { Component } from 'react';
// import { PieCharts, Pie, Sector, ResponsiveContainer } from '../../vendor/recharts';
import PieCharts from '../../vendor/recharts/lib/chart/PieChart';
import Pie from '../../vendor/recharts/lib/polar/Pie';
import Sector from '../../vendor/recharts/lib/shape/Sector';
import ResponsiveContainer from '../../vendor/recharts/lib/component/ResponsiveContainer';

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, // eslint-disable-line
    fill, payload, percent, value // eslint-disable-line
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + ((outerRadius + 5) * cos);
  const sy = cy + ((outerRadius + 5) * sin);
  const mx = cx + ((outerRadius + 10) * cos);
  const my = cy + ((outerRadius + 10) * sin);
  const ex = mx + ((cos >= 0 ? 1 : -1) * 11);
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + ((cos >= 0 ? 1 : -1) * 12)}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >
        {`Value ${value}`}
      </text>
      <text x={ex + ((cos >= 0 ? 1 : -1) * 12)} y={ey} dy={18} textAnchor={textAnchor} fill="red">
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};


class Donut extends Component {
  static propTypes ={
    data: React.PropTypes.array,
    innerRadius: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
    ]),
    outerRadius: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
    ]),
    color: React.PropTypes.string,
  }
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
    // this.onPieEnter = this.onPieEnter.bind(this);
  }

  onPieEnter(data, index) {
    this.setState({
      activeIndex: index,
    });
  }

  render() {
    return (
      <ResponsiveContainer width="100%" aspect={2} >
        <PieCharts
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          onMouseEnter={(data, index) => { this.onPieEnter(data, index); }}
        >
          <Pie
            activeIndex={this.state.activeIndex}
            activeShape={renderActiveShape}
            data={this.props.data}
            innerRadius={this.props.innerRadius}
            outerRadius={this.props.outerRadius}
            fill={this.props.color}
          />
        </PieCharts>
      </ResponsiveContainer>
    );
  }

}


export default Donut;
