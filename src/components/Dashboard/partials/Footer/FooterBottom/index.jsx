/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var Col = require('react-bootstrap/Col');

module.exports = React.createClass({

	render: function(){

		return (		    
			<div className="footer-content-right">
				<div className="page-footer container">
					<div className="row right-reserved">
						<Col xs={12} md={4} mdOffset={1}>
							
							<ul className="list-inline">
								<li></li>
							</ul>
						</Col>
						<Col xs={12} md={5} mdOffset={1}>
							<ul className="list-inline">
								{/*<li><a className="text white" href="#">Support</a></li>
																<li><a className="text white" href="#">Report A Bug</a></li>
																<li><a className="text white" href="#">Privacy Policy</a></li>
																<li><a className="text white" href="#">Terms of Service</a></li>
																<li><a className="text white" href="#">Canspam Act</a></li>*/}
							</ul>
						</Col>
						{/*<Col xs={12} md={4}>
													<ul className="social-icons margin-bottom-10">
														<li>
															<a href="#" data-original-title="facebook" className="facebook"></a>
														</li>
														<li>
															<a href="#" data-original-title="github" className="github"></a>
														</li>
														<li>
															<a href="#" data-original-title="Goole Plus" className="googleplus"></a>
														</li>
														<li>
															<a href="#" data-original-title="linkedin" className="linkedin"></a>
														</li>
														<li>
															<a href="#" data-original-title="rss" className="rss"></a>
														</li>
														<li>
															<a href="#" data-original-title="skype" className="skype"></a>
														</li>
														<li>
															<a href="#" data-original-title="twitter" className="twitter"></a>
														</li>
														<li>
															<a href="#" data-original-title="youtube" className="youtube"></a>
														</li>
													</ul>
												</Col>*/}
					</div>
				</div>
			</div>
		);

	}
	
});