const request = require('request');

exports.checkUser = function(request, response, next) {
  if (!request.session.user) {
    console.log('checkUser!!! ', request.session.user);
    // response.redirect(301, '/');
  } else {
    console.log('checkUser!!!!!! ', request.session.user);
    next();
  }
};

// newSession

exports.newSession = function(request, response, user) {
  return request.session.regenerate(function() {
    console.log('new session started - util.newSession ', user);
    request.session.user = true;
    //request.session.authenticated = true;
    res.status(200);
  });
};
