import React from 'react';
import Aux from './../../../hoc/Aux/Aux';
import css from './../userAgenda.css';
const userAgendaDetails = () => {
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
          <h5 className="store-name">Last Concert Cafe</h5>
          <h6 className="store-sub-name">Tex-Mex</h6>

          <h6 className="store-add add-top"> 129 South Warehouse</h6>
          <h6 className="store-add"> The Woodlands, Texas 77382</h6>
        </div>

        <div className="col-lg-5">
          <p className="phone">
            <i className="fas fa-phone" /> 832-679-0998
          </p>
          <p className="website">
            <i className="fas fa-globe" /> www.lastconcertcafe.com
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-8 map" />

        <div className="col-lg-4 map">
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
        </div>
      </div>
    </div>
  );
};

export default userAgendaDetails;
