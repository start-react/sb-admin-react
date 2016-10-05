import React, { Component } from 'react';
// import { PieCharts, Pie, Sector, ResponsiveContainer } from '../../vendor/recharts';
import PieCharts from '../../vendor/recharts/lib/chart/PieChart';
import Pie from '../../vendor/recharts/lib/polar/Pie';
import Sector from '../../vendor/recharts/lib/shape/Sector';
import ResponsiveContainer from '../../vendor/recharts/lib/component/ResponsiveContainer';

class CustomPieCharts extends Component {
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
      <ResponsiveContainer width="100%" aspect={2} margin={{ top: 10, right: 30, left: 0, bottom: 0 }} >
        <PieCharts onMouseEnter={(data, index) => { this.onPieEnter(data, index); }} >
          <Pie
            activeIndex={this.state.activeIndex}
            activeShape={renderActiveShape}
            data={this.props.data}
            cx={250}
            cy={120}
            innerRadius={60}
            outerRadius={80}
            fill={this.props.color}
          />
        </PieCharts>
      </ResponsiveContainer>
    );
  }

}

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
    fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
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
      <text x={ex + ((cos >= 0 ? 1 : -1) * 12)} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text>
      <text x={ex + ((cos >= 0 ? 1 : -1) * 12)} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

export default CustomPieCharts;
