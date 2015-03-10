/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');

require('bootstrap-social/bootstrap-social.css');

module.exports = React.createClass({

	render: function(){
		
		return <div>
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="page-header">Buttons</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    Default Buttons
                                </div>
                                <div className="panel-body">
                                    <h4>Normal Buttons</h4>
                                    <p>
                                        <button type="button" className="btn btn-default">Default</button>&nbsp;
                                        <button type="button" className="btn btn-primary">Primary</button>&nbsp;
                                        <button type="button" className="btn btn-success">Success</button>&nbsp;
                                        <button type="button" className="btn btn-info">Info</button>&nbsp;
                                        <button type="button" className="btn btn-warning">Warning</button>&nbsp;
                                        <button type="button" className="btn btn-danger">Danger</button>&nbsp;
                                        <button type="button" className="btn btn-link">Link</button>&nbsp;
                                    </p>
                                    <br />
                                    <h4>Disabled Buttons</h4>
                                    <p>
                                        <button type="button" className="btn btn-default disabled">Default</button>&nbsp;
                                        <button type="button" className="btn btn-primary disabled">Primary</button>&nbsp;
                                        <button type="button" className="btn btn-success disabled">Success</button>&nbsp;
                                        <button type="button" className="btn btn-info disabled">Info</button>&nbsp;
                                        <button type="button" className="btn btn-warning disabled">Warning</button>&nbsp;
                                        <button type="button" className="btn btn-danger disabled">Danger</button>&nbsp;
                                        <button type="button" className="btn btn-link disabled">Link</button>&nbsp;
                                    </p>
                                    <br />
                                    <h4>Button Sizes</h4>
                                    <p>
                                        <button type="button" className="btn btn-primary btn-lg">Large button</button>&nbsp;
                                        <button type="button" className="btn btn-primary">Default button</button>&nbsp;
                                        <button type="button" className="btn btn-primary btn-sm">Small button</button>&nbsp;
                                        <button type="button" className="btn btn-primary btn-xs">Mini button</button>&nbsp;
                                        <br />
                                        <br />
                                        <button type="button" className="btn btn-primary btn-lg btn-block">Block level button</button>&nbsp;
                                    </p>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    Circle Icon Buttons with Font Awesome Icons
                                </div>
                                <div className="panel-body">
                                    <h4>Normal Circle Buttons</h4>
                                    <button type="button" className="btn btn-default btn-circle"><i className="fa fa-check"></i>
                                    </button>&nbsp;
                                    <button type="button" className="btn btn-primary btn-circle"><i className="fa fa-list"></i>
                                    </button>&nbsp;
                                    <button type="button" className="btn btn-success btn-circle"><i className="fa fa-link"></i>
                                    </button>&nbsp;
                                    <button type="button" className="btn btn-info btn-circle"><i className="fa fa-check"></i>
                                    </button>&nbsp;
                                    <button type="button" className="btn btn-warning btn-circle"><i className="fa fa-times"></i>
                                    </button>&nbsp;
                                    <button type="button" className="btn btn-danger btn-circle"><i className="fa fa-heart"></i>
                                    </button>&nbsp;
                                    <br />
                                    <br />
                                    <h4>Large Circle Buttons</h4>
                                    <button type="button" className="btn btn-default btn-circle btn-lg"><i className="fa fa-check"></i>
                                    </button>&nbsp;
                                    <button type="button" className="btn btn-primary btn-circle btn-lg"><i className="fa fa-list"></i>
                                    </button>&nbsp;
                                    <button type="button" className="btn btn-success btn-circle btn-lg"><i className="fa fa-link"></i>
                                    </button>&nbsp;
                                    <button type="button" className="btn btn-info btn-circle btn-lg"><i className="fa fa-check"></i>
                                    </button>&nbsp;
                                    <button type="button" className="btn btn-warning btn-circle btn-lg"><i className="fa fa-times"></i>
                                    </button>&nbsp;
                                    <button type="button" className="btn btn-danger btn-circle btn-lg"><i className="fa fa-heart"></i>
                                    </button>&nbsp;
                                    <br />
                                    <br />
                                    <h4>Extra Large Circle Buttons</h4>
                                    <button type="button" className="btn btn-default btn-circle btn-xl"><i className="fa fa-check"></i>
                                    </button>&nbsp;
                                    <button type="button" className="btn btn-primary btn-circle btn-xl"><i className="fa fa-list"></i>
                                    </button>&nbsp;
                                    <button type="button" className="btn btn-success btn-circle btn-xl"><i className="fa fa-link"></i>
                                    </button>&nbsp;
                                    <button type="button" className="btn btn-info btn-circle btn-xl"><i className="fa fa-check"></i>
                                    </button>&nbsp;
                                    <button type="button" className="btn btn-warning btn-circle btn-xl"><i className="fa fa-times"></i>
                                    </button>&nbsp;
                                    <button type="button" className="btn btn-danger btn-circle btn-xl"><i className="fa fa-heart"></i>
                                    </button>&nbsp;
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    Outline Buttons with Smooth Transition
                                </div>
                                <div className="panel-body">
                                    <h4>Outline Buttons</h4>
                                    <p>
                                        <button type="button" className="btn btn-outline btn-default">Default</button>&nbsp;
                                        <button type="button" className="btn btn-outline btn-primary">Primary</button>&nbsp;
                                        <button type="button" className="btn btn-outline btn-success">Success</button>&nbsp;
                                        <button type="button" className="btn btn-outline btn-info">Info</button>&nbsp;
                                        <button type="button" className="btn btn-outline btn-warning">Warning</button>&nbsp;
                                        <button type="button" className="btn btn-outline btn-danger">Danger</button>&nbsp;
                                        <button type="button" className="btn btn-outline btn-link">Link</button>&nbsp;
                                    </p>
                                    <br />
                                    <h4>Outline Button Sizes</h4>
                                    <p>
                                        <button type="button" className="btn btn-outline btn-primary btn-lg">Large button</button>&nbsp;
                                        <button type="button" className="btn btn-outline btn-primary">Default button</button>&nbsp;
                                        <button type="button" className="btn btn-outline btn-primary btn-sm">Small button</button>&nbsp;
                                        <button type="button" className="btn btn-outline btn-primary btn-xs">Mini button</button>&nbsp;
                                        <br />
                                        <br />
                                        <button type="button" className="btn btn-outline btn-primary btn-lg btn-block">Block level button</button>&nbsp;
                                    </p>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    Social Buttons with Font Awesome Icons
                                </div>
                                <div className="panel-body">
                                    <h4>Social Buttons</h4>
                                    <a className="btn btn-block btn-social btn-bitbucket">
                                        <i className="fa fa-bitbucket"></i> Sign in with Bitbucket
                                    </a>
                                    <a className="btn btn-block btn-social btn-dropbox">
                                        <i className="fa fa-dropbox"></i> Sign in with Dropbox
                                    </a>
                                    <a className="btn btn-block btn-social btn-facebook">
                                        <i className="fa fa-facebook"></i> Sign in with Facebook
                                    </a>
                                    <a className="btn btn-block btn-social btn-flickr">
                                        <i className="fa fa-flickr"></i> Sign in with Flickr
                                    </a>
                                    <a className="btn btn-block btn-social btn-github">
                                        <i className="fa fa-github"></i> Sign in with GitHub
                                    </a>
                                    <a className="btn btn-block btn-social btn-google-plus">
                                        <i className="fa fa-google-plus"></i> Sign in with Google
                                    </a>
                                    <a className="btn btn-block btn-social btn-instagram">
                                        <i className="fa fa-instagram"></i> Sign in with Instagram
                                    </a>
                                    <a className="btn btn-block btn-social btn-linkedin">
                                        <i className="fa fa-linkedin"></i> Sign in with LinkedIn
                                    </a>
                                    <a className="btn btn-block btn-social btn-pinterest">
                                        <i className="fa fa-pinterest"></i> Sign in with Pinterest
                                    </a>
                                    <a className="btn btn-block btn-social btn-tumblr">
                                        <i className="fa fa-tumblr"></i> Sign in with Tumblr
                                    </a>
                                    <a className="btn btn-block btn-social btn-twitter">
                                        <i className="fa fa-twitter"></i> Sign in with Twitter
                                    </a>
                                    <a className="btn btn-block btn-social btn-vk">
                                        <i className="fa fa-vk"></i> Sign in with VK
                                    </a>

                                    <hr />

                                    <div className="text-center">
                                        <a className="btn btn-social-icon btn-bitbucket"><i className="fa fa-bitbucket"></i></a>&nbsp;
                                        <a className="btn btn-social-icon btn-dropbox"><i className="fa fa-dropbox"></i></a>&nbsp;
                                        <a className="btn btn-social-icon btn-facebook"><i className="fa fa-facebook"></i></a>&nbsp;
                                        <a className="btn btn-social-icon btn-flickr"><i className="fa fa-flickr"></i></a>&nbsp;
                                        <a className="btn btn-social-icon btn-github"><i className="fa fa-github"></i></a>&nbsp;
                                        <a className="btn btn-social-icon btn-google-plus"><i className="fa fa-google-plus"></i></a>&nbsp;
                                        <a className="btn btn-social-icon btn-instagram"><i className="fa fa-instagram"></i></a>&nbsp;
                                        <a className="btn btn-social-icon btn-linkedin"><i className="fa fa-linkedin"></i></a>&nbsp;
                                        <a className="btn btn-social-icon btn-pinterest"><i className="fa fa-pinterest"></i></a>&nbsp;
                                        <a className="btn btn-social-icon btn-tumblr"><i className="fa fa-tumblr"></i></a>&nbsp;
                                        <a className="btn btn-social-icon btn-twitter"><i className="fa fa-twitter"></i></a>&nbsp;
                                        <a className="btn btn-social-icon btn-vk"><i className="fa fa-vk"></i></a>&nbsp;
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
           		</div>;
	}
});