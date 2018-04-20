// Navigation.js
import React from 'react';
import Aux from './../../hoc/Aux/Aux';

const Navigation = props => {
  // TODO: add this to state of parent application

  // <li>
  //   <a href={item.url} key={item.id}>
  //     {item.name}
  //   </a>
  // </li>

  const elements = [
    { id: 1, name: 'About', url: '/', attr: '' },
    { id: 2, name: 'Contact', url: '/user', attr: '' },
    { id: 2, name: 'Advertise', url: '/user', attr: '' },
    { id: 2, name: 'Login', url: '/login', attr: 'login' }
  ];
  //const navigation = elements.map(item => {
  return (
    <Aux>
      <a className="navbar-brand" href="/">
        Friday Hero
      </a>
      <button
        className="navbar-toggler navbar-dark"
        type="button"
        data-toggle="collapse"
        data-target="#main-nav"
        aria-controls="main-nav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="main-nav">
        <ul className="nav navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              ABOUT <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              CONTACT
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              ADVERTISE
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link login" href="#">
              LOGIN
            </a>
          </li>
        </ul>
      </div>
    </Aux>
  );
  // });

  return <nav className="navbar navbar-expand-lg">{navigation}</nav>;
};

export default Navigation;
