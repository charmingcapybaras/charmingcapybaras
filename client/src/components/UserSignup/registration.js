const registration = [
  {
    step: 1,
    instruction: 'Set Up An Account',
    form: [
      {
        email: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'Email Address',
            label: 'Email Address'
          },
          value: '',
          validation: {
            required: true
          },
          valid: false
        },
        password: {
          elementType: 'password',
          elementConfig: {
            type: 'password',
            placeholder: 'Password',
            label: 'Password'
          },
          value: '',
          validation: {
            required: true
          },
          valid: false
        }
      }
    ]
  },
  {
    step: 2,
    instruction: 'Your Profile',
    form: [
      {
        firstName: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'First Name',
            label: 'First Name'
          },
          value: '',
          validation: {
            required: true
          },
          valid: false
        },
        lastName: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'Last Name',
            label: 'Last Name'
          },
          value: '',
          validation: {
            required: true
          },
          valid: false
        },
        address: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'Address',
            label: 'Address'
          },
          value: '',
          validation: {
            required: true
          },
          valid: false
        },
        city: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'City',
            label: 'City'
          },
          value: '',
          validation: {
            required: true
          },
          valid: false
        },
        state: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'State',
            label: 'State'
          },
          value: '',
          validation: {
            required: true
          },
          valid: false
        },
        zipCode: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'Zipcode',
            label: 'Zipcode'
          },
          value: '',
          validation: {
            required: true
          },
          valid: false
        }
      }
    ]
  },
  {
    step: 3,
    instruction: 'Basic Info',
    form: [
      {
        price_level: {
          elementType: 'number',
          elementConfig: {
            type: 'number',
            step: '1',
            min: 0,
            max: 5,
            placeholder: 'Price Range',
            label: 'Price Range'
          },
          value: '',
          validation: {
            required: true
          },
          valid: false
        },
        rating: {
          elementType: 'number',
          elementConfig: {
            type: 'number',
            step: '1',
            min: 0,
            max: 5,
            placeholder: 'Rating',
            label: 'Rating'
          },
          value: '',
          validation: {
            required: true
          },
          valid: false
        },
        status: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'Status',
            label: 'Status'
          },
          value: '',
          validation: {
            required: true
          },
          valid: false
        },
        gender: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'Gender',
            label: 'Gender'
          },
          value: '',
          validation: {
            required: true
          },
          valid: false
        }
      }
    ]
  }
];

export default registration;
