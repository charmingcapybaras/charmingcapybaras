import React, {Component} from React;
import request from 'request';

class Authenticate extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  isLoggedIn(request, response, next) {
    if (!request.session.user) {
      console.log('checkUser!!! ', request.session.user);
      // response.redirect(301, '/');
    } else {
      console.log('checkUser!!!!!! ', request.session.user);
      next();
    }
  };

  render() {

  return (<div><h1>Authenticate</h1></div>)
  }
}

export default Authenticate;