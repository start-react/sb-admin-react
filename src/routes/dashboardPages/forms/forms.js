import React, { PropTypes } from 'react';
import {
  Panel,
  Button,
  Col,
  PageHeader,
  ControlLabel,
  FormControl,
  HelpBlock,
  FormGroup,
  Checkbox,
  Form,
  Radio,
  InputGroup,
  Glyphicon } from 'react-bootstrap';

import FormControlFeedback from 'react-bootstrap/lib/FormControlFeedback';
import FormControlStatic from 'react-bootstrap/lib/FormControlStatic';
import InputGroupAddon from 'react-bootstrap/lib/InputGroupAddon';

const title = 'Forms';


function displayForms(props, context) {
  context.setTitle(title);
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
                <Form>
                  <FormGroup
                    controlId="formBasicText"
                  >
                    <ControlLabel>Text Input</ControlLabel>
                    <FormControl
                      type="text"
                    />
                    <FormControlFeedback />
                    <HelpBlock>Example block-level help text here.</HelpBlock>
                  </FormGroup>

                  <FormGroup controlId="formBasicText2">
                    <ControlLabel>Text Input</ControlLabel>
                    <FormControl
                      type="text"
                      placeholder="Enter Text"
                    />
                    <FormControlFeedback />
                  </FormGroup>

                  <FormGroup>
                    <ControlLabel>Static text</ControlLabel>
                    <FormControlStatic>
                      email@example.com
                    </FormControlStatic>
                  </FormGroup>

                  <FormGroup
                    controlId="formBasicFile"
                  >
                    <ControlLabel>File Input</ControlLabel>
                    <FormControl
                      type="file"
                    />
                    <FormControlFeedback />
                  </FormGroup>

                  <FormGroup controlId="formControlsTextarea">
                    <ControlLabel>Textarea</ControlLabel>
                    <FormControl componentClass="textarea" placeholder="textarea" />
                  </FormGroup>

                  <FormGroup controlId="formControlsCheckbox">
                    <ControlLabel>CheckBox</ControlLabel>
                    <Checkbox>Checkbox #1 </Checkbox>
                    <Checkbox> Checkbox #2 </Checkbox>
                    <Checkbox> Checkbox #3 </Checkbox>
                  </FormGroup>

                  <FormGroup>
                    <ControlLabel>Inline CheckBox</ControlLabel>
                    <Col>
                      <Checkbox inline>
                       1
                      </Checkbox>
                      {' '}
                      <Checkbox inline>
                       2
                      </Checkbox>
                      {' '}
                      <Checkbox inline>
                       3
                      </Checkbox>
                    </Col>
                  </FormGroup>

                  <FormGroup>
                    <ControlLabel>Inline Radio</ControlLabel>
                    <Col>
                      <Radio inline>
                        1
                      </Radio>
                      {' '}
                      <Radio inline>
                        2
                      </Radio>
                      {' '}
                      <Radio inline>
                        3
                      </Radio>
                    </Col>
                  </FormGroup>

                  <FormGroup controlId="formControlsSelect">
                    <ControlLabel>Select</ControlLabel>
                    <FormControl componentClass="select" placeholder="select">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </FormControl>
                  </FormGroup>

                  <FormGroup controlId="formControlsSelectMultiple">
                    <ControlLabel>Multiple select</ControlLabel>
                    <FormControl componentClass="select" multiple>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </FormControl>
                  </FormGroup>

                  <FormGroup>
                    <Button type="submit">Submit Button</Button>
                    {'  '}
                    <Button type="reset">Reset Button</Button>
                  </FormGroup>
                </Form>
              </div>
              <div className="col-lg-6">
                <h1>Disabled Form States</h1>
                <Form>
                  <FormGroup controlId="formControlDisableState" >
                    <ControlLabel> Disabled Input </ControlLabel>
                    <FormControl type="text" placeholder="Disabled Input" disabled />
                  </FormGroup>

                  <FormGroup controlId="formControlsDisableSelect">
                    <ControlLabel>Disabled Select</ControlLabel>
                    <FormControl componentClass="select" placeholder="select" disabled>
                      <option value="1">1</option>
                      <option value="2">2</option>
                    </FormControl>
                  </FormGroup>

                  <FormGroup controlId="formControlsDisabledCheckbox">
                    <Checkbox disabled>Disabled CheckBox</Checkbox>
                  </FormGroup>

                  <FormGroup controlId="formControlsDisabledButton">
                    <Button bsStyle="primary" type="submit" disabled>Disabled Button </Button>
                  </FormGroup>
                </Form>

                <h1>Form Validation States</h1>
                <Form>
                  <FormGroup controlId="formValidationSuccess2" validationState="success">
                    <ControlLabel>Input with success</ControlLabel>
                    <FormControl type="text" />
                    <FormControlFeedback />
                  </FormGroup>
                  <FormGroup controlId="formValidationWarning1" validationState="warning">
                    <ControlLabel>Input with warning</ControlLabel>
                    <FormControl type="text" />
                    <FormControlFeedback />
                  </FormGroup>
                  <FormGroup controlId="formValidationWarning1" validationState="error">
                    <ControlLabel>Input with Error</ControlLabel>
                    <FormControl type="text" />
                    <FormControlFeedback />
                  </FormGroup>
                </Form>

                <h1>Input Groups</h1>
                <Form>
                  <FormGroup>
                    <InputGroup>
                      <InputGroupAddon>@</InputGroupAddon>
                      <FormControl type="text" />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup>
                      <FormControl type="text" />
                      <InputGroupAddon>.00</InputGroupAddon>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup>
                      <InputGroupAddon>$</InputGroupAddon>
                      <FormControl type="text" />
                      <InputGroupAddon>.00</InputGroupAddon>
                    </InputGroup>
                  </FormGroup>

                  <FormGroup>
                    <InputGroup>
                      <FormControl type="text" />
                      <InputGroupAddon>
                        <Glyphicon glyph="music" />
                      </InputGroupAddon>
                    </InputGroup>
                  </FormGroup>
                </Form>
              </div>
            </div>
          </Panel>
        </div>
      </div>
    </div>
  );
}

displayForms.contextTypes = { setTitle: PropTypes.func.isRequired };

export default displayForms;
