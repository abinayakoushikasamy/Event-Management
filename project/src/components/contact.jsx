import React, { useState } from 'react';
import Axios from 'axios';
import '../assets/contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await Axios.post('http://localhost:8080/contacts/act', {
        name,
        email,
        message,
      });
      console.log(response.data);
      setSubmitting(false);
      setSubmitSuccess(true);
      // Clear input fields after successful submission
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitting(false);
      setSubmitError('Error sending message');
    }
  };

  return (
    <section id="contact">
      <h1 className="section-header">Contact</h1>
      <div className="contact-wrapper">
        {/* Left contact page */}
        <form
          id="contact-form"
          className="form-horizontal"
          role="form"
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <div className="col-sm-12">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="NAME"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="EMAIL"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <textarea
            className="form-control"
            rows={10}
            placeholder="MESSAGE"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button
            className="btn btn-primary send-button"
            id="submit"
            type="submit"
            disabled={submitting}
          >
            {submitting ? 'Submitting...' : 'SEND'}
          </button>
          {submitSuccess && <p className="submit-success">Message sent successfully!</p>}
          {submitError && <p className="submit-error">{submitError}</p>}
        </form>
        {/* Left contact page */}
        <div className="direct-contact-container">
          <ul className="contact-list">
            <li className="list-item">
              <i className="fa fa-map-marker fa-2x">
                <span className="contact-text place">Coimbatore, Tamil Nadu</span>
              </i>
            </li>
            <li className="list-item">
              <i className="fa fa-phone fa-2x">
                <span className="contact-text phone">
                  <a href="tel:1-212-555-5555" title="Give me a call">
                    6383363349
                  </a>
                </span>
              </i>
            </li>
            <li className="list-item">
              <i className="fa fa-envelope fa-2x">
                <span className="contact-text gmail">
                  <a href="mailto:#" title="Send me an email">
                    event@gmail.com
                  </a>
                </span>
              </i>
            </li>
          </ul>
          <hr />
         
          <hr />
          <div className="copyright">© ALL OF THE RIGHTS RESERVED</div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
