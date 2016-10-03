import React, { PropTypes } from 'react';
// import Button from 'react-bootstrap/lib/Button';
// import Panel from 'react-bootstrap/lib/Panel';
// import PageHeader from 'react-bootstrap/lib/PageHeader';


import Notification from '../../../components/Notification';

const title = 'Notification';


function displayNotification(props, context) {
  context.setTitle(title);
  return (
    <Notification />
);
}

displayNotification.contextTypes = { setTitle: PropTypes.func.isRequired };

export default displayNotification;
