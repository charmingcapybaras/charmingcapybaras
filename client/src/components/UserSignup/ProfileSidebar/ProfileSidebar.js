import React from 'react';
const profileSidebar = props => {
  return (
  // ProfileSidebar {props.step} 
    <div className="col-lg-4 col-md-12 col-sm-12 navigation animated fadeIn">
          <a className="navbar-brand" href="#">Friday Hero</a>

          <ul className="nav flex-column margin-help">
            <li className="nav-item">
              <a className={props.step >= 1 ? "nav-link link-bg circle active-circle" : "nav-link link-bg circle inactive-circle"}>Your Profile</a>
            </li>
            <li className="nav-item">
              <a className={props.step >= 2  ? "nav-link link-bg circle active-circle" : "nav-link link-bg circle inactive-circle"}>Choose Experience</a>
            </li>
            <li className="nav-item">
              <a className={props.step >= 3 ? "nav-link link-bg circle active-circle" : "nav-link link-bg circle inactive-circle"}>Basic Info</a>
            </li>
            <li className="nav-item">
              <a className={props.step >= 4 ? "nav-link link-bg circle active-circle" : "nav-link link-bg circle inactive-circle"}>Interests</a>
            </li>
            <li className="nav-item">
              <a className={props.step >= 5 ? "nav-link link-bg circle active-circle" : "nav-link link-bg circle inactive-circle"} >Confirm</a>
            </li>
          </ul>
        </div>
        );
};

export default profileSidebar;
