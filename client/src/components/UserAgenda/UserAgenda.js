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
      _id: null,
      id: '', //  5adb9571a7284d8d6efa12f5
      profile: [],
      agenda: [],
      data: null,
      agendaLoaded: false
    };
  }

  componentDidMount() {
    // util.checkUser();
    this.setState({ _id: localStorage._fhID });
    var userID = localStorage._fhID;

    console.log('==================== agenda ========================');
    axios
      .get(`/agenda/${userID}`)
      .then(response => {
        console.log('worked ', response);
        console.log(response.data);
        // Object.keys(response.data).map(profileKey => {
        //   this.setState({
        //     [profileKey]: response.data[profileKey]
        //   });
        // });
        this.setState({ agenda: response.data.agenda[0] });

        this.setState({ profile: response });
        this.setState({ data: response.data });
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

    this.setState({ agendaLoaded: true });
  }

  render() {
    console.log('data', this.state.data);
    console.log('current login id ', this.state._id);
    console.log('agenda ', this.state.agenda);
    return (
      <section className="bg-wrapper">
        {/* <pre>{JSON.stringify(this.state.profile, undefined, 2)}</pre> */}
        <div className="container box" id="agenda">
          <div className="row">
            <UserAgendaSidebar />
            <UserAgendaInfo profileID={this.state._id} />
            <UserAgendaDetails agendaID={this.state._id} />
          </div>
        </div>
      </section>
    );
  }
}
export default UserAgenda;
