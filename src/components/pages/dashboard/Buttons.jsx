import React, { PropTypes, Component } from 'react';
import {Panel, Button, PageHeader} from 'react-bootstrap';

var Buttons = React.createClass({

  render: function() {
    return (

      <div>

        <div className="row">
            <div className="col-lg-12">
                <PageHeader>Buttons</PageHeader>
            </div>
        </div>

        <div className="row">
          <div className="col-lg-6">

            <Panel header={<span>Default Buttons</span>} >
              <h4>Normal Buttons</h4>
              <p>
                <Button>Default</Button>
                <Button bsStyle="primary">Primary</Button>
                <Button bsStyle="success">Success</Button>
                <Button bsStyle="info">Info</Button>
                <Button bsStyle="warning">Warning</Button>
                <Button bsStyle="danger">Danger</Button>
                <Button bsStyle="link">Link</Button>
              </p>
              <br />
              <h4>Disabled Buttons</h4>
              <p>
                <Button disabled>Default</Button>
                <Button bsStyle="primary" disabled>Primary</Button>
                <Button bsStyle="success" disabled>Success</Button>
                <Button bsStyle="info" disabled>Info</Button>
                <Button bsStyle="warning" disabled>Warning</Button>
                <Button bsStyle="danger" disabled>Danger</Button>
                <Button bsStyle="link" disabled>Link</Button>
              </p>
              <br />
              <h4>Button Sizes</h4>
              <p>
                <Button bsStyle="primary" bsSize="large">Large button</Button>
                <Button bsStyle="primary">Default button</Button>
                <Button bsStyle="primary" bsSize="small">Small button</Button>
                <Button bsStyle="primary" bsSize="xsmall">Mini button</Button>
                <br />
                <br />
                <Button bsStyle="primary" bsSize="large" block>Block level button</Button>
              </p>
            </Panel>

            <Panel header={<span>Circle Icon Buttons with Font Awesome Icons</span>} >
              <h4>Normal Circle Buttons</h4>
              <Button className="btn-circle"><i className="fa fa-check"></i></Button>
              <Button bsStyle="primary" className="btn-circle"><i className="fa fa-list"></i></Button>
              <Button bsStyle="success" className="btn-circle"><i className="fa fa-link"></i></Button>
              <Button bsStyle="info" className="btn-circle"><i className="fa fa-check"></i></Button>
              <Button bsStyle="warning" className="btn-circle"><i className="fa fa-times"></i></Button>
              <Button bsStyle="danger" className="btn-circle"><i className="fa fa-heart"></i></Button>
              <br />
              <br />
              <h4>Large Circle Buttons</h4>
              <Button bsSize="large" className="btn-circle"><i className="fa fa-check"></i></Button>
              <Button bsSize="large" bsStyle="primary" className="btn-circle"><i className="fa fa-list"></i></Button>
              <Button bsSize="large" bsStyle="success" className="btn-circle"><i className="fa fa-link"></i></Button>
              <Button bsSize="large" bsStyle="info" className="btn-circle"><i className="fa fa-check"></i></Button>
              <Button bsSize="large" bsStyle="warning" className="btn-circle"><i className="fa fa-times"></i></Button>
              <Button bsSize="large" bsStyle="danger" className="btn-circle"><i className="fa fa-heart"></i></Button>
              <br />
              <br />
              <h4>Extra Large Circle Buttons</h4>
              <Button className="btn-circle btn-xl"><i className="fa fa-check"></i></Button>
              <Button bsStyle="primary" className="btn-circle btn-xl"><i className="fa fa-list"></i></Button>
              <Button bsStyle="success" className="btn-circle btn-xl"><i className="fa fa-link"></i></Button>
              <Button bsStyle="info" className="btn-circle btn-xl"><i className="fa fa-check"></i></Button>
              <Button bsStyle="warning" className="btn-circle btn-xl"><i className="fa fa-times"></i></Button>
              <Button bsStyle="danger" className="btn-circle btn-xl"><i className="fa fa-heart"></i></Button>
            </Panel>

          </div>

          <div className="col-lg-6">

            <Panel header={<span>Outline Buttons with Smooth Transition</span>} >
              <h4>Outline Buttons</h4>
              <p>
                <Button className="btn-outline">Default</Button>
                <Button bsStyle="primary" className="btn-outline">Primary</Button>
                <Button bsStyle="success" className="btn-outline">Success</Button>
                <Button bsStyle="info" className="btn-outline">Info</Button>
                <Button bsStyle="warning" className="btn-outline">Warning</Button>
                <Button bsStyle="danger" className="btn-outline">Danger</Button>
                <Button bsStyle="link" className="btn-outline">Link</Button>
              </p>
              <br />
              <h4>Outline Button Sizes</h4>
              <p>
                <Button bsStyle="primary" className="btn-outline" bsSize="large">Large button</Button>
                <Button bsStyle="primary" className="btn-outline">Default button</Button>
                <Button bsStyle="primary" className="btn-outline" bsSize="small">Small button</Button>
                <Button bsStyle="primary" className="btn-outline" bsSize="xsmall">Mini button</Button>
                <br />
                <br />
                <Button bsStyle="primary" className="btn-outline" bsSize="large" block>Block level button</Button>
              </p>
            </Panel>

            <Panel header={<span>Social Buttons with Font Awesome Icons</span>} >
              <h4>Social Buttons</h4>
              <Button bsStyle="link" className="btn-social btn-bitbucket" block>
                <i className="fa fa-bitbucket"></i> Sign in with Bitbucket
              </Button>
              <Button bsStyle="link" className="btn-social btn-dropbox" block>
                <i className="fa fa-dropbox"></i> Sign in with Dropbox
              </Button>
              <Button bsStyle="link" className="btn-social btn-facebook" block>
                <i className="fa fa-facebook"></i> Sign in with Facebook
              </Button>
              <Button bsStyle="link" className="btn-social btn-flickr" block>
                <i className="fa fa-flickr"></i> Sign in with Flickr
              </Button>
              <Button bsStyle="link" className="btn-social btn-github" block>
                <i className="fa fa-github"></i> Sign in with GitHub
              </Button>
              <Button bsStyle="link" className="btn-social btn-google-plus" block>
                <i className="fa fa-google-plus"></i> Sign in with Google
              </Button>
              <Button bsStyle="link" className="btn-social btn-instagram" block>
                <i className="fa fa-instagram"></i> Sign in with Instagram
              </Button>
              <Button bsStyle="link" className="btn-social btn-linkedin" block>
                <i className="fa fa-linkedin"></i> Sign in with LinkedIn
              </Button>
              <Button bsStyle="link" className="btn-social btn-pinterest" block>
                <i className="fa fa-pinterest"></i> Sign in with Pinterest
              </Button>
              <Button bsStyle="link" className="btn-social btn-tumblr" block>
                <i className="fa fa-tumblr"></i> Sign in with Tumblr
              </Button>
              <Button bsStyle="link" className="btn-social btn-twitter" block>
                <i className="fa fa-twitter"></i> Sign in with Twitter
              </Button>
              <Button bsStyle="link" className="btn-social btn-vk" block>
                <i className="fa fa-vk"></i> Sign in with VK
              </Button>

              <hr />

              <div className="text-center">
                <Button bsStyle="link" className="btn-social-icon btn-bitbucket">
                  <i className="fa fa-bitbucket"></i>
                </Button>
                <Button bsStyle="link" className="btn-social-icon btn-dropbox">
                  <i className="fa fa-dropbox"></i>
                </Button>
                <Button bsStyle="link" className="btn-social-icon btn-facebook">
                  <i className="fa fa-facebook"></i>
                </Button>
                <Button bsStyle="link" className="btn-social-icon btn-flickr">
                  <i className="fa fa-flickr"></i>
                </Button>
                <Button bsStyle="link" className="btn-social-icon btn-github">
                  <i className="fa fa-github"></i>
                </Button>
                <Button bsStyle="link" className="btn-social-icon btn-google-plus">
                  <i className="fa fa-google-plus"></i>
                </Button>
                <Button bsStyle="link" className="btn-social-icon btn-instagram">
                  <i className="fa fa-instagram"></i>
                </Button>
                <Button bsStyle="link" className="btn-social-icon btn-linkedin">
                  <i className="fa fa-linkedin"></i>
                </Button>
                <Button bsStyle="link" className="btn-social-icon btn-pinterest">
                  <i className="fa fa-pinterest"></i>
                </Button>
                <Button bsStyle="link" className="btn-social-icon btn-tumblr">   
                  <i className="fa fa-tumblr"></i>
                </Button>
                <Button bsStyle="link" className="btn-social-icon btn-twitter">
                  <i className="fa fa-twitter"></i>
                </Button>
                <Button bsStyle="link" className="btn-social-icon btn-vk">
                  <i className="fa fa-vk"></i>
                </Button>
              </div>
            </Panel>

          </div>
        </div>
      </div>
      
    );
  }

});

export default Buttons;