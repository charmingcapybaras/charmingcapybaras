/* 
  UserSignup.js
  @author: Daren Lunsford
  @description: Handles the entire user signup process and workflow based on
  the steps needed for the form signup. Keeping the current status in the state
  untill the user clicks submit.
*/

import React, { Component } from 'react';
import Input from './../../ui/Input/Input';
import NoLinksNavigation from './NoLinksNavigation';
import WrapperBox from './WrapperBox';
import axios from 'axios';

// form configuration
import registration from './registration';

class UserSignup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
      name: '',
      email: '',
      city: '',
      state: '',
      zipcode: '',
      age: '',
      gender: '',
      status: ''
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
        firstname: 'daren',
        lastname: 'lunsford',
        gender: 'm',
        status: 'married'
      })
      .then(response => {
        console.log(response);
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
        <div>
          {formElementsArray.map(formEl => (
            <Input
              key={formEl.id}
              elementType={formEl.config.elementType}
              elementConfig={formEl.config.elementConfig}
              value={this.state[formEl.id]}
              name={formEl.id}
              changed={this.inputChangedHandler}
            />
          ))}
        </div>
      );
    }

    console.log(JSON.stringify(this.state, undefined, 2));

    return (
      <div>
        {form}
        <button
          type="button"
          onClick={() => this.formAdvanceHandler(this.state.step)}
        >
          Next
        </button>
        <p />
        <button onClick={this.submitHandler} type="button">
          submit
        </button>
      </div>
    );
  }
}

export default UserSignup;
