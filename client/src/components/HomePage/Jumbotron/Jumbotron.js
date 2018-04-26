import React from 'react';

const jumbotron = () => {
  return (
    <div className="jumbotron">
      <div className="container">
        <div className="row">
          <div className="col-md-4" id="phone">
            <img src="img/phone1.png" className="mobile animate" />
          </div>
          <div className="col-md-8" id="header-text">
            <h1 className="display-4">Do you have plans for Friday?</h1>
            <h3 className="animated fadeInUp delay-3">You do now.</h3>

            <h4 className="animated fadeInUp delay-4">
              Your fridays will no longer be wasted. We keep them fun and
              exciting.
            </h4>
            <p className="lead">
              <a
                className="btn btn-primary btn-lg signup btn-animated"
                href="/signup"
                role="button"
              >
                SIGN UP TODAY
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default jumbotron;
