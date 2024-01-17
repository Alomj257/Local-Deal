import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPhone, FaEnvelope, FaHandshake, FaMapMarkerAlt, FaLifeRing } from 'react-icons/fa';
import { FiGlobe } from 'react-icons/fi';
import './ContactUs.css';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace the following log with your actual form submission logic
    console.log("Form submitted!", formData);
    // Reset the form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container">
      <div className="row col-sm-12 row text-center">
        <div className="col-sm-4">
          <div className="contact-detail-box">
            <FaHandshake className="bi-3x text-colored" />
            <h4>Get In Touch</h4>
            <p>
              <FaPhone /> (081) 450-5226
            </p>
            <p>
              <FaEnvelope />{' '}
              <a href="mailto:russell@localdeal.co.za" className="text-muted">
                russell@localdeal.co.za
              </a>
            </p>
          </div>
        </div>

        <div className="col-sm-4">
          <div className="contact-detail-box">
            <FaMapMarkerAlt className="bi-3x text-colored" />
            <h4>Our Location</h4>
            <address>
              A 18 Floriskraal Street<br />
              Groenvallei, Cape Town, 7530
            </address>
          </div>
        </div>

        <div className="col-sm-4">
          <div className="contact-detail-box">
            <FaLifeRing className="bi-3x text-colored" />
            <h4>24x7 Support</h4>
            <p>Industry's standard text</p>
            <p>
              <FiGlobe /> {' '}
              <a href="https://www.localdeal.com" className="text-muted">
                www.localdeal.com
              </a>
            </p>

          </div>
        </div>
      </div>

      <div className="row col-sm-12 pt-5 pb-5">
        <div className="col-sm-6 pb-5">
          <div className="contact-map">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6623.73491381045!2d18.6598440506238!3d-33.89306725020992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5103c4b68c7f%3A0xaba7cecacdb84bc2!2sGroenvallei%2C%20Cape%20Town%2C%207530%2C%20South%20Africa!5e0!3m2!1sen!2sin!4v1705517005957!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="col-sm-6 pb-5">
          <form className="form-main" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="5"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
