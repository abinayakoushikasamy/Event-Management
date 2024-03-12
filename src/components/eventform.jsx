// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import '../assets/eventform.css';

const EventForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    eventType: '',
    date: '',
    food: '',
    peopleCount: '',
    decorationTheme: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform further actions with the form data here
    console.log(formData);
  };

  return (
    <div className="event-form">
      <h1>Event Registration Form</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>

        <label>
          Age:
          <input type="text" name="age" value={formData.age} onChange={handleChange} required />
        </label>

        <label>
          Event Type:
          <input type="text" name="eventType" value={formData.eventType} onChange={handleChange} required />
        </label>

        <label>
          Date:
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        </label>

        <label>
          Food Choices:
          <textarea name="food" value={formData.food} onChange={handleChange}></textarea>
        </label>

        <label>
          Number of People:
          <input type="number" name="peopleCount" value={formData.peopleCount} onChange={handleChange} />
        </label>

        <label>
          Decoration Theme:
          <input type="text" name="decorationTheme" value={formData.decorationTheme} onChange={handleChange} />
        </label>

        <button type="submit">Submit</button>
      </form>

      <div className="form-view">
        <h2>Your Event Details:</h2>
        <p>Name: {formData.name}</p>
        <p>Age: {formData.age}</p>
        <p>Event Type: {formData.eventType}</p>
        <p>Date: {formData.date}</p>
        <p>Food Choices: {formData.food}</p>
        <p>Number of People: {formData.peopleCount}</p>
        <p>Decoration Theme: {formData.decorationTheme}</p>
      </div>
    </div>
  );
};

export default EventForm;
