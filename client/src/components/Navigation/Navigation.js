// Navigation.js
import React from 'react';

const Navigation = props => {
  const NAV_ITEMS = props.topNav.map(item => {
    return (
      <li key={item.id} className="nav-item active">
        <a className={item.attr} href={item.url}>
          {item.name} <span className="sr-only">(current)</span>
        </a>
      </li>
    );
  });

  return (
    <nav className="navbar navbar-expand-lg">
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
        <ul className="nav navbar-nav ml-auto">{NAV_ITEMS}</ul>
      </div>
    </nav>
  );
};

export default Navigation;
