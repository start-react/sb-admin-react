import React, { PropTypes } from 'react';

import Panel from 'react-bootstrap/lib/Panel';
// import Pagination from 'react-bootstrap/lib/Pagination';
import PageHeader from 'react-bootstrap/lib/PageHeader';
// import Well from 'react-bootstrap/lib/Well';

import Buttons from '../../../components/Button';

const title = 'Buttons';

function displayButtons(props, context) {
  context.setTitle(title);
  return (
    <Buttons />
  );
}


displayButtons.contextTypes = { setTitle: PropTypes.func.isRequired };

export default displayButtons;
