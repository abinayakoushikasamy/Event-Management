import React, { useState } from 'react';
import axios from 'axios';
import '../assets/eventform1.css';

const EventForm1 = () => {
  const [events, setEvents] = useState([]);
  const [formData, setFormData] = useState({
    id: null,
    name: '',
    age: '',
    eventType: '',
    date: '',
    foods: '',
    peopleCount: '',
    decorationTheme: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddEvent = async () => {
    try {
      if (
        formData.name &&
        formData.age &&
        formData.eventType &&
        formData.date &&
        formData.foods &&
        formData.peopleCount &&
        formData.decorationTheme
      ) {
        if (formData.id === null) {
          // Add new event
          const response = await axios.post('http://localhost:8080/events/addss', formData);
          setEvents([...events, response.data]);
        }

        setFormData({
          id: null,
          name: '',
          age: '',
          eventType: '',
          date: '',
          foods: '',
          peopleCount: '',
          decorationTheme: '',
        });
      } else {
        alert('Please fill in all fields.');
      }
    } catch (error) {
      console.error('Error adding event:', error);
    }
  };

  return (
    <div className="event-form">
      <h1>Event Form</h1>

      <div className="form-container">
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} />

        <label>Age:</label>
        <input type="text" name="age" value={formData.age} onChange={handleInputChange} />

        <label>Event Type:</label>
        <input type="text" name="eventType" value={formData.eventType} onChange={handleInputChange} />

        <label>Date:</label>
        <input type="text" name="date" value={formData.date} onChange={handleInputChange} />

        <label>Foods:</label>
        <input type="text" name="foods" value={formData.foods} onChange={handleInputChange} />

        <label>People Count:</label>
        <input type="text" name="peopleCount" value={formData.peopleCount} onChange={handleInputChange} />

        <label>Decoration Theme:</label>
        <input
          type="text"
          name="decorationTheme"
          value={formData.decorationTheme}
          onChange={handleInputChange}
        />

        <button onClick={handleAddEvent}>{formData.id ? 'Update Event' : 'Add Event'}</button>
      </div>

      <div className="events-list">
        <h2>Events List</h2>
        {events.map((event) => (
          <div key={event.id} className="event-item">
            <div>
              <strong>Name:</strong> {event.name}
            </div>
            <div>
              <strong>Age:</strong> {event.age}
            </div>
            <div>
              <strong>Event Type:</strong> {event.eventType}
            </div>
            <div>
              <strong>Date:</strong> {event.date}
            </div>
            <div>
              <strong>Foods:</strong> {event.foods}
            </div>
            <div>
              <strong>People Count:</strong> {event.peopleCount}
            </div>
            <div>
              <strong>Decoration Theme:</strong> {event.decorationTheme}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventForm1;
