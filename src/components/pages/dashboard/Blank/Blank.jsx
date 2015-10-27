import React, { PropTypes, Component } from 'react';
import {PageHeader} from 'react-bootstrap';

var Blank = React.createClass({

  render: function() {
    return (

    	<div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <PageHeader>Blank</PageHeader>
            </div>
          </div>
        </div>
    	</div>
      
    );
  }

});

export default Blank;