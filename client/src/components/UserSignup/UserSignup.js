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
import ProfileSidebar from './ProfileSidebar/ProfileSidebar';

// form configuration
import registration from './registration';
console.log('number of steps', registration.length);

class UserSignup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
      _id: '',
      username: '', // optional
      email: '', // used for initial creation
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
    this.formBackHandler = this.formBackHandler.bind(this);
  }

  formAdvanceHandler() {
    if (this.state.step === 0) {
      axios
        .post('/community/signup', {
          password: this.state.password,
          email: this.state.email
        })
        .then(response => {
          console.log('check if they are a user!! ', response);
          localStorage.setItem('_fhID', response.data.id);
          this.setState({ _id: response.data.id });
          //this.setState({ step: +this.state.step + 1 });
        })
        .catch(err => {
          console.log('problem with checking user account creation', err);
        });
    }
    this.setState({ step: +this.state.step + 1 });
    // console.log(this.state.step);
  }

  formBackHandler() {
    this.setState({ step: +this.state.step - 1 });
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
      .post('/agendas/add', {
        user_id: this.state._id,
        username: this.state.username,
        address: this.state.address,
        city: this.state.city,
        state: this.state.state,
        zip_code: this.state.zipCode,
        price_level: this.state.price_level,
        rating: this.state.rating,
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
    let form = (
      <Aux>
        <h2>Thank you, now go be a hero!</h2>
      </Aux>
    );

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

    let backBtn = (
      <button
        onClick={() => this.formBackHandler(this.state.step)}
        type="button"
        className="btn btn-primary back-btn"
      >
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
    // if (this.state.step > 0) {
    //   sidebar = <ProfileSidebar step={this.state.step}/>;
    // }
    if (this.state.step === 0) {
      backBtn = null;
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
            <ProfileSidebar step={this.state.step} />
            <div className="col-lg-7 col-md-12 col-sm-12 content animated fadeIn">
              <h2 className="lead-txt">
                It's easy to start being a Friday Hero create your account
                today!
              </h2>
              <form className="fh-form">
                {form}
                <div className="container">
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
