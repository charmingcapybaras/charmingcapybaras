import React from 'react';
import registration from '../registration';

const profileSidebar = props => {
  return (
  // ProfileSidebar {props.step} 
    <div className="col-lg-4 col-md-12 col-sm-12 navigation animated fadeIn">
          <a className="navbar-brand" href="#">Friday Hero</a>

     <ul className="nav flex-column margin-help">
     { 
       registration.map((item, index) => {
         return (
             <li className="nav-item">
              <a className={props.step === index ? "nav-link link-bg circle active-circle" : "nav-link link-bg circle inactive-circle"}>{item.instruction} </a>
            </li>
          );
       })
     }
        
        </ul>

        </div>
        );
};

export default profileSidebar;
