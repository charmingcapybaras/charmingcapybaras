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
      id: '5adb9606d039468db8696660', //  5adb9571a7284d8d6efa12f5
      profile: [],
      agenda: []
    };
  }

  componentDidMount() {
    axios
      .get(`/api/user/${this.state.id}`)
      .then(response => {
        // console.log(response.data);
        // Object.keys(response.data).map(profileKey => {
        //   this.setState({
        //     [profileKey]: response.data[profileKey]
        //   });
        // });
        this.setState({ agenda: response.data.agenda[0] });
        this.setState({ profile: response.data });
        let transformedIngredients = Object.keys(response.data.agenda[0]).map(
          igKey => {
            return [...Array(response.data.agenda[0][igKey])].map((_, i) => {
              // console.log('this key', igKey, response.data.agenda[0][igKey]);
            });
          }
        );
      })
      .catch(error => {
        console.log('get user error ');
      });
  }

  render() {
    console.log('profile', this.state.profile);
    console.log('agenda ', this.state.agenda);
    return (
      <section className="bg-wrapper">
        {/* <pre>{JSON.stringify(this.state.profile, undefined, 2)}</pre> */}
        <div className="container box" id="agenda">
          <div className="row">
            <UserAgendaSidebar />
            <UserAgendaInfo profile={this.state.profile} />
            <UserAgendaDetails agenda={this.state.agenda} />
          </div>
        </div>
      </section>
    );
  }
}
export default UserAgenda;
