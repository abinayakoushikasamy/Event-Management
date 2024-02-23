import React, { useState } from 'react';
import '../assets/feedback.css'; // Import your styles here

const Feedback= () => {
  return(

<>
  <div id="nav-container" />
  <section className="hero is-fullheight">
    <div className="hero-body">
      <div className="container">
        <div className="columns is-vcentered">
          <div id="main" className="column is-half is-centered has-nice-link">
            <h1 className="title is-2">Feedback</h1>
            <h2 className="title is-6">I appreciate your feedback 🙌</h2>
            <form
              id="feedback-form"
              action="https://formspree.io/heiswayi@nrird.xyz"
              method="post"
            >
              <input
                type="hidden"
                name="_next"
                defaultValue="https://heiswayi.nrird.com/feedback/?success"
              />
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input className="input is-medium" type="text" name="name" />
                </div>
              </div>
              <div className="field">
                <label className="label">Email*</label>
                <div className="control">
                  <input
                    className="input is-medium"
                    type="email"
                    name="email"
                    required=""
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Message*</label>
                <div className="control">
                  <textarea
                    className="textarea is-medium"
                    placeholder="I'm a human. Please be nice."
                    name="message"
                    minLength={20}
                    rows={7}
                    required=""
                    autofocus=""
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <button
                    className="button is-large is-primary is-info"
                    type="submit"
                  >
                    Send Feedback
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

  );
};

export default Feedback;
