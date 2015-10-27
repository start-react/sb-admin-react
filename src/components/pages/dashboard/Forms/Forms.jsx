import React, { PropTypes, Component } from 'react';
import {Panel, Button, Input, Label, FormControls, Row, Col, PageHeader} from 'react-bootstrap';

var Forms = React.createClass({

  render: function() {
    
    return (

      <div>

        <div className="row">
          <div className="col-lg-12">
            <PageHeader>Forms</PageHeader>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">

            <Panel header={<span>Basic Form Elements</span>} >
              <div className="row">
                <div className="col-lg-6">
                  <form>
                    <Input type="text" label="Text Input" help="Example block-level help text here." />
                    <Input type="text" label="Text Input with Placeholder" placeholder="Enter text" />
                    <FormControls.Static label="Static Control">email@example.com</FormControls.Static>
                    <Input type="file" label="File Input" />
                    <Input type="textarea" label="Text area" rows="3" />
                    <h5><strong>Checkboxes</strong></h5>
                    <Input type="checkbox" label="Checkbox 1" />
                    <Input type="checkbox" label="Checkbox 2" />
                    <Input type="checkbox" label="Checkbox 3" />
                                
                    <Row>
                      <Col xs={4}>
                        <h5><strong>Inline Checkboxes</strong></h5>
                      </Col>
                      <Col xs={1}>
                        <Input type="checkbox" label="1" />
                      </Col>
                      <Col xs={1}>
                        <Input type="checkbox" label="2" />
                      </Col>
                      <Col xs={1}>
                        <Input type="checkbox" label="3" />
                      </Col>
                    </Row>
                                    
                    <h5><strong>Radio Buttons</strong></h5>
                    <Input type="radio" label="Radio 1" />
                    <Input type="radio" label="Radio 2" />
                    <Input type="radio" label="Radio 3" />
                                    
                    <Row>
                      <Col xs={4}>
                        <h5><strong>Inline Radio Buttons</strong></h5>
                      </Col>
                      <Col xs={1}>
                        <Input type="radio" label="1" />
                      </Col>
                      <Col xs={1}>
                        <Input type="radio" label="2" />
                      </Col>
                      <Col xs={1}>
                        <Input type="radio" label="3" />
                      </Col>
                    </Row>
                                    
                    <Input type="select" label="Select" placeholder="select">
                      <option value="1">1</option>
                      <option value="1">2</option>
                      <option value="1">3</option>
                      <option value="1">4</option>
                      <option value="1">5</option>
                    </Input>
                    <Input type="select" label="Multiple Selects" multiple>
                      <option value="1">1</option>
                      <option value="1">2</option>
                      <option value="1">3</option>
                      <option value="1">4</option>
                      <option value="1">5</option>
                    </Input>
                    <Button type="submit">Submit Button</Button>
                    <Button type="reset">Reset Button</Button>
                  </form>
                </div>

                <div className="col-lg-6">
                  <h1>Disabled Form States</h1>
                  <form>
                    <Input type="text" label="Disabled input" placeholder="Disabled input" disabled />
                    <Input type="select" label="Disabled select menu" disabled>
                      <option>Disabled select</option>
                    </Input>
                    <Input type="checkbox" label="Disabled Checkbox" disabled />
                    <Button bsStyle="primary" type="submit" disabled>Disabled Button</Button>
                  </form>
                  <h1>Form Validation States</h1>
                  <form>
                    <Input type="text" label="Input with success" bsStyle="success" />
                    <Input type="text" label="Input with warning" bsStyle="warning" />
                    <Input type="text" label="Input with error" bsStyle="error" />
                  </form>
                  <h1>Input Groups</h1>
                  <form>
                    <Input type="text" addonBefore="@" placeholder="Username" />
                    <Input type="text" addonAfter=".00" />
                    <Input type="text" addonBefore=<i className="fa fa-eur"></i> placeholder="Font Awesome Icon" />
                    <Input type="text" addonBefore="$" addonAfter=".00" />
                    <Input type="text" buttonAfter= <Button><i className="fa fa-search"></i></Button> />
                  </form>
                </div>
              </div>
            </Panel>
          </div>
        </div>
      </div>
      
    );
  }

});

export default Forms;