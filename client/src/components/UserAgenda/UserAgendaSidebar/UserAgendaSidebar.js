import React from 'react';
import Aux from './../../../hoc/Aux/Aux';
import css from './../userAgenda.css';

const userAgendaSidebar = () => {
  return (
    <div className="col-lg-3 col-md-12 col-sm-12 navigation animated fadeIn">
      <a className="navbar-brand" href="#">
        Friday Hero
      </a>

      <ul className="nav flex-column margin-help agenda">
        <li className="nav-item-agenda">
          <a className="nav-link link-bg circle active-circle" href="#">
            My account
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link link-bg circle inactive-circle" href="#">
            Support
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link link-bg circle inactive-circle" href="#">
            Sign out
          </a>
        </li>
      </ul>

      <ul className="nav flex-column margin-help">
        <li className="nav-item">
          <a className="nav-link link-bg circle inactive-circle" href="#">
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link link-bg circle inactive-circle" href="#">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link link-bg circle inactive-circle" href="#">
            Privacy Policy
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link link-bg circle inactive-circle" href="#">
            Cookies
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link link-bg circle inactive-circle" href="#">
            Advertising
          </a>
        </li>
      </ul>
    </div>
  );
};

export default userAgendaSidebar;
