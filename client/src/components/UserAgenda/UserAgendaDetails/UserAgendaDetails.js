import React from 'react';
import renderHTML from 'react-render-html';
import Iframe from 'react-iframe';

import Aux from './../../../hoc/Aux/Aux';
import css from './../userAgenda.css';
import axios from 'axios';

const userAgendaDetails = props => {
  console.log('userAgendaDetails ', props.agendaData);
  const VENUE_URL = `${props.agendaData.url}&output=embed`;

  return (
    <div className="col-lg-5 col-md-12 col-sm-12 main-content animated fadeIn">
      <h2 className="con-text">{props.todayIs(props.agendaData.date)}</h2>
      <div id="weather-div">
        <div class="col-lg-2">
          <canvas
            id="clear-day"
            alt={props.agendaData.weatherIcon}
            width="64"
            height="64"
          />
        </div>
        <div className="col-lg-10">{props.agendaData.weatherSummary}</div>
      </div>

      <div className="row">
        <div className="col-lg-7  store-info">
          <h5 className="store-name">{props.agendaData.name}</h5>
          {/* <h6 className="store-sub-name">{props.agendaData.name}</h6> */}
          <address className="store-add add-top">
            {props.agendaData.formatted_address}
          </address>
        </div>

        <div className="col-lg-5">
          <p className="phone">
            <i className="fas fa-phone" />{' '}
            {props.agendaData.formatted_phone_number}
          </p>
          <p className="website">
            <i className="fas fa-globe" />{' '}
            <a href={props.agendaData.website} target="new">
              {props.agendaData.name}
            </a>
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12 map">
          <Iframe
            url={VENUE_URL}
            height="360px"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default userAgendaDetails;
