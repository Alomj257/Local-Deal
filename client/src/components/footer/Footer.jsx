import React from 'react';
import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="footer-section col-md-12">
      <div className="container">
        <div className="footer-cta pt-5">
          <div className="row">
            <div className="col-md-4 mb-30">
              <div className="single-cta">
                <i className="fas fa-map-marker-alt"></i>
                <div className="cta-text">
                  <h4>Find us</h4>
                  <span>A 18 Floriskraal Street, <br />Groenvallei, Cape Town, 7530</span>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-30">
              <div className="single-cta">
                <i className="fas fa-phone"></i>
                <div className="cta-text">
                  <h4>Call us</h4>
                  <span>(081) 450-5226</span>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-30">
              <div className="single-cta">
                <i className="far fa-envelope-open"></i>
                <div className="cta-text">
                  <h4>Mail us</h4>
                  <span>russell@localdeal.co.za</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-content pt-5 pb-3">
          <div className="row col-md-12">
            <div className="col-md-6 mb-40 ">
              <div className="footer-widget">
                <div className="footer-social-icon">
                <div className="footer-widget-heading">
                  <h3>Follow Us</h3>
                </div>
                  <ul className="social_icon">
                    <li><a href='/#'><i className="fa-brands fa-facebook-f"></i></a></li>
                    <li><a href='/#'><i className="fa-brands fa-twitter"></i></a></li>
                    <li><a href='/#'><i className="fa-brands fa-instagram"></i></a></li>
                    <li><a href='/#'><i className="fa-brands fa-youtube"></i></a></li>
                  </ul>
                </div>
                <div className="footer-text">
                  <p>Discover More, Spend Less – Local Deals Await!</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-50">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Subscribe</h3>
                </div>
                <div className="footer-text mb-25">
                  <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                </div>
                <div className="subscribe-form">
                  <form action="/">
                    <input type="text" placeholder="Email Address" />
                    <button><i className="fab fa-telegram-plane"></i></button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 text-center text-lg-left">
              <div className="copyright-text">
                <p>Copyright &copy; 2024, All Right Reserved <a href="/contact">Local Deal</a></p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
              <div className="footer-menu">
                <ul>
                  <li><a href='/'>Home</a></li>
                  <li><a href='/terms'>Terms</a></li>
                  <li><a href='/privacy'>Privacy</a></li>
                  <li><a href='/policy'>Policy</a></li>
                  <li><a href='/contact'>Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
