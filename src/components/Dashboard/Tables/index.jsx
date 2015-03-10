/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');

var DataTableAdvance = require('./partials/dataTableAdvance');
var BasicTable = require('./partials/basicTable');
var KitchenSink = require('./partials/kitchenSink');
var StripRows = require('./partials/stripRows');
var BorderedTable = require('./partials/borderedTable');
var HoverRows = require('./partials/hoverRows');
var ContextClasses = require('./partials/contextClasses');


module.exports = React.createClass({

    render: function(){

        return <div>
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="page-header">Tables</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <DataTableAdvance />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <KitchenSink />
                    </div>
                    <div className="col-lg-6">
                        <BasicTable />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <StripRows />
                    </div>
                    <div className="col-lg-6">
                        <BorderedTable />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <HoverRows />
                    </div>
                    <div className="col-lg-6">
                        <ContextClasses />
                    </div>
                </div>
            </div>;
    }
});