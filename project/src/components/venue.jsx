import React, { useState } from 'react';
import Axios from 'axios'; // Import Axios for making HTTP requests
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

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      // Make a POST request to your backend endpoint
      const response = await Axios.post('http://localhost:8080/venues/type', formData);
      console.log(response.data);
      console.log('Venue added successfully');
      // Update the venues list with the newly added venue
      setVenues([...venues, response.data]);
      // Reset form data
      setFormData({
        id: null,
        name: '',
        address: '',
        capacity: '',
        notes: '',
      });
    } catch (error) {
      console.error('Error adding venue:', error);
      // Handle error state or show error message to the user
    }
  };

  const handleEditVenue = (venue) => {
    setFormData({ ...venue });
  };

  const handleDeleteVenue = async (id) => {
    try {
      // Make a DELETE request to your backend endpoint
      await Axios.delete(`http://localhost:8080/venues/${id}`);
      console.log('Venue deleted successfully');
      // Update the venues list by filtering out the deleted venue
      const updatedVenues = venues.filter((venue) => venue.id !== id);
      setVenues(updatedVenues);
    } catch (error) {
      console.error('Error deleting venue:', error);
      // Handle error state or show error message to the user
    }
  };

  return (
    <div className="venue-details-form">
      <h1>Venue Details Form</h1>

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label>Venue Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} />

          <label>Address:</label>
          <input type="text" name="address" value={formData.address} onChange={handleInputChange} />

          <label>Capacity:</label>
          <input type="text" name="capacity" value={formData.capacity} onChange={handleInputChange} />

          <label>Notes:</label>
          <textarea name="notes" value={formData.notes} onChange={handleInputChange} />

          <button type="submit">{formData.id ? 'Update Venue' : 'Add Venue'}</button>
        </form>
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
