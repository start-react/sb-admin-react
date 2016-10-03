import React, { PropTypes } from 'react';
import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import Grid from '../../../components/Grid';
const title = 'Grid';


function displayGrid(props, context) {
  context.setTitle(title);
  return (
    <Grid />
  );
}

displayGrid.contextTypes = { setTitle: PropTypes.func.isRequired };

export default displayGrid;
