// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Axios from 'axios';
import '../assets/invitation.css';

const Invitation = () => {
  const [isEditing, setEditing] = useState(false);
  const [editedContent, setEditedContent] = useState({
    title: 'Birthday Party',
    description: 'You\'re invited to a fantastic birthday celebration! Join us for a day full of joy, laughter, and unforgettable moments.',
    date: 'September 15, 2022',
    time: '7:00 PM',
    venue: '[Birthday Venue]',
  });

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = async () => {
    setEditing(false);

    try {
      // Send edited content to your backend API for saving
      const response = await Axios.post('http://localhost:8080/invitations/adds', editedContent);
      console.log(response.data);
      // Handle the response as needed (e.g., show a success message)
    } catch (error) {
      console.error('Error saving invitation:', error);
      // Handle the error (e.g., display an error message)
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedContent({ ...editedContent, [name]: value });
  };

  return (
    <div className="party-invitation" style={{ backgroundImage: `url('https://cdn.pixabay.com/photo/2017/07/15/20/28/wall-2507623_640.jpg')` }}>
      <h1>Party Invitation</h1>

      <div className={`invitation-card ${isEditing ? 'editing' : ''}`}>
        <h2>{editedContent.title}</h2>
        {isEditing ? (
          <div className="edit-form">
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={editedContent.title}
              onChange={handleInputChange}
            />

            <label>Description:</label>
            <textarea
              name="description"
              value={editedContent.description}
              onChange={handleInputChange}
            />

            <label>Date:</label>
            <input
              type="text"
              name="date"
              value={editedContent.date}
              onChange={handleInputChange}
            />

            <label>Time:</label>
            <input
              type="text"
              name="time"
              value={editedContent.time}
              onChange={handleInputChange}
            />

            <label>Venue:</label>
            <input
              type="text"
              name="venue"
              value={editedContent.venue}
              onChange={handleInputChange}
            />
          </div>
        ) : (
          <>
            <p>{editedContent.description}</p>
            <p>Date: {editedContent.date}</p>
            <p>Time: {editedContent.time}</p>
            <p>Venue: {editedContent.venue}</p>
          </>
        )}

        {isEditing ? (
          <button onClick={handleSave}>Save</button>
        ) : (
          <button onClick={handleEdit}>Edit</button>
        )}
      </div>
    </div>
  );
};

export default Invitation;
