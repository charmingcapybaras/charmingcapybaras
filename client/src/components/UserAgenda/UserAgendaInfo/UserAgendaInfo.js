import React from 'react';
import Aux from './../../../hoc/Aux/Aux';

const userAgendaInfo = () => {
  return (
    <div className="col-lg-4 col-md-12 col-sm-12 side-content animated fadeIn">
      <h2 className="gen-text">
        <span className="pink">Daren</span> you're a hero!
      </h2>
      <h3 className="border-text">
        PUT YOUR CAPE ON AND TAKE OFF <span className="fly" />
      </h3>

      <h4 className="date">
        <span className="bold">Friday</span> April 23rd{' '}
      </h4>

      <h5 className="agenda pink">Restaurants</h5>
      <ul className="agenda-options">
        <li className="list-option">Last Concert Cafe</li>
        <li className="list-option">Mojo Cafe</li>
      </ul>

      <h5 className="agenda pink">Entertainment</h5>
      <ul className="agenda-options">
        <li className="list-option">Salad Head</li>
        <li className="list-option">Simon Twins</li>
        <li className="list-option">Edward Sharpie</li>
      </ul>

      <hr className="cross" />

      <h5 className="ads pink">SPONSORSHIP</h5>
      <p className="ads-text">
        This weekend is a homegame by the Houston Astros, get your tickets today
        and enjoy a day at the juicebox with the top down. www.ticketmaster.com
      </p>
    </div>
  );
};

export default userAgendaInfo;
