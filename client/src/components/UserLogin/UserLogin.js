import React, { Component } from 'react';
import Sidebar from './Sidebar/Sidebar';
import axios from 'axios';
// import util from './../../../../helpers/user-status';
import Input from './../../ui/Input/Input';
import css from './userLogin.css';

class UserLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'happ2y@home.com',
      password: 'happy2',
      username: 'Daren2'
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  componentDidMount() {
    // util.checkUser();
  }

  onChangeHandler(event) {
    console.log(event.target.name, event.target.value);
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state);
  }

  onSubmitHandler(event) {
    event.preventDefault();
    console.log('onSubmitHandler handler from userLogin');
    axios
      .post('/community/login', {
        email: this.state.email,
        password: this.state.password,
        username: this.state.username
      })
      .then(res => {
        console.log('response from database ', res.data.redirect);
        if (res.data.redirect === '/agenda') {
          window.location = '/agenda';
        } else if (res.data.redirect === '/login') {
          window.location = '/';
        }
      })
      .catch(err => {
        console.log('problem in user login', err);
        // window.location = '/agenda';
      });
  }
  render() {
    //TODO Move this into common component

    return (
      <section className="bg-wrapper">
        <div id="signup" className="container box">
          <div className="row">
            <Sidebar />
            <div className="col-lg-7 col-md-12 col-sm-12 content animated fadeIn">
              <h2 className="lead-txt">
                It's easy to start being a Friday Hero create your account
                today!
              </h2>

              <form className="fh-form">
                <div className="container">
                  <div className="form-group">
                    <div className="row">
                      <div className="col-md-12 col-sm-12">
                        <label htmlFor="fh-email">User Name:</label>
                        <input
                          onChange={this.onChangeHandler}
                          value={this.state.username}
                          type="fh-input"
                          className="form-control"
                          id="fh-input"
                          name="username"
                          aria-describedby="usernameHelp"
                          placeholder="User Name"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="row">
                      <div className="col-md-12 col-sm-12">
                        <label htmlFor="fh-email">Email address:</label>
                        <input
                          onChange={this.onChangeHandler}
                          value={this.state.email}
                          type="fh-email"
                          className="form-control"
                          id="fh-email"
                          name="email"
                          aria-describedby="emailHelp"
                          placeholder="Your email address.."
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="row">
                      <div className="form-group col-md-12 col-sm-12">
                        <label htmlFor="fh-pwd">Password:</label>
                        <input
                          onChange={this.onChangeHandler}
                          value={this.state.password}
                          name="password"
                          type="password"
                          className="form-control"
                          id="fh-pwd"
                          placeholder="Your preferred password.."
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 col-sm-12">
                      <p className="check-if-login">
                        Already a member?{' '}
                        <a href="#" className="underline">
                          Log-in
                        </a>
                      </p>
                    </div>
                    <div className="col-md-6 col-sm-12 text-right">
                      <button
                        onClick={this.onSubmitHandler}
                        type="button"
                        className="btn btn-primary sign-btn"
                      >
                        Sign Up
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default UserLogin;
