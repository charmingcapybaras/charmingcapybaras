import React from 'react';
import Aux from './../../../hoc/Aux/Aux';
import css from './../userAgenda.css';

const userAgendaSidebar = () => {
  const navigation = [
    { id: 1, linkName: 'agenda', url: '/agenda', class: 'active' },
    { id: 2, linkName: 'support', url: '/support', class: null },
    { id: 3, linkName: 'log out', url: '/logout', class: null }
  ];

  const subNavigation = [
    { id: 4, linkName: 'contact', url: '/contact' },
    { id: 5, linkName: 'about', url: '/about' },
    { id: 6, linkName: 'privacy policy', url: '/privacy' },
    { id: 7, linkName: 'cookies', url: '/cookies' },
    { id: 8, linkName: 'adverstising', url: '/advertising' }
  ];
  return (
    <div className="col-lg-3 col-md-12 col-sm-12 navigation animated fadeIn">
      <a className="navbar-brand" href="/">
        Friday Hero
      </a>

      <ul className="nav flex-column margin-help agenda">
        {navigation.map(nav => {
          return (
            <li className="nav-item" key={nav.id}>
              <a
                className="nav-link link-bg circle inactive-circle"
                href={nav.url}
              >
                {nav.linkName}
              </a>
            </li>
          );
        })}
      </ul>

      <ul className="nav flex-column margin-help agenda">
        {subNavigation.map(nav => {
          return (
            <li className="nav-item" key={nav.id}>
              <a
                className="nav-link link-bg circle inactive-circle"
                href={nav.url}
              >
                {nav.linkName}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default userAgendaSidebar;
