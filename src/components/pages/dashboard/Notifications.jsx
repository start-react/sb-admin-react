import React, { PropTypes, Component } from 'react';
import {Panel, Alert, Button} from 'react-bootstrap';

class Notifications extends Component {

  getInitialState() {
    return {
      alertVisible: true
    };
  };

  render() {
    return (

      <div>
            <div className="row">
                <div className="col-lg-12">
                    <h1 className="page-header">Notifications</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <Panel header=<span>Alert Styles</span> >
                        <Alert bsStyle="success">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. <a href="#" className="alert-link">Alert Link</a>.
                        </Alert>
                        <Alert bsStyle="info">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. <a href="#" className="alert-link">Alert Link</a>.
                        </Alert>
                        <Alert bsStyle="warning">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. <a href="#" className="alert-link">Alert Link</a>.
                        </Alert>
                        <Alert bsStyle="danger">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. <a href="#" className="alert-link">Alert Link</a>.
                        </Alert>
                    </Panel>
                </div>
                <div className="col-lg-6">
                    <Panel header=<span>Dismissable Alerts</span> >
                        <Alert bsStyle="success" onDismiss={this.handleAlertDismiss.bind(this)}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. <a href="#" className="alert-link">Alert Link</a>.
                        </Alert>
                        <div className="alert alert-info alert-dismissable">
                            <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. <a href="#" className="alert-link">Alert Link</a>.
                        </div>
                        <div className="alert alert-warning alert-dismissable">
                            <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. <a href="#" className="alert-link">Alert Link</a>.
                        </div>
                        <div className="alert alert-danger alert-dismissable">
                            <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. <a href="#" className="alert-link">Alert Link</a>.
                        </div>
                    </Panel>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <Panel header=<span>Modals</span> >
                        <Button bsStyle="primary" bsSize="large" data-toggle="modal" data-target="#myModal">
                            Launch Demo Modal
                        </Button>
                        <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                                        <h4 className="modal-title" id="myModalLabel">Modal title</h4>
                                    </div>
                                    <div className="modal-body">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary">Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Panel>
                </div>
                <div className="col-lg-6">
                    <Panel header=<span>Tooltips and Popovers</span> >
                        <h4>Tooltip Demo</h4>
                        <div className="tooltip-demo">
                            <Button data-toggle="tooltip" data-placement="left" title="Tooltip on left">Tooltip on left</Button>
                            <Button data-toggle="tooltip" data-placement="top" title="Tooltip on top">Tooltip on top</Button>
                            <Button data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">Tooltip on bottom</Button>
                            <Button data-toggle="tooltip" data-placement="right" title="Tooltip on right">Tooltip on right</Button>
                        </div>
                        <br />
                        <h4>Clickable Popover Demo</h4>
                        <div className="tooltip-demo">
                            <Button data-container="body" data-toggle="popover" data-placement="left" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." data-original-title="" title="">
                                Popover on left
                            </Button>
                            <Button data-container="body" data-toggle="popover" data-placement="top" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." data-original-title="" title="">
                                Popover on top
                            </Button>
                            <Button data-container="body" data-toggle="popover" data-placement="bottom" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." data-original-title="" title="">
                                Popover on bottom
                            </Button>
                            <Button data-container="body" data-toggle="popover" data-placement="right" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." data-original-title="" title="">
                                Popover on right
                            </Button>
                        </div>
                    </Panel>
                </div>
            </div>
      </div>
      
    );

    
  };

  handleAlertDismiss() {
    this.setState({alertVisible: false});
  };

  handleAlertShow() {
    this.setState({alertVisible: true});
  };

}

export default Notifications;