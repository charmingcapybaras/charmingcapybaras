import React, { Component } from 'react';
import axios from 'axios';
import renderHTML from 'react-render-html';
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
      lat: '',
      lng: '',
      weatherSummary: '',
      weatherIcon: '',
      agendaLoaded: false
    };
    this.agendaDate = this.agendaDate.bind(this);
  }

  componentDidMount() {
    // util.checkUser();
    this.setState({ _id: localStorage._fhID });
    var userID = localStorage._fhID;

    console.log('==================== agenda ========================');
    axios
      .get(`/agendas/${userID}`)
      .then(response => {
        this.setState({
          agenda: response.data.agenda[0],
          lat: response.data.lat,
          lng: response.data.lng
        });
      })
      .catch(error => {
        console.log('get user error ');
      });

    this.setState({ agendaLoaded: true });
  }

  agendaDate(today) {
    //props.profileData.date

    today = new Date(today);

    var dayFmt = {
      weekday: 'long'
    };

    var dateFmt = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };

    return renderHTML(
      `<span className="bold">${today.toLocaleDateString(
        'en-US',
        dayFmt
      )}</span> ${today.toLocaleDateString('en-US', dateFmt)}`
    );
  }

  render() {
    console.log('data', this.state.data);
    console.log('current login id ', this.state._id);
    console.log('agenda ', this.state.agenda.name);
    console.log('weather ', this.state.weatherSummary);
    return (
      <section className="bg-wrapper">
        {/* <pre>{JSON.stringify(this.state.profile, undefined, 2)}</pre> */}
        <div className="container box" id="agenda">
          <div className="row">
            <UserAgendaSidebar />
            <UserAgendaInfo
              profileData={this.state.agenda}
              todayIs={this.agendaDate}
            />
            <UserAgendaDetails
              agendaData={this.state.agenda}
              todayIs={this.agendaDate}
            />
          </div>
        </div>
      </section>
    );
  }
}
export default UserAgenda;
