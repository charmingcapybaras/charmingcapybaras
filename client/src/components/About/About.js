import React from 'react';
import Footer from './../Footer/Footer';
import Navigation from './../Navigation/Navigation';
import css from './about.css';
import Aux from './../../hoc/Aux/Aux';

const About = props => {
  console.log('PROPS ', props.navigation);
  return (
    <Aux>
      <header className="bg-wrapper">
        <div className="container">
          <Navigation topNav={props.navigation} auth={props.auth} />
        </div>
      </header>

      <section id="main-page-content" className="animated fadeIn">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h5 className="mini-title">HOW WE STARTED</h5>
              <h1 className="section-title">{props.navigation[0].name}</h1>
              <p className="content-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>

              <p className="content-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>

              <p className="content-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>

              <p className="content-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="perks">
        <div className="container">
          <div className="row">
            <div className="col-md-6 pitch-column">
              <img
                src="img/features.jpg"
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
                href="#"
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

export default About;
