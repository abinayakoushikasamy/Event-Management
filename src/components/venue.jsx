// VenueDetailsForm.jsx
import React, { useState } from 'react';
import '../assets/venue.css';

const Venue = () => {
  const [venues, setVenues] = useState([]);
  const [formData, setFormData] = useState({
    id: null,
    name: '',
    address: '',
    capacity: '',
    notes: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddVenue = () => {
    if (formData.name && formData.address && formData.capacity) {
      if (formData.id === null) {
        // Add new venue
        setVenues([...venues, { ...formData, id: Date.now() }]);
      } else {
        // Update existing venue
        const updatedVenues = venues.map((venue) =>
          venue.id === formData.id ? formData : venue
        );
        setVenues(updatedVenues);
      }

      setFormData({
        id: null,
        name: '',
        address: '',
        capacity: '',
        notes: '',
      });
    } else {
      alert('Please fill in all required fields.');
    }
  };

  const handleEditVenue = (venue) => {
    setFormData({ ...venue });
  };

  const handleDeleteVenue = (id) => {
    const updatedVenues = venues.filter((venue) => venue.id !== id);
    setVenues(updatedVenues);
  };

  return (
    <div className="venue-details-form">
      <h1>Venue Details Form</h1>

      <div className="form-container">
        <label>Venue Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} />

        <label>Address:</label>
        <input type="text" name="address" value={formData.address} onChange={handleInputChange} />

        <label>Capacity:</label>
        <input type="text" name="capacity" value={formData.capacity} onChange={handleInputChange} />

        <label>Notes:</label>
        <textarea name="notes" value={formData.notes} onChange={handleInputChange} />

        <button onClick={handleAddVenue}>{formData.id ? 'Update Venue' : 'Add Venue'}</button>
      </div>

      <div className="venues-list">
        <h2>Venues List</h2>
        {venues.map((venue) => (
          <div key={venue.id} className="venue-item">
            <div>
              <strong>Venue Name:</strong> {venue.name}
            </div>
            <div>
              <strong>Address:</strong> {venue.address}
            </div>
            <div>
              <strong>Capacity:</strong> {venue.capacity}
            </div>
            <div>
              <strong>Notes:</strong> {venue.notes}
            </div>
            <div>
              <button onClick={() => handleEditVenue(venue)}>Edit</button>
              <button onClick={() => handleDeleteVenue(venue.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Venue;
