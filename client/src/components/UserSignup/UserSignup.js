/* 
  UserSignup.js
  @author: Daren Lunsford
  @description: Handles the entire user signup process and workflow based on
  the steps needed for the form signup. Keeping the current status in the state
  untill the user clicks submit.
*/

import React, { Component } from 'react';
import axios from 'axios';

import Input from './../../ui/Input/Input';
import css from './userSignup.css';
import Aux from './../../hoc/Aux/Aux';
import Sidebar from './Sidebar/Sidebar';
import ProfileSidebar from './ProfileSidebar/ProfileSidebar';

// form configuration
import registration from './registration';
console.log('number of steps', registration.length);

class UserSignup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      address: '',
      city: '',
      state: '',
      zipcode: '',
      age: '',
      gender: '',
      status: '',
      price_level: '',
      rating: ''
    };
    this.formAdvanceHandler = this.formAdvanceHandler.bind(this);
    this.inputChangedHandler = this.inputChangedHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  formAdvanceHandler() {
    this.setState({ step: +this.state.step + 1 });
    console.log(this.state.step);
  }

  inputChangedHandler(event) {
    console.log(
      '[UserSignup] inputChangedHandler ',
      event,
      event.target.name,
      event.target.value
    );
    this.setState({ [event.target.name]: event.target.value });
  }

  submitHandler(event) {
    event.preventDefault();
    console.log('submitHandler');
    axios
      .post('/api/user', {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        password: this.state.password,
        address: this.state.address,
        city: this.state.city,
        state: this.state.state,
        zipCode: this.state.zipCode,
        price_level: this.state.price_level,
        rating: this.state.rating,
        gender: this.state.gender,
        status: this.state.status
      })
      .then(response => {
        console.log(response);
        this.formAdvanceHandler(this.state.step);
      })
      .catch(err => {
        console.log('error', err);
      });
  }

  render() {
    // initialize and set up form elements
    console.log('step', this.state.step);
    if (this.state.step <= 1) {
      console.log('this is ', this.state.step);
    } else {
      console.log('submit this thing');
    }
    let form = <p>Thank you</p>;

    if (this.state.step <= registration.length - 1) {
      const formElementsArray = [];
      for (let key in registration[this.state.step].form[0]) {
        formElementsArray.push({
          id: key,
          config: registration[this.state.step].form[0][key]
        });
      }

      form = (
        <div className="form-group">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              {formElementsArray.map(formEl => (
                <Input
                  key={formEl.id}
                  elementType={formEl.config.elementType}
                  elementConfig={formEl.config.elementConfig}
                  value={this.state[formEl.id]}
                  name={formEl.id}
                  label={formEl.config.elementConfig.label}
                  changed={this.inputChangedHandler}
                />
              ))}
            </div>
          </div>
        </div>
      );
    }

    console.log(JSON.stringify(this.state, undefined, 2));

    let sidebar = <Sidebar />;

    let backBtn = (
      <button type="button" className="btn btn-primary back-btn">
        Back
      </button>
    );
    let nextBtn = (
      <button
        onClick={() => this.formAdvanceHandler(this.state.step)}
        type="button"
        className="btn btn-primary next-btn"
      >
        Next
      </button>
    );
    if (this.state.step > 0) {
      sidebar = <ProfileSidebar step={this.state.step} />;
    }

    if (this.state.step === registration.length - 1) {
      nextBtn = (
        <button
          onClick={this.submitHandler}
          type="button"
          className="btn btn-primary next-btn"
        >
          Submit
        </button>
      );
    } else if (this.state.step >= registration.length) {
      nextBtn = null;
      backBtn = null;
    }

    return (
      <section className="bg-wrapper">
        <div id="signup" className="container box">
          <div className="row">
            {sidebar}
            <div className="col-lg-7 col-md-12 col-sm-12 content animated fadeIn">
              <h2 className="lead-txt">
                It's easy to start being a Friday Hero create your account
                today!
              </h2>
              <form className="fh-form">
                <div className="container">
                  {form}
                  {/* <button
                    type="button"
                    onClick={() => this.formAdvanceHandler(this.state.step)}
                  >
                    Next
                  </button>
                  <p />
                  <button onClick={this.submitHandler} type="button">
                    submit
                  </button> */}

                  <div className="row margin-help">
                    <div className="col-md-6 col-sm-12">{backBtn}</div>
                    <div className="col-md-6 col-sm-12 text-right">
                      {nextBtn}
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default UserSignup;
