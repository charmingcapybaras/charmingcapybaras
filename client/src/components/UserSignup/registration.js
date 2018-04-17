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
        }
      }
    ]
  },
  {
    step: 2,
    form: [
      {
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
        }
      }
    ]
  }
];

export default registration;
