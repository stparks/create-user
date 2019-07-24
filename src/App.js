import React from 'react';

import { connect } from 'react-redux';
import { Actions } from "./actions/index";
import { bindActionCreators } from "redux";

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

import Form from 'reactstrap/lib/Form';
import FormText from 'reactstrap/lib/FormText';
import FormFeedback from 'reactstrap/lib/FormFeedback';

import Input from 'reactstrap/lib/Input';
import Button from 'reactstrap/lib/Button';

import { Toast, ToastBody, ToastHeader } from 'reactstrap';

import DomTools from "./lib/domTools";
import ValidInput from "./lib/validinput";

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  onCancel() {
    // reset the form
    DomTools.addClass(document.getElementById("failed-toast").parentElement, "hidden");
    DomTools.addClass(document.getElementById("success-toast").parentElement, "hidden");

    document.getElementById("create-user-form").reset();
  }

  onSubmit() {
    const data = new FormData(document.getElementById("create-user-form")),

      request = {
        method: 'POST',
        body: data
      };

    fetch('/api/form-url', request).then(function (response) {
      if (201 !== response.status) {

        DomTools.removeClass(document.getElementById("failed-toast").parentElement, "hidden");
        return;
      }

      DomTools.removeClass(document.getElementById("success-toast").parentElement, "hidden");
    });
  }

  // for fun, this will require your username to start is "s"
  setUserName() {
    let id = "userName";
    let input = document.getElementById(id);
    let value = input.value;

    if (ValidInput.IsEmpty(id) || !ValidInput.StartsWithS(id)) {
      DomTools.addClass(input, "is-invalid");
      return;
    }

    DomTools.removeClass(input, "is-invalid");
    // set user name
    this.props.setUserName(value);
  }

  setUserEmail() {
    let id = "userEmail";
    let input = document.getElementById(id);
    let value = input.value;

    if (!ValidInput.IsValidEmail(id)) {
      DomTools.addClass(input, "is-invalid");
      return;
    }

    DomTools.removeClass(input, "is-invalid");
    // set email
    this.props.setUserEmail(value);
  }

  setFirstName() {
    let id = "firstName";
    let input = document.getElementById(id);
    let value = input.value;
    if (0 === value.length) {
      DomTools.addClass(input, "is-invalid");
      return;
    }

    DomTools.removeClass(input, "is-invalid");
    // set first name
    this.props.setFirstName(value);
  }

  setLastName() {
    let id = "lastName";
    let input = document.getElementById(id);
    let value = input.value;

    if (0 === ValidInput.IsEmpty(id)) {
      DomTools.addClass(input, "is-invalid");
      return;
    }

    DomTools.removeClass(input, "is-invalid");
    // set last name
    this.props.setLastName(value);;
  }

  setStreetAddress() {
    let input = document.getElementById("streetAddress");
    let value = document.getElementById("streetAddress").value;
    if (0 === value.length) {
      DomTools.addClass(input, "is-invalid");
      return;
    }

    DomTools.removeClass(input, "is-invalid");
    this.props.setUserEmail(value);
  }

  setUnitNumber() {
    let input = document.getElementById("unitNumber");
    let value = document.getElementById("unitNumber").value;
    if (0 === value.length) {
      DomTools.addClass(input, "is-invalid");
      return;
    }

    DomTools.removeClass(input, "is-invalid");
    this.props.setUserEmail(value);
  }

  setCity() {
    let input = document.getElementById("city");
    let value = document.getElementById("city").value;
    if (0 === value.length) {
      DomTools.addClass(input, "is-invalid");
      return;
    }

    DomTools.removeClass(input, "is-invalid");
    this.props.setUserEmail(value);
  }

  setState() {
    let input = document.getElementById("state");
    let value = document.getElementById("state").value;
    if (0 === value.length) {
      DomTools.addClass(input, "is-invalid");
      return;
    }

    DomTools.removeClass(input, "is-invalid");
    this.props.setUserEmail(value);
  }

  setZip() {
    let input = document.getElementById("zip");
    let value = document.getElementById("zip").value;
    if (0 === value.length) {
      DomTools.addClass(input, "is-invalid");
      return;
    }

    DomTools.removeClass(input, "is-invalid");
    this.props.setUserEmail(value);
  }

  render() {
    return (
      <div className="App">
        <section>
          <Container id="create-user-container">
            <Form onSubmit={this.onSubmit.bind(this)} id="create-user-form" ref={form => (this.form = form)}>
              <div className="form-group row">
                <Col>
                  <div>
                    <FormText>Enter your username:</FormText>
                    <Input type="text" name="userName" id="userName" placeholder="Username" onChange={this.setUserName.bind(this)} />
                    <FormFeedback>Username is invalid.  This must begin with s, and it must have length.</FormFeedback>
                  </div>
                  <div>
                    <Input type="text" name="userEmail" id="userEmail" placeholder="Email" onChange={this.setUserEmail.bind(this)} />
                    <FormFeedback>Email is invalid</FormFeedback>
                  </div>
                </Col>
              </div>
              <div className="form-group row">
                <Col>
                  <div>
                    <Input type="text" name="firstName" id="firstName" placeholder="First Name" onChange={this.setFirstName.bind(this)} />
                    <FormFeedback>First Name is invalid</FormFeedback>
                  </div>
                  <div>
                    <Input type="text" name="lastName" id="lastName" placeholder="Last Name" onChange={this.setLastName.bind(this)} />
                    <FormFeedback>Last Name is invalid</FormFeedback>
                  </div>
                </Col>
              </div>
              <div className="form-group row">
                <Col>
                  <div>
                    <Input type="text" name="streetAddress" id="streetAddress" placeholder="Street Address" onChange={this.setStreetAddress.bind(this)} />
                    <FormFeedback>Last Name is invalid</FormFeedback>
                  </div>
                  <div>
                    <Input type="text" name="unitNumber" id="unitNumber" placeholder="Unit Number" onChange={this.setUnitNumber.bind(this)} />
                    <FormFeedback>Last Name is invalid</FormFeedback>
                  </div>
                  <div>
                    <Input type="text" name="city" id="city" placeholder="City" onChange={this.setCity.bind(this)} />
                    <FormFeedback>Last Name is invalid</FormFeedback>
                  </div>
                  <div>
                    <Input type="text" name="state" id="state" placeholder="Sate" onChange={this.setState.bind(this)} />
                    <FormFeedback>Last Name is invalid</FormFeedback>
                  </div>
                  <div>
                    <Input type="text" name="zip" id="zip" placeholder="Postal Code" onChange={this.setZip.bind(this)} />
                    <FormFeedback>Last Name is invalid</FormFeedback>
                  </div>
                </Col>
              </div>
              <div className="form-group row">
                <Col>
                  <Button onClick={this.onCancel.bind(this)}>Cancel</Button>
                  <Button onClick={this.onSubmit.bind(this)}>Submit</Button>
                </Col>
              </div>
              <Col>
                <div className="hidden p-3 bg-danger my-2 rounded">
                  <Toast id="failed-toast">
                    <ToastHeader>
                      Bummer
                     </ToastHeader>
                    <ToastBody>
                      This failed because of something.
                    </ToastBody>
                  </Toast>
                </div>
                <div className="hidden p-3 bg-primary my-2 rounded">
                  <Toast id="success-toast">
                    <ToastHeader>
                      Success!
                     </ToastHeader>
                    <ToastBody>
                      Not sure how you got here..
                    </ToastBody>
                  </Toast>
                </div>
              </Col>
            </Form>
          </Container>

        </section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { user: state.user };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
