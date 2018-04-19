import React from 'react';

const FooterForHome = () => {
  return (
    <div>

    <div id="f-links">
        <ul class="nav justify-content-center">
            <li class="nav-item">
              <a class="nav-link active" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Advertise</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Login</a>
              </li>

              <li class="nav-item">
                  <a class="nav-link" href="#">Sign Up</a>
                </li>
          </ul>
        </div>

          <div id="social">
              <ul class="nav justify-content-center">
                  <li class="nav-item">
                    <a class="nav-link active" href="#"><i class="fab fa-facebook-f"></i></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#"><i class="fab fa-twitter"></i> </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#"><i class="fab fa-instagram"></i> </a>
                  </li>
                </ul>
          </div>

          <p>© 2018 All Right Reverved by Charming Capybaras</p>
    </div>

  )
};

export default FooterForHome;