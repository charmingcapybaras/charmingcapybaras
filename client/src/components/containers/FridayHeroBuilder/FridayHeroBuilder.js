import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, NavLink, Link, Switch } from 'react-router-dom';

// local imports

import UserSignup from '../../UserSignup/UserSignup';
import HomePage from '../../HomePage/HomePage';
import Navigation from '../../Navigation/Navigation';
import UserAgenda from '../../UserAgenda/UserAgenda';
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
      ],
      authenticated: {
        loggedin: true,
        username: 'daren',
        _id: '5adabfd1f2bfe77049b70489'
      }
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
          <Route
            exact
            path="/agenda"
            render={props => (
              <UserAgenda authenticated={this.state.authenticated} />
            )}
          />
          {/* <Footer /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default FridayHeroBuilder;
