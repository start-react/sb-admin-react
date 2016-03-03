import React, { PropTypes, Component } from 'react';
import {Panel, Alert, Button, OverlayTrigger, Tooltip, Popover, Modal, PageHeader} from 'react-bootstrap';

var Notifications = React.createClass({


  getInitialState: function() {
    return {
      alertVisibleA: true,
      alertVisibleB: true,
      alertVisibleC: true,
      alertVisibleD: true,
      showModal: false
    };
  },

  close: function() {
    this.setState({ showModal: false });
  },

  open: function() {
    this.setState({ showModal: true });
  },

  render: function() {

    return (
      <div>

        <div className="row">
          <div className="col-lg-12">
            <PageHeader>Notifications</PageHeader>
          </div>
        </div>

        <div className="row">

            <div className="col-lg-6">
              <Panel header={<span>Alert Styles</span>} >
                <Alert bsStyle="success">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. <a href="javascript:void(0)" className="alert-link">Alert Link</a>.
                </Alert>
                <Alert bsStyle="info">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. <a href="javascript:void(0)" className="alert-link">Alert Link</a>.
                </Alert>
                <Alert bsStyle="warning">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. <a href="javascript:void(0)" className="alert-link">Alert Link</a>.
                </Alert>
                <Alert bsStyle="danger">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. <a href="javascript:void(0)" className="alert-link">Alert Link</a>.
                </Alert>
              </Panel>
            </div>

            <div className="col-lg-6">
              <Panel header={<span>Dismissable Alerts</span>} >
                {this.state.alertVisibleA?

                <Alert bsStyle="success" onDismiss={this.handleAlertDismiss.bind(this, 'A')} >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. <a href="javascript:void(0)" className="alert-link">Alert Link</a>.
                </Alert>
                : null}
                {this.state.alertVisibleB? 
                <Alert bsStyle="info" onDismiss={this.handleAlertDismiss.bind(this, 'B')} >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. <a href="javascript:void(0)" className="alert-link">Alert Link</a>.
                </Alert>
                : null}
                {this.state.alertVisibleC? 
                <Alert bsStyle="warning" onDismiss={this.handleAlertDismiss.bind(this, 'C')} >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. <a href="javascript:void(0)" className="alert-link">Alert Link</a>.
                </Alert>
                : null}
                {this.state.alertVisibleD? 
                <Alert bsStyle="danger" onDismiss={this.handleAlertDismiss.bind(this, 'D')} >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. <a href="javascript:void(0)" className="alert-link">Alert Link</a>.
                </Alert>
                
                : null}
              </Panel>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <Panel header={<span>Modals</span>} >
                <Button bsStyle="primary" bsSize="large" onClick={this.open} >
                  Launch Demo Modal
                </Button>
                <Modal show={this.state.showModal} onHide={this.close}>
                  <Modal.Header closeButton>
                    <Modal.Title>Modal Title</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>   
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={this.close}>Close</Button>
                    <Button bsStyle="primary"> Save changes</Button>
                  </Modal.Footer>
                </Modal>
              </Panel>
            </div>

            <div className="col-lg-6">
              <Panel header={<span>Tooltips and Popovers</span>} >
                <h4>Tooltip Demo</h4>
                <div>
                  <OverlayTrigger placement="left" overlay=<Tooltip>Check this out!</Tooltip> >
                    <Button>Tooltip on left</Button>
                  </OverlayTrigger>
                  <OverlayTrigger placement="top" overlay=<Tooltip>Check this out!</Tooltip> >
                    <Button>Tooltip on top</Button>
                  </OverlayTrigger>
                  <OverlayTrigger placement="bottom" overlay=<Tooltip>Check this out!</Tooltip> >
                    <Button>Tooltip on bottom</Button>
                  </OverlayTrigger>
                  <OverlayTrigger placement="right" overlay=<Tooltip>Check this out!</Tooltip> >
                    <Button>Tooltip on right</Button>
                  </OverlayTrigger>
                </div>
                <br />
                <h4>Clickable Popover Demo</h4>
                <div>
                  <OverlayTrigger trigger="click" placement="left" overlay={<Popover title="Popover left"><strong>Hello!</strong> Check this info.</Popover>}>
                    <Button>Popover on left</Button>
                  </OverlayTrigger>
                  <OverlayTrigger trigger="click" placement="top" overlay={<Popover title="Popover top"><strong>Hello!</strong> Check this info.</Popover>}>
                    <Button>Popover on top</Button>
                  </OverlayTrigger>
                  <OverlayTrigger trigger="click" placement="bottom" overlay={<Popover title="Popover bottom"><strong>Hello!</strong> Check this info.</Popover>}>
                    <Button>Popover on bottom</Button>
                  </OverlayTrigger>
                  <OverlayTrigger trigger="click" placement="right" overlay={<Popover title="Popover right"><strong>Hello!</strong> Check this info.</Popover>}>
                    <Button>Popover on right</Button>
                  </OverlayTrigger>
                </div>
              </Panel>
            </div>
            
          </div>
        </div>
      
    );

    
  },

  handleAlertDismiss: function(option) {
    switch (option){
      case 'A':
        this.setState({alertVisibleA: false});
        break;
      case 'B':
        this.setState({alertVisibleB: false});
        break;
      case 'C':
        this.setState({alertVisibleC: false});
        break;
      case 'D':
        this.setState({alertVisibleD: false});
        break;
    };

    
  }

});

export default Notifications;