import React from 'react';
import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCcVisa, FaCreditCard, FaCcMastercard, FaCcPaypal } from 'react-icons/fa';
import image from '../../assets/icons/final_white.png';

const Footer = () => {
  return (
    <div style={{ background: 'black' }}>
      <div className="container footer">
        <div className="footer-content pt-5 pb-3">
          <div className="row">
            <div className="col-lg-3 col-sm-6 mb-40">
              <div className="footer-widget">
                <div className="footer-logo">
                  <a href='/'><img src={image} className="img-fluid" alt="logo" /></a>
                </div>
                <div className="footer-text">
                  <p>Discover More, Spend Less – Local Deals Await!</p>
                </div>
                <div className="payment">
                  <div className="footer-widget-heading">
                    <h3>We Accept</h3>
                  </div>
                  <div className="card-area">
                    <FaCcVisa className="payment-icon" />
                    <FaCreditCard className="payment-icon" />
                    <FaCcMastercard className="payment-icon" />
                    <FaCcPaypal className="payment-icon" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 mb-50">
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
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 mb-50">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Categories</h3>
                </div>
                <ul className='footer-ul'>
                  <li><a href="/categories/food">Food</a></li>
                  <li><a href="/categories/accommodation">Accommodation</a></li>
                  <li><a href="/categories/homestore">Homestore</a></li>
                  <li><a href="/categories/beauty">Beauty</a></li>
                  <li><a href="/categories/activuty">Activity</a></li>
                  <li><a href="/categories/entertainment">Entertainment</a></li>
                  <li><a href="/categories/service">Service</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 mb-50">
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
              <div className="footer-social-icon">
                <div className="footer-widget-heading">
                  <h3>Follow us</h3>
                </div>
                <a href='/#'><i className="fab fa-facebook-f facebook-bg"></i></a>
                <a href='/#'><i className="fab fa-instagram instagram-bg"></i></a>
                <a href='/#'><i className="fab fa-twitter twitter-bg"></i></a>
                <a href='/#'><i className="fab fa-google-plus-g google-bg"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center mb-5">
            <div className="copyright-text">
              <p>Copyright &copy; 2024, All Right Reserved <a href="/contact">Local Deal</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;