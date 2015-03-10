/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');


module.exports = React.createClass({

	render: function(){
		
		return <div>
                	<div className="row">
                        <div className="col-lg-12">
                            <h1 className="page-header">Forms</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    Basic Form Elements
                                </div>
                                <div className="panel-body">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <form role="form">
                                                <div className="form-group">
                                                    <label>Text Input</label>
                                                    <input className="form-control" />
                                                    <p className="help-block">Example block-level help text here.</p>
                                                </div>
                                                <div className="form-group">
                                                    <label>Text Input with Placeholder</label>
                                                    <input className="form-control" placeholder="Enter text" />
                                                </div>
                                                <div className="form-group">
                                                    <label>Static Control</label>
                                                    <p className="form-control-static">email@example.com</p>
                                                </div>
                                                <div className="form-group">
                                                    <label>File input</label>
                                                    <input type="file" />
                                                </div>
                                                <div className="form-group">
                                                    <label>Text area</label>
                                                    <textarea className="form-control" rows="3"></textarea>
                                                </div>
                                                <div className="form-group">
                                                    <label>Checkboxes</label>
                                                    <div className="checkbox">
                                                        <label>
                                                            <input type="checkbox" value="" />Checkbox 1
                                                        </label>
                                                    </div>
                                                    <div className="checkbox">
                                                        <label>
                                                            <input type="checkbox" value="" />Checkbox 2
                                                        </label>
                                                    </div>
                                                    <div className="checkbox">
                                                        <label>
                                                            <input type="checkbox" value="" />Checkbox 3
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label>Inline Checkboxes</label>
                                                    <label className="checkbox-inline">
                                                        <input type="checkbox" />1
                                                    </label>
                                                    <label className="checkbox-inline">
                                                        <input type="checkbox" />2
                                                    </label>
                                                    <label className="checkbox-inline">
                                                        <input type="checkbox" />3
                                                    </label>
                                                </div>
                                                <div className="form-group">
                                                    <label>Radio Buttons</label>
                                                    <div className="radio">
                                                        <label>
                                                            <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" />Radio 1
                                                        </label>
                                                    </div>
                                                    <div className="radio">
                                                        <label>
                                                            <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2" />Radio 2
                                                        </label>
                                                    </div>
                                                    <div className="radio">
                                                        <label>
                                                            <input type="radio" name="optionsRadios" id="optionsRadios3" value="option3" />Radio 3
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label>Inline Radio Buttons</label>
                                                    <label className="radio-inline">
                                                        <input type="radio" name="optionsRadiosInline" id="optionsRadiosInline1" value="option1" />1
                                                    </label>
                                                    <label className="radio-inline">
                                                        <input type="radio" name="optionsRadiosInline" id="optionsRadiosInline2" value="option2" />2
                                                    </label>
                                                    <label className="radio-inline">
                                                        <input type="radio" name="optionsRadiosInline" id="optionsRadiosInline3" value="option3" />3
                                                    </label>
                                                </div>
                                                <div className="form-group">
                                                    <label>Selects</label>
                                                    <select className="form-control">
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <label>Multiple Selects</label>
                                                    <select multiple className="form-control">
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                    </select>
                                                </div>
                                                <button type="submit" className="btn btn-default">Submit Button</button>&nbsp;
                                                <button type="reset" className="btn btn-default">Reset Button</button>
                                            </form>
                                        </div>
                                        <div className="col-lg-6">
                                            <h1>Disabled Form States</h1>
                                            <form role="form">
                                                <fieldset disabled>
                                                    <div className="form-group">
                                                        <label for="disabledSelect">Disabled input</label>
                                                        <input className="form-control" id="disabledInput" type="text" placeholder="Disabled input" disabled />
                                                    </div>
                                                    <div className="form-group">
                                                        <label for="disabledSelect">Disabled select menu</label>
                                                        <select id="disabledSelect" className="form-control">
                                                            <option>Disabled select</option>
                                                        </select>
                                                    </div>
                                                    <div className="checkbox">
                                                        <label>
                                                            <input type="checkbox" />Disabled Checkbox
                                                        </label>
                                                    </div>
                                                    <button type="submit" className="btn btn-primary">Disabled Button</button>
                                                </fieldset>
                                            </form>
                                            <h1>Form Validation States</h1>
                                            <form role="form">
                                                <div className="form-group has-success">
                                                    <label className="control-label" for="inputSuccess">Input with success</label>
                                                    <input type="text" className="form-control" id="inputSuccess" />
                                                </div>
                                                <div className="form-group has-warning">
                                                    <label className="control-label" for="inputWarning">Input with warning</label>
                                                    <input type="text" className="form-control" id="inputWarning" />
                                                </div>
                                                <div className="form-group has-error">
                                                    <label className="control-label" for="inputError">Input with error</label>
                                                    <input type="text" className="form-control" id="inputError" />
                                                </div>
                                            </form>
                                            <h1>Input Groups</h1>
                                            <form role="form">
                                                <div className="form-group input-group">
                                                    <span className="input-group-addon">@</span> 
                                                    <input type="text" className="form-control" placeholder="Username" />
                                                </div>
                                                <div className="form-group input-group">
                                                    <input type="text" className="form-control" />
                                                    <span className="input-group-addon">.00</span>
                                                </div>
                                                <div className="form-group input-group">
                                                    <span className="input-group-addon"><i className="fa fa-eur"></i>
                                                    </span>
                                                    <input type="text" className="form-control" placeholder="Font Awesome Icon" />
                                                </div>
                                                <div className="form-group input-group">
                                                    <span className="input-group-addon">$</span>
                                                    <input type="text" className="form-control" />
                                                    <span className="input-group-addon">.00</span>
                                                </div>
                                                <div className="form-group input-group">
                                                    <input type="text" className="form-control" />
                                                    <span className="input-group-btn">
                                                        <button className="btn btn-default" type="button"><i className="fa fa-search"></i>
                                                        </button>
                                                    </span>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>;
	}
});