import React, { Component } from 'react';
import axios from 'axios';

import css from './userAgenda.css';

import UserAgendaSidebar from './UserAgendaSidebar/UserAgendaSidebar';
import UserAgendaInfo from './UserAgendaInfo/UserAgendaInfo';
import UserAgendaDetails from './UserAgendaDetails/UserAgendaDetails';

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

  // <pre>{JSON.stringify(this.state.profile, undefined, 2)}</pre>

  render() {
    return (
      <section class="bg-wrapper">
        <div className="container box" id="agenda">
          <div className="row">
            <UserAgendaSidebar />
            <UserAgendaInfo />
            <UserAgendaDetails />
          </div>
        </div>
      </section>
    );
  }
}
export default UserAgenda;
