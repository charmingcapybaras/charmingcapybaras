exports.loggedIn = () => {
  if (localStorage._fhID) {
    return true;
  }
  return false;
};

exports.requireAuth = (nextState, replace) => {
  if (!this.loggedIn()) {
    return true;
  }
  return false;
};
