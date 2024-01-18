import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ContactUs.css';
import Footer from '../../components/Footer/Footer';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!", formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <>
      <div className="contact-area section-padding">
        <div className="container">
          <div className="section-title text-center">
            <h1>Get in Touch</h1>
            <p>Discover More, Spend Less – Local Deals Await!</p>
          </div>

          <div className="row col-md-12">
            <h4>#Let's Talk</h4>
            <div className="col-lg-7">
              <div className="contact">
                <form className="form" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="form-group col-md-6">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="form-group col-md-12">
                      <input
                        type="text"
                        name="subject"
                        className="form-control"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="form-group col-md-12">
                      <textarea
                        rows="6"
                        name="message"
                        className="form-control"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                      ></textarea>
                    </div>
                    <div className="col-md-12 text-center">
                      <button
                        type="submit"
                        value="Send message"
                        name="submit"
                        className="btn btn-contact-bg"
                        title="Submit Your Message!"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="single_address">
                <i className="fa fa-map-marker"></i>
                <h4>Our Address</h4>
                <p>A 18 Floriskraal Street, Groenvallei,<br /> Cape Town, 7530</p>
              </div>
              <div className="single_address">
                <i className="fa fa-envelope"></i>
                <h4>Send your message</h4>
                <p>russell@localdeal.co.za</p>
              </div>
              <div className="single_address">
                <i className="fa fa-phone"></i>
                <h4>Call us on</h4>
                <p>(081) 450-5226</p>
              </div>
              <div className="single_address">
                <i className="fa fa-clock-o"></i>
                <h4>Work Time</h4>
                <p>Mon - Fri: 08.00 - 18.00. <br />Sat: 10.00 - 14.00</p>
              </div>
            </div>
          </div>
          <div className="col-md-12 pt-5 pb-5">
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
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;
