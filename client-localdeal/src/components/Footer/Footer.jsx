import React from 'react';
import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../../assets/icons/final_black.png';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-cta pt-5">
          <div className="row">
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="fas fa-map-marker-alt"></i>
                <div className="cta-text">
                  <h4>Find us</h4>
                  <span>Groenvallei, Cape Town</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <i className="fas fa-phone"></i>
                <div className="cta-text">
                  <h4>Call us</h4>
                  <span>(081) 450-5226</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
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
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 mb-40">
              <div className="footer-widget">
                <div className="footer-logo">
                  <a href='/'><img src={image} className="img-fluid" alt="logo" /></a>
                </div>
                <div className="footer-text">
                  <p>Discover More, Spend Less – Local Deals Await!</p>
                </div>
                <div className="footer-social-icon">
                  <span>Follow us</span>
                  <a href='/#'><i className="fab fa-facebook-f facebook-bg"></i></a>
                  <a href='/#'><i className="fab fa-twitter twitter-bg"></i></a>
                  <a href='/#'><i className="fab fa-google-plus-g google-bg"></i></a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Useful Links</h3>
                </div>
                <ul className='footer-ul'>
                  <li><a href="/">Home</a></li>
                  <li><a href="/promotion">Promotion</a></li>
                  <li><a href="/categories">Categories</a></li>
                  <li><a href="/about">About</a></li>
                  <li><a href="/contact">Contact</a></li>
                  {/* Add other links as needed */}
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
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
      <div className="copyright-area bg-light">
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
