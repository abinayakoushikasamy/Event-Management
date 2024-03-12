import React, { useState } from 'react';
import '../assets/eventcal.css';

const EventCalendar = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState('');
  const [editEvent, setEditEvent] = useState(null);

  const handleAddEvent = () => {
    if (newEvent.trim() !== '') {
      setEvents([...events, { id: Date.now(), title: newEvent }]);
      setNewEvent('');
    }
  };

  const handleEditEvent = (event) => {
    setEditEvent(event);
    setNewEvent(event.title);
  };

  const handleUpdateEvent = () => {
    if (newEvent.trim() !== '') {
      setEvents(events.map((event) => (event.id === editEvent.id ? { ...event, title: newEvent } : event)));
      setNewEvent('');
      setEditEvent(null);
    }
  };

  const handleDeleteEvent = (id) => {
    setEvents(events.filter((event) => event.id !== id));
    setEditEvent(null);
  };

  return (
    <div className="event-calendar">
      <h1>Event Select</h1>
      <div className="event-form">
        <input
          type="text"
          placeholder="Enter event title"
          value={newEvent}
          onChange={(e) => setNewEvent(e.target.value)}
        />
        {editEvent ? (
          <button onClick={handleUpdateEvent}>Update Event</button>
        ) : (
          <button onClick={handleAddEvent}>Add Event</button>
        )}
      </div>
      <div className="event-list">
        {events.map((event) => (
          <div key={event.id} className="event-item">
            <span>{event.title}</span>
            <button onClick={() => handleEditEvent(event)}>Edit</button>
            <button onClick={() => handleDeleteEvent(event.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
