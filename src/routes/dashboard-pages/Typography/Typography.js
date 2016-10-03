import React, { PropTypes } from 'react';
import Typography from '../../../components/Typography';
// import {Panel, Accordion, Well, Jumbotron, Button, Tabs, Tab, PageHeader} from 'react-bootstrap';
// import Button from 'react-bootstrap/lib/Button';
// import Panel from 'react-bootstrap/lib/Panel';
// import PageHeader from 'react-bootstrap/lib/PageHeader';
// import Accordion from 'react-bootstrap/lib/Accordion';
// import Well from 'react-bootstrap/lib/Well';
// import Jumbotron from 'react-bootstrap/lib/Jumbotron';
// import Tabs from 'react-bootstrap/lib/Tabs';
// import Tab from 'react-bootstrap/lib/Tab';

const title = 'Typography';


function displayTypography(props, context) {
  context.setTitle(title);
  return (
    <Typography />
);
}

displayTypography.contextTypes = { setTitle: PropTypes.func.isRequired };

export default displayTypography;
