import React from 'react';
const sidebar = () => {
  return (
    <div className="col-lg-4 col-md-12 col-sm-12 navigation animated fadeIn">
      <a className="navbar-brand" href="#">
        Friday Hero
      </a>

      <h4 className="promo">Be a Friday Hero</h4>

      <ul className="nav flex-column">
        <li className="nav-item">
          <a className="nav-link active">
            Receive your weekly Friday Hero agenda
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Personalize your Friday experiences</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">
            No more wonering what to do with your friends on Friday
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link">
            Make reservations, buy concert tickets and more
          </a>
        </li>
      </ul>
    </div>
  );
};

export default sidebar;