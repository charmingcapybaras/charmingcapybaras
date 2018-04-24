import React from 'react';
import Aux from './../../../hoc/Aux/Aux';
import css from './../userAgenda.css';

import Iframe from 'react-iframe';

const userAgendaDetails = props => {
  // props.agenda.types.map((type, i) => {
  //   <span class="badge badge-pill badge-info">{type[i]}</span>;
  // });

  // console.log('type of', Object.keys(props.agenda.types));

  return (
    <div className="col-lg-5 col-md-12 col-sm-12 main-content animated fadeIn">
      <h2 className="con-text">
        <span className="bold">Friday</span> April 23rd!
      </h2>

      <div id="weather-div">
        <div className="row">
          <div className="col-lg-2">
            <i className="fas fa-sun" />
          </div>
          <div className="col-lg-10">
            <h4 className="weather">
              Todays weather will be Sunny with a high of 78 and a low of 58.
              Perfect weather for a night out in The Woodlands
            </h4>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-7  store-info">
          <h5 className="store-name">{props.agenda.name}</h5>
          <h6 className="store-sub-name" />
          <address className="store-add add-top">
            {props.agenda.formatted_address}
          </address>
        </div>

        <div className="col-lg-5">
          <p className="phone">
            <i className="fas fa-phone" /> {props.agenda.formatted_phone_number}
          </p>
          <p className="website">
            <i className="fas fa-globe" /> {props.agenda.website}
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12 map">
          <Iframe
            url="https://maps.google.com/maps?q=30.2097673,-95.52655360000001&hl=es;z=14&output=embed&origin=PapaJons"
            height="330px"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"
            allowFullScreen
          />
        </div>

        {/* <div className="col-lg-4 map">
          <a className="link-box back-btn" href="#">
            <i className="fas fa-map-marker-alt" /> Location
          </a>
          <a className="link-box back-btn" href="#">
            <i className="fas fa-clipboard-check" /> Reserve
          </a>
          <a className="link-box back-btn" href="#">
            <i className="fas fa-share-alt" /> Share
          </a>
          <a className="link-box back-btn" href="#">
            <i className="fas fa-smile" /> Rate
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default userAgendaDetails;
