import React, { PropTypes } from 'react';
import Forms from '../../../components/Forms';

const title = 'Forms';


function displayForms(props, context) {
  context.setTitle(title);
  return (
    <Forms />
  );
}

displayForms.contextTypes = { setTitle: PropTypes.func.isRequired };

export default displayForms;
