import React from 'react';
import Footer from './../Footer/Footer';
import Navigation from './../Navigation/Navigation';
import Jumbotron from './Jumbotron/Jumbotron';
import Aux from './../../hoc/Aux/Aux';
import css from './homepage.css';

const HomePage = props => {
  console.log('main nav ', props.navigation);
  return (
    <Aux>
      <header className="bg-wrapper">
        <div className="container">
          <Navigation topNav={props.navigation} auth={props.auth} />
        </div>
        <Jumbotron />
      </header>

      <div>
        <section id="intro" className="hidden">
          <div className="container">
            <div className="row">
              <div className="col-md-6 pitch-column">
                <h5 className="mini-title">BE THE HERO</h5>
                <h1 className="section-title">Friday Hero</h1>
                <h4 className="section-text">
                  What are we doing this Friday, that questions comes up more
                  than any other question. The back and fourth of ideas. Friday
                  Hero allows you to be just that the Hero. You'll have your
                  finger on the pulse of Friday night.
                </h4>
                <a
                  className="btn btn-primary btn-lg signup-section btn-animated"
                  href="/signup"
                  role="button"
                >
                  SIGN UP TODAY
                </a>
              </div>

              <div className="col-md-6 pitch-column">
                <div className="row">
                  <div className="col-md-5 border-box">
                    <i className="fas fa-cogs center" />
                    <h4 className="box-text">User-Friendly</h4>
                  </div>
                  <div className="col-md-5 border-box">
                    <i className="fas fa-server center" />
                    <h4 className="box-text">Flexible API</h4>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-5 border-box">
                    <i className="fas fa-envelope center" />
                    <h4 className="box-text">Email Option</h4>
                  </div>
                  <div className="col-md-5 border-box">
                    <i className="fas fa-lock center" />
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
              <img
                src="/img/features.jpg"
                className="img-thumbnail"
                alt="Cinque Terre"
              />
            </div>

            <div className="col-md-6 pitch-column">
              <h5 className="mini-title">MEMBERS BENEFIT</h5>
              <h1 className="section-title">Hero Perks</h1>
              <h4 className="section-text">
                We're constantly adding new features, from early notice of
                upcoming events to discounts on your favorite things. All
                delivered to you every Friday.
              </h4>
              <a
                className="btn btn-primary btn-lg signup-section btn-animated"
                href="/signup"
                role="button"
              >
                SIGN UP TODAY
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer bottomNav={props.navigation} />
    </Aux>
  );
};

export default HomePage;
