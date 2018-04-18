const registration = [
  {
    step: 1,
    form: [
      {
        name: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'User Name',
            label: 'User Name'
          },
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
            label: 'Your City'
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
    form: [
      {
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
        zipcode: {
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
    form: [
      {
        age: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'Age',
            label: 'Age'
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
        }
      }
    ]
  }
];

export default registration;
