import React, { PropTypes } from 'react';
import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';
import PageHeader from 'react-bootstrap/lib/PageHeader';

import MorrisjsCharts from '../../../components/MorrisjsCharts';

const title = 'MorrisjsCharts';


function displayMorrisjsCharts(props, context) {
  context.setTitle(title);
  return (
    <MorrisjsCharts />
  );
}

displayMorrisjsCharts.contextTypes = { setTitle: PropTypes.func.isRequired };

export default displayMorrisjsCharts;
