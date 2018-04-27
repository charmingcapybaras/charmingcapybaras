// Navigation.js
import React from 'react';

const Navigation = props => {
  console.log(props.logged);
  console.log(props.topNav);
  const NAV_ITEMS = props.topNav.map(item => {
    return (
      <li key={item.id} className="nav-item active">
        <a className={item.attr} href={item.url}>
          {item.name} <span className="sr-only">(current)</span>
        </a>
      </li>
    );
  });

  let loginBtn = (
    <li className="nav-item active">
      <a className="nav-link login" href="/login">
        Login <span className="sr-only">(current)</span>
      </a>
    </li>
  );

  if (props.auth) {
    loginBtn = (
      <li className="nav-item active">
        <a className="nav-link login" href="/agenda">
          Agenda <span className="sr-only">(current)</span>
        </a>
      </li>
    );
  }

  console.log('is auth ', props.children);

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
        <ul className="nav navbar-nav ml-auto">
          {NAV_ITEMS}
          {loginBtn}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
