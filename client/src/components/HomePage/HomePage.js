import React from 'react';
import FooterForHome from './FooterForHome/FooterForHome';

const HomePage = () => (
  <div>
    <header className="bg-wrapper">
    <div className="container">
        <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="#">Friday Hero</a>
            <button className="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="main-nav">
              <ul className="nav navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">ABOUT <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">CONTACT</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">ADVERTISE</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link login" href="#">LOGIN</a>
                  </li>
              </ul>

            </div>
          </nav>
        </div>
      <div className="jumbotron">
        <div className="container">
          <div className="row">
            <div className="col-md-4" id="phone">
               <img src="img/phone1.png" className="mobile animate" />
            </div>
            <div className="col-md-8" id="header-text">
                    <h1 className="display-4">Do you have plans for Friday?</h1>
        <h3 className="animated fadeInUp delay-3">You do now.</h3>

        <h4 className="animated fadeInUp delay-4">Your fridays will no longer be wasted. We keep them fun and exciting.</h4>
        <p className="lead">
          <a className="btn btn-primary btn-lg signup btn-animated" href="#" role="button">SIGN UP TODAY</a>
        </p>
      </div>
        </div>
      </div>
    </div>
    </header>

    <div>
    <section id="intro" className="hidden">
    <div className="container">
       <div className="row">
            <div className="col-md-6 pitch-column">
                <h5 className="mini-title">BE THE HERO</h5>
                <h1 className="section-title">Friday Hero</h1>
                <h4 className="section-text">What are we doing this Friday, that questions comes up more than any other question.
                  The back and fourth of ideas. Friday Hero allows you to be just that the Hero.
                  You'll have your finger on the pulse of Friday night.</h4>
                  <a className="btn btn-primary btn-lg signup-section btn-animated" href="#" role="button">SIGN UP TODAY</a>
            </div>

            <div className="col-md-6 pitch-column">
                  <div className="row">
                  <div className="col-md-5 border-box">
                      <i className="fas fa-cogs center"></i>
                      <h4 className="box-text">User-Friendly</h4>
                  </div>
                  <div className="col-md-5 border-box">
                      <i className="fas fa-server center"></i>
                      <h4 className="box-text">Flexible API</h4>
                  </div>
                </div>
              <div className="row">
                  <div className="col-md-5 border-box">
                      <i className="fas fa-envelope center"></i>
                      <h4 className="box-text">Email Option</h4>
                  </div>
                  <div className="col-md-5 border-box">
                      <i className="fas fa-lock center"></i>
                      <h4 className="box-text">Security</h4>
                  </div>
               </div>
                </div>
              </div>
       </div>

  </section>
  </div>

  <section id="perks" className="hidden">
    <div className="container">
      <div className="row">
        <div className="col-md-6 pitch-column">
          <img src="img/features.jpg" className="img-thumbnail" alt="Cinque Terre" />
        </div>

        <div className="col-md-6 pitch-column">
          <h5 className="mini-title">MEMBERS BENEFIT</h5>
          <h1 className="section-title">Hero Perks</h1>
          <h4 className="section-text">We're constantly adding new features, from early notice of upcoming events to discounts on your favorite things.
            All delivered to you every Friday.
          </h4>
          <a className="btn btn-primary btn-lg signup-section btn-animated" href="#" role="button">SIGN UP TODAY</a>
        </div>
      </div>
    </div>
  </section>
  <FooterForHome />
  </div>
);

export default HomePage;
