/* 
  UserSignup.js
  @author: Daren Lunsford
  @description: Handles the entire user signup process and workflow based on
  the steps needed for the form signup. Keeping the current status in the state
  untill the user clicks submit.
*/

import React, { Component } from 'react';
import Input from './../../ui/Input/Input';

class UserSignup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      user: {
        name: '',
        email: ''
      },

      userRegistration: {
        name: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'User Name',
            label: 'User Name'
          },
          step: 1,
          value: '',
          validation: {
            required: true
          },
          valid: false
        },
        email: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'Email Address',
            label: 'Email Address'
          },
          step: 2,
          value: '',
          validation: {
            required: true
          },
          valid: false
        }
      }
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
      event.target.name,
      event.target.value
    );
  }

  submitHandler() {
    console.log('submitHandler');
  }

  render() {
    // initialize and set up form elements
    const formElementsArray = [];
    for (let key in this.state.userRegistration) {
      formElementsArray.push({
        id: key,
        config: this.state.userRegistration[key]
      });
    }
    let form = (
      <div>
        {formElementsArray.map(formEl => (
          <Input
            key={formEl.id}
            elementType={formEl.config.elementType}
            elementConfig={formEl.config.elementConfig}
            value={formEl.config.value}
            changed={event => this.inputChangedHandler(event, formEl.id)}
          />
        ))}
      </div>
    );

    if (this.state.step === 2) {
      form = <div>form 2</div>;
      console.log('step 2');
    } else if (this.state.step === 3) {
      form = <div>form 3</div>;
      console.log('step 3');
    }
    return (
      <div>
        {form}
        <button type="button" onClick={this.formAdvanceHandler}>
          Next
        </button>
      </div>
    );
  }
}

export default UserSignup;
