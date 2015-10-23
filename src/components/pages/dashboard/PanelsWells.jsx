import React, { PropTypes, Component } from 'react';
import {Panel, Accordion, Well, Jumbotron, Button, Tabs, Tab, PageHeader} from 'react-bootstrap';

var PanelsWells = React.createClass({

  render: function() {
    return (
      <div>
      
        <div className="row">
          <div className="col-lg-12">
            <PageHeader>Panels and Wells</PageHeader>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <Panel header={<span>Default Panel</span>}
                    footer={<span>Panel Footer</span>} >
              <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
              </div>
            </Panel>
          </div>
          <div className="col-lg-4">
            <Panel header={<span>Primary Panel</span>} bsStyle="primary"
                   footer={<span>Panel Footer</span>}  >
              <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
              </div>
            </Panel>
          </div>
          <div className="col-lg-4">
            <Panel header={<span>Success Panel</span>} bsStyle="success"
                   footer={<span>Panel Footer</span>}  >
              <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
              </div>
            </Panel>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <Panel header={<span>Info Panel</span>} bsStyle="info"
                   footer={<span>Panel Footer</span>}  >
              <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
              </div>
            </Panel>
          </div>
          <div className="col-lg-4">
            <Panel header={<span>Warning Panel</span>} bsStyle="warning"
                   footer={<span>Panel Footer</span>}  >
              <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
              </div>
            </Panel>
          </div>
          <div className="col-lg-4">
            <Panel header={<span>Danger Panel</span>} bsStyle="danger"
                   footer={<span>Panel Footer</span>}  >
              <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
              </div>
            </Panel>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <Panel header={<span>Green Panel</span>} bsStyle="panel-green"
                   footer={<span>Panel Footer</span>}  >
              <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
              </div>
            </Panel>
          </div>
          <div className="col-lg-4">
            <Panel header={<span>Yellow Panel</span>} bsStyle="panel-yellow"
                   footer={<span>Panel Footer</span>}  >
              <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
              </div>
            </Panel>
          </div>
          <div className="col-lg-4">
            <Panel header={<span>Red Panel</span>} bsStyle="panel-red"
                   footer={<span>Panel Footer</span>}  >
              <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
              </div>
            </Panel>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <Panel header={<span>Collapsible Accordion Panel Group</span>} >
              <Accordion>
                <Panel header={<h4 className="panel-title">
                                  <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">Collapsible Group Item #1</a>
                                </h4>}  eventKey="1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Panel>
                <Panel header={<h4 className="panel-title">
                                  <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">Collapsible Group Item #2</a>
                                </h4>}  eventKey="2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Panel>
                <Panel header={<h4 className="panel-title">
                                  <a data-toggle="collapse" data-parent="#accordion" href="#collapseThree">Collapsible Group Item #3</a>
                                </h4>}  eventKey="3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Panel>
              </Accordion>
            </Panel>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <Panel header={<span>Basic Tabs</span>} >
              <Tabs defaultActiveKey={1}>
                <Tab eventKey={1} title="Home">
                  <h4>Home Tab</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Tab>
                <Tab eventKey={2} title="Profile">
                  <h4>Profile Tab</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Tab>
                <Tab eventKey={3} title="Messages">
                  <h4>Messages Tab</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Tab>
                <Tab eventKey={4} title="Settings">
                  <h4>Settings Tab</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Tab>
              </Tabs>
            </Panel>
          </div>

          <div className="col-lg-6">
            <Panel header={<span>Pill Tabs</span>} >
              <Tabs bsStyle="pills" defaultActiveKey={1}>
                <Tab eventKey={1} title="Home">
                  <h4>Home Tab</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Tab>
                <Tab eventKey={2} title="Profile">
                  <h4>Profile Tab</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Tab>
                <Tab eventKey={3} title="Messages">
                  <h4>Messages Tab</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Tab>
                <Tab eventKey={4} title="Settings">
                  <h4>Settings Tab</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Tab>
              </Tabs>
            </Panel>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <Well>
              <h4>Normal Well</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
            </Well>
          </div>
          <div className="col-lg-4">
            <Well bsSize="large">
              <h4>Large Well</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
            </Well>
          </div>
          <div className="col-lg-4">
            <Well bsSize="small">
              <h4>Small Well</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue.</p>
            </Well>
          </div>
        </div>
            
        <div className="row">
          <div className="col-lg-12">
            <Jumbotron>
              <h1>Jumbotron</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est vitae ultrices accumsan. Aliquam ornare lacus adipiscing.</p>
              <p><Button bsStyle="primary" bsSize="large">Learn more</Button></p>
            </Jumbotron>
          </div>
        </div>
      </div>
      
    );
  }

});

export default PanelsWells;