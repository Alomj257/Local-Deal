import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ContactUs.css';
import { RingLoader } from 'react-spinners';
import Footer from '../../components/Footer/Footer';
import contactService from '../../services/contactService';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';



const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });


  const [submitting, setSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [modalTitle, setModalTitle] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSubmitting(true);
      await contactService.submitContactForm(formData);
      setModalTitle('Success');
      setModalMessage('Form submitted successfully!');
      setShowModal(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Failed to submit form:', error.message);
      setModalTitle('Error');
      setModalMessage('Failed to submit form. Please try again.');
      setShowModal(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } finally {
      setSubmitting(false);
    }
  };


  return (
    <>
      <div className="contact-area section-padding">
        <div className="container">
          <div className="row section-title text-center">
            <h1>Get in Touch</h1>
            <p>Discover More, Spend Less – Local Deals Await!</p>
          </div>

          <div className="row">
            <h4>#Let's Talk</h4>
            <div className="col-md-6">
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

            <div className="col-md-6">
              <div className="single_address">
                <i className="fa fa-map-marker"></i>
                <h4>Our Address</h4>
                <p>A 18 Floriskraal Street, Groenvallei, Cape Town, 7530</p>
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
                <i className="fa fa-clock"></i>
                <h4>Work Time</h4>
                <p>Mon - Fri: 08.00 - 18.00. <br />Sat - Sun: 10.00 - 14.00</p>
              </div>
            </div>
          </div>

          <div className="row pt-5 pb-5">
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

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header>
          <Modal.Title>
            {modalTitle === 'Success' ? (
              <FontAwesomeIcon icon={faCheckCircle} className="text-success" />
            ) : (
              <FontAwesomeIcon icon={faExclamationCircle} className="text-danger" />
            )}{' '}
            {modalTitle}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {submitting ? (
            <div className="text-center">
              <RingLoader color="#007bff" loading={true} size={100} />
              <p>Submitting...</p>
            </div>
          ) : (
            <>
              {modalTitle === 'Success' ? (
                <p>{modalMessage}</p>
              ) : (
                <p className="text-danger">{modalMessage}</p>
              )}
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          {submitting ? (
            <Button variant="secondary" disabled>
              Close
            </Button>
          ) : (
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          )}
        </Modal.Footer>
      </Modal>




      <Footer />
    </>
  );
}

export default ContactUs;
