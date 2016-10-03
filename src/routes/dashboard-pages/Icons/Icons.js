import React, { PropTypes } from 'react';
import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';
import PageHeader from 'react-bootstrap/lib/PageHeader';

import Icons from '../../../components/Icons';

const title = 'Icons';


function displayIcons(props, context) {
  context.setTitle(title);
  return (
    <Icons />
  );
}

displayIcons.contextTypes = { setTitle: PropTypes.func.isRequired };

export default displayIcons;
