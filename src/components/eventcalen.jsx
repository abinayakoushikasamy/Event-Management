// EventCalendar.jsx
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import '../assets/eventcalen.css';

const EventCalendars = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [formData, setFormData] = useState({
    id: null,
    eventDescription: '',
  });

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddEvent = () => {
    if (formData.eventDescription) {
      const newEvent = {
        id: Date.now(),
        date: selectedDate,
        eventDescription: formData.eventDescription,
      };

      setEvents([...events, newEvent]);

      setFormData({
        id: null,
        eventDescription: '',
      });
    } else {
      alert('Please fill in the event description.');
    }
  };

  const handleEditEvent = (event) => {
    setSelectedDate(event.date);
    setFormData({ ...event });
  };

  const handleDeleteEvent = (id) => {
    const updatedEvents = events.filter((event) => event.id !== id);
    setEvents(updatedEvents);
  };

  return (
    <div className="event-calendar">
      <div className="calendar-container">
        <Calendar onChange={handleDateChange} value={selectedDate} />
      </div>

      <div className="event-details">
        <h2>Event Details</h2>
        <label>Event Description:</label>
        <input
          type="text"
          name="eventDescription"
          value={formData.eventDescription}
          onChange={handleInputChange}
        />
        <button onClick={handleAddEvent}>{formData.id ? 'Update Event' : 'Add Event'}</button>
      </div>

      <div className="events-list">
        <h2>Events List</h2>
        {events.map((event) => (
          <div key={event.id} className="event-item">
            <div>
              <strong>Date:</strong> {event.date.toDateString()}
            </div>
            <div>
              <strong>Event Description:</strong> {event.eventDescription}
            </div>
            <div>
              <button onClick={() => handleEditEvent(event)}>Edit</button>
              <button onClick={() => handleDeleteEvent(event.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendars;
