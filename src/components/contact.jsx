import React from 'react';
import '../assets/contact.css';

import { SocialIcon } from 'react-social-icons';

const Contact = () =>{
    return(
     
      

<section id="contact">
  <h1 className="section-header">Contact</h1>
  <div className="contact-wrapper">
    {/* Left contact page */}
    <form id="contact-form" className="form-horizontal" role="form">
      <div className="form-group">
        <div className="col-sm-12">
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="NAME"
            name="name"
            defaultValue=""
            required=""
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
            name="email"
            defaultValue=""
            required=""
          />
        </div>
      </div>
      <textarea
        className="form-control"
        rows={10}
        placeholder="MESSAGE"
        name="message"
        required=""
        defaultValue={""}
      />
      <button
        className="btn btn-primary send-button"
        id="submit"
        type="submit"
        value="SEND"
      >
        <div className="alt-send-button">
          <i className="fa fa-paper-plane" />
          <span className="send-text">SEND</span>
        </div>
      </button>
    </form>
    {/* Left contact page */}
    <div className="direct-contact-container">
      <ul className="contact-list">
        <li className="list-item">
          <i className="fa fa-map-marker fa-2x">
            <span className="contact-text place">Coimbatore,Tamil Nadu</span>
          </i>
        </li>
        <li className="list-item">
          <i className="fa fa-phone fa-2x">
            <span className="contact-text phone">
              <a href="tel:1-212-555-5555" title="Give me a call">
                67898 23456
              </a>
            </span>
          </i>
        </li>
        <li className="list-item">
          <i className="fa fa-envelope fa-2x">
            <span className="contact-text gmail">
              <a href="mailto:#" title="Send me an email">
                pabilalitha@gmail.com
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
   };
  export default Contact;