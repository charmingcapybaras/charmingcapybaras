import React, { Component } from 'react';
import axios from 'axios';

class UserAgenda extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '5adb9571a7284d8d6efa12f5',
      profile: null
    };
  }

  componentDidMount() {
    axios
      .get(`/api/user/${this.state.id}`)
      .then(response => {
        console.log('get user ', response.data);
        this.setState({ profile: response.data });
      })
      .catch(error => {
        console.log('get user error ');
      });
  }

  render() {
    return (
      <div>
        <p>UserAgenda</p>
        <pre>{JSON.stringify(this.state.profile, undefined, 2)}</pre>
      </div>
    );
  }
}
export default UserAgenda;
