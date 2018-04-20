import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, NavLink, Link, Switch } from 'react-router-dom';

// local imports

import UserSignup from '../../UserSignup/UserSignup';
import HomePage from '../../HomePage/HomePage';
import Navigation from '../../Navigation/Navigation';
import Footer from '../../Footer/Footer';

class FridayHeroBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          {/* <Navigation /> */}
          <Route exact path="/" component={HomePage} />
          <Route exact path="/user" component={UserSignup} />
          {/* <Footer /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default FridayHeroBuilder;
