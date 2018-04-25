import React from 'react';
import Footer from './../Footer/Footer';
import Navigation from './../Navigation/Navigation';
import css from '../About/about.css';

const Contact = props => {
  console.log('PROPS ', props.navigation);
  return (<div>
    <header className="bg-wrapper">
    <div className="container">
        <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="/">Friday Hero</a>
            <button className="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="main-nav">
              <ul className="nav navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href={props.navigation[0].url}>ABOUT <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href={props.navigation[1].url}>CONTACT</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href={props.navigation[2].url}>ADVERTISE</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link login" href={props.navigation[3].url}>LOGIN</a>
                  </li>
              </ul>

            </div>
          </nav>
        </div>
    </header>

   <section id="main-page-content" className="animated fadeIn">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
        <h5 className="mini-title">WE WOULD LOVE TO HEAR FROM YOU</h5>
         <h1 className="section-title">{props.navigation[1].name}</h1>
         <p className="content-text">Contact Us At:</p>


       </div>
      </div>
      </div>
   </section>


  <section id="perks">
      <div className="container">
         <div className="row">
            <div className="col-md-6 pitch-column">
              <img src="img/features.jpg" className="img-thumbnail" alt="Cinque Terre" />
            </div>

              <div className="col-md-6 pitch-column">
                <h5 className="mini-title">MEMBERS BENEFIT</h5>
                <h1 className="section-title">Hero Perks</h1>
                <h4 className="section-text">We're constantly adding new features, from early notice of upcoming events to discounts on your favorite things.
                  All delivered to you every Friday.</h4>
                  <a className="btn btn-primary btn-lg signup-section btn-animated" href="#" role="button">SIGN UP TODAY</a>
              </div>
          </div>
        </div>
  </section>
  <Footer bottomNav={props.navigation} />
</div>)
}

export default Contact;