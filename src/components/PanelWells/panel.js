import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';


class CustomPanel extends Component {

  static propTypes={
    style: React.PropTypes.string,
    headerText: React.PropTypes.string,
    footerText: React.PropTypes.string,
    paragraph: React.PropTypes.string,
  }
  render() {
    return (
      <Panel
        header={<span>{this.props.headerText}</span>}
        className={this.props.style}
        footer={<span>{this.props.footerText}</span>}
      >
        {this.props.paragraph}
      </Panel>
    );
  }
}

export default CustomPanel;
