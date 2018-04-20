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
    this.state = {
      navigation: [
        { id: 1, name: 'About', url: '/about', attr: 'nav-link ' },
        { id: 2, name: 'Contact', url: '/contact', attr: 'nav-link ' },
        { id: 3, name: 'Advertise', url: '/advertise', attr: 'nav-link ' },
        { id: 4, name: 'Login', url: '/login', attr: 'nav-link login' }
      ]
    };
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          {/* <Navigation /> */}
          <Route
            exact
            path="/"
            render={props => <HomePage navigation={this.state.navigation} />}
          />
          <Route exact path="/user" component={UserSignup} />
          {/* <Footer /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default FridayHeroBuilder;
