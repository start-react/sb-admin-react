/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');

module.exports = React.createClass({

    render: function(){

        return <div className="panel panel-default">
                    <div className="panel-heading">
                        DataTables Advanced Tables
                    </div>
                    <div className="panel-body">
                        <div className="dataTable_wrapper">
                            <table className="table table-striped table-bordered table-hover" id="dataTables-example">
                                <thead>
                                    <tr>
                                        <th>Rendering engine</th>
                                        <th>Browser</th>
                                        <th>Platform(s)</th>
                                        <th>Engine version</th>
                                        <th>CSS grade</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="odd gradeX">
                                        <td>Trident</td>
                                        <td>Internet Explorer 4.0</td>
                                        <td>Win 95+</td>
                                        <td className="center">4</td>
                                        <td className="center">X</td>
                                    </tr>
                                    <tr className="even gradeC">
                                        <td>Trident</td>
                                        <td>Internet Explorer 5.0</td>
                                        <td>Win 95+</td>
                                        <td className="center">5</td>
                                        <td className="center">C</td>
                                    </tr>
                                    <tr className="odd gradeA">
                                        <td>Trident</td>
                                        <td>Internet Explorer 5.5</td>
                                        <td>Win 95+</td>
                                        <td className="center">5.5</td>
                                        <td className="center">A</td>
                                    </tr>
                                    <tr className="even gradeA">
                                        <td>Trident</td>
                                        <td>Internet Explorer 6</td>
                                        <td>Win 98+</td>
                                        <td className="center">6</td>
                                        <td className="center">A</td>
                                    </tr>
                                    <tr className="odd gradeA">
                                        <td>Trident</td>
                                        <td>Internet Explorer 7</td>
                                        <td>Win XP SP2+</td>
                                        <td className="center">7</td>
                                        <td className="center">A</td>
                                    </tr>
                                    
                                    <tr className="gradeX">
                                        <td>Misc</td>
                                        <td>Dillo 0.8</td>
                                        <td>Embedded devices</td>
                                        <td className="center">-</td>
                                        <td className="center">X</td>
                                    </tr>
                                    <tr className="gradeX">
                                        <td>Misc</td>
                                        <td>Links</td>
                                        <td>Text only</td>
                                        <td className="center">-</td>
                                        <td className="center">X</td>
                                    </tr>
                                    <tr className="gradeX">
                                        <td>Misc</td>
                                        <td>Lynx</td>
                                        <td>Text only</td>
                                        <td className="center">-</td>
                                        <td className="center">X</td>
                                    </tr>
                                    <tr className="gradeC">
                                        <td>Misc</td>
                                        <td>IE Mobile</td>
                                        <td>Windows Mobile 6</td>
                                        <td className="center">-</td>
                                        <td className="center">C</td>
                                    </tr>
                                    <tr className="gradeC">
                                        <td>Misc</td>
                                        <td>PSP browser</td>
                                        <td>PSP</td>
                                        <td className="center">-</td>
                                        <td className="center">C</td>
                                    </tr>
                                    <tr className="gradeU">
                                        <td>Other browsers</td>
                                        <td>All others</td>
                                        <td>-</td>
                                        <td className="center">-</td>
                                        <td className="center">U</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="well">
                            <h4>DataTables Usage Information</h4>
                            <p>DataTables is a very flexible, advanced tables plugin for jQuery. In SB Admin, we are using a specialized version of DataTables built for Bootstrap 3. We have also customized the table headings to use Font Awesome icons in place of images. For complete documentation on DataTables, visit their website at <a target="_blank" href="https://datatables.net/">https://datatables.net/</a>.</p>
                            <a className="btn btn-default btn-lg btn-block" target="_blank" href="https://datatables.net/">View DataTables Documentation</a>
                        </div>
                    </div>
                </div>;

    }
});