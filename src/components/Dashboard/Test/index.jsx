/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');

var Col = require('react-bootstrap/Col');

module.exports = React.createClass({

	render: function(){
		
		return <div className="row">
                    <Col>
                        <h1 className="page-header">Blank</h1>
                    </Col>
                </div>;
	}
});