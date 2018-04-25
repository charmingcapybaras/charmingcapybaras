const request = require('request');

exports.checkUser = function(request, response, next) {
  if (!request.session.user) {
    console.log('checkUser!!! ');
    next();
    // response.redirect(301, '/');
  } else {
    console.log('checkUser!!!!!! ');
    next();
  }
};

// newSession

exports.newSession = function(request, response, user) {
  return request.session.regenerate(function() {
    request.session.cookie.user = true;
    request.session.cookie._id = user._id;
    console.log('new session started ', request.session);
    request.session.user = true;
    return;
    // request.session.authenticated = true;
    // return response.redirect(301, '/');
  });
};
