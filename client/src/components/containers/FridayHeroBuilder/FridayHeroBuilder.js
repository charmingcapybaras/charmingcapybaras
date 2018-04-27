/*
  @authors: 
  @description:
*/

import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {
  BrowserRouter,
  Route,
  NavLink,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

// local imports

import UserSignup from '../../UserSignup/UserSignup';
import HomePage from '../../HomePage/HomePage';
import Navigation from '../../Navigation/Navigation';
import UserAgenda from '../../UserAgenda/UserAgenda';
import UserLogin from './../../UserLogin/UserLogin';
import Footer from '../../Footer/Footer';
import About from '../../About/About';
import Contact from '../../Contact/Contact';
import Advertise from '../../Advertise/Advertise';

class FridayHeroBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navigation: [
        { id: 1, name: 'About', url: '/about', attr: 'nav-link ' },
        { id: 2, name: 'Contact', url: '/contact', attr: 'nav-link ' },
        { id: 3, name: 'Advertise', url: '/advertise', attr: 'nav-link ' }
      ],
      auth: false
    };

    this.loggedIn = this.loggedIn.bind(this);
    this.requireAuth = this.requireAuth.bind(this);
    this.userLogout = this.userLogout.bind(this);
  }

  loggedIn() {
    if (localStorage._fhID) {
      return true;
    }
    return false;
  }

  requireAuth(nextState, replace) {
    if (!this.loggedIn()) {
      return true;
    }
    return false;
  }

  userLogout() {
    localStorage.removeItem('_fhID');
  }

  componentDidMount() {
    if (this.loggedIn()) {
      console.log('true logged in');
      this.setState({ auth: true });
    }
  }

  render() {
    console.log('this.state.auth', this.state.auth);
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <HomePage
                navigation={this.state.navigation}
                auth={this.state.auth}
              />
            )}
          />
          <Route exact path="/signup" component={UserSignup} />
          <Route exact path="/login" component={UserLogin} />
          <Route
            exact
            path="/logout"
            render={() =>
              this.userLogout() ? (
                <Redirect to="/" />
              ) : (
                <HomePage
                  navigation={this.state.navigation}
                  auth={this.state.auth}
                />
              )
            }
          />
          <Route
            exact
            path="/agenda"
            render={() =>
              this.requireAuth() ? <Redirect to="/login" /> : <UserAgenda />
            }
          />
          <Route
            exact
            path="/about"
            render={props => <About navigation={this.state.navigation} />}
          />
          <Route
            exact
            path="/contact"
            render={props => <Contact navigation={this.state.navigation} />}
          />
          <Route
            exact
            path="/advertise"
            render={props => <Advertise navigation={this.state.navigation} />}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default FridayHeroBuilder;
