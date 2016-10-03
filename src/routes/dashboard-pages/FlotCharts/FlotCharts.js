import React, { PropTypes } from 'react';
import FlotCharts from '../../../components/FlotCharts';

const title = 'Flot Charts';

function displayFlotCharts(props, context) {
  context.setTitle(title);
  return (
    <FlotCharts />
  );
}

displayFlotCharts.contextTypes = { setTitle: PropTypes.func.isRequired };

export default displayFlotCharts;
