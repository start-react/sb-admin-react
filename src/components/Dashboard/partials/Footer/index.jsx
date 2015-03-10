/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var Col = require('react-bootstrap/Col');

var FooterBottom = require('./FooterBottom');


module.exports = React.createClass({

	render: function(){

		return (		    
			    <footer className="footer-content">

					{/*<div className="page-gray">
											<div className="container ">
												<div className="page-footer">
													<div className="row">
														<Col xs={12} md={4}>
															<h3>About</h3>
															<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
														</Col>
					
														<Col xs={12} md={4}>
															<h3>Monthly NewsLetter</h3>
															<p>Subscribe to our newsletter and stay up to date with the lastest news and deal!!</p>
															<div className="input-group">
																<input id="email" className="form-control" name="email" placeholder="youremail@email.com" type="text" />
																<span className="input-group-btn">
																	<button id="subcribe" className="btn blue" type="button">SUBSCRIBE</button>
																</span>
															</div>
														</Col>
					
														<Col xs={12} md={4}>
															<h3>Contact Us</h3>
															<address>
															  <strong>Loop, Inc.</strong><br />
															  795 Park Ave, Suite 120<br />
															  San Francisco, CA 94107<br />
															  <abbr title="Phone">P:</abbr> (123) 456-7890<br />
															</address>
					
															<address>
															  <strong>Email</strong>&nbsp;<a href="mailto:#"> info@example.com</a>
															</address>
														</Col>
													</div>
												</div>
											</div>
										</div>
					*/}
					<FooterBottom />	

				</footer>
		);

	}
	
});