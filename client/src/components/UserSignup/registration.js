import { Z_DEFAULT_COMPRESSION } from 'zlib';

const registration = [
  {
    step: 1,
    instruction: 'Set Up An Account',
    form: [
      {
        username: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'What do we call you?',
            label: 'Username'
          },
          value: '',
          validation: {
            required: false
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
        zip_code: {
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
        // firstName: {
        //   elementType: 'input',
        //   elementConfig: {
        //     type: 'text',
        //     placeholder: 'First Name',
        //     label: 'First Name'
        //   },
        //   value: '',
        //   validation: {
        //     required: true
        //   },
        //   valid: false
        // },
        // lastName: {
        //   elementType: 'input',
        //   elementConfig: {
        //     type: 'text',
        //     placeholder: 'Last Name',
        //     label: 'Last Name'
        //   },
        //   value: '',
        //   validation: {
        //     required: true
        //   },
        //   valid: false
        // },
        price_level: {
          elementType: 'number',
          elementConfig: {
            type: 'number',
            step: '1',
            min: 1,
            max: 4,
            placeholder: 'Price Range 1-4',
            label: 'Your Dining Price Range'
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
            min: 1,
            max: 4,
            placeholder: 'Rating  1-4',
            label: 'What sort of Rating'
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
