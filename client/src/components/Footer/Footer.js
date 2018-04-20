// Footer.js
import React from 'react';

const Footer = props => {
  return (
    <footer>
      <div id="f-links">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Advertise
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Login
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              Sign Up
            </a>
          </li>
        </ul>
      </div>

      <div id="social">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              <i className="fab fa-facebook-f" />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fab fa-twitter" />{' '}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <i className="fab fa-instagram" />{' '}
            </a>
          </li>
        </ul>
      </div>

      <p>© 2018 All Right Reverved by Charming Capybaras</p>
    </footer>
  );
};

export default Footer;
