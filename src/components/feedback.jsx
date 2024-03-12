// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Axios from 'axios';
import '../assets/feedback.css';

const Feedback = () => {
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [submittedFeedback, setSubmittedFeedback] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    // Process the feedback
    const submittedData = {
      name,
      feedback,
      rating,
      email,
    };

    try {
      // Send feedback data to your backend API
      const response = await Axios.post('http://localhost:8080/feedback/add', submittedData);

      // Log the response from the backend (you can handle it as needed)
      console.log(response.data);

      // Display submitted feedback in the form
      setSubmittedFeedback(submittedData);

      // Reset form state
      setName('');
      setFeedback('');
      setRating(0);
      setEmail('');
      setEmailError('');
      setError('');
    } catch (error) {
      // Handle the error from the backend
      console.error('Error submitting feedback:', error);
      setError('Error submitting feedback. Please try again.'); // Set an error state
    }
  };

  return (
    <div className="feedback-form-container">
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="rating">Rating:</label>
          <div>
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={star <= rating ? 'star selected' : 'star'}
                onClick={() => setRating(star)}
              >
                *
              </span>
            ))}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError('');
            }}
            required
          />
          <span className="error-message">{emailError}</span>
        </div>

        <div className="form-group">
          <label htmlFor="feedback">Feedback:</label>
          <textarea
            id="feedback"
            name="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
          />
        </div>

        <button type="submit">Submit Feedback</button>
      </form>

      {error && <div className="error-message">{error}</div>}

      {submittedFeedback && (
        <div className="submitted-feedback">
          <h3>Submitted Feedback</h3>
          <p>Name: {submittedFeedback.name}</p>
          <p>Feedback: {submittedFeedback.feedback}</p>
          <p>Rating: {submittedFeedback.rating}</p>
          <p>Email: {submittedFeedback.email}</p>
        </div>
      )}
    </div>
  );
};

export default Feedback;
