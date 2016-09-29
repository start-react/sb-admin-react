import React from 'react';
import { Panel } from 'react-bootstrap';
import Link from '../Link';

let StatWidget = React.createClass({ // eslint-disable-line
  render() {
    return (
      <Panel
        className="stat"
        bsStyle={this.props.style} // eslint-disable-line

        header={<div className="row">
          <div className="col-xs-3">
            <i
            className={this.props.icon} // eslint-disable-line
            />
          </div>
          <div className="col-xs-9 text-right">
            <div className="huge">
              {
                this.props.count // eslint-disable-line
              }
            </div>
            <div>
              {
                this.props.headerText // eslint-disable-line
              }
            </div>
          </div>
        </div>}

        footer={
          <Link
            to={
              this.props.linkTo // eslint-disable-line
            }
          >
            <span className="pull-left">
              {
                this.props.footerText // eslint-disable-line
              }
            </span>
            <span className="pull-right"><i className="fa fa-arrow-circle-right" /></span>
            <div className="clearfix" />
          </Link>}
      />

    );
  },
});

export default StatWidget;
