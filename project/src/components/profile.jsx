import React, { useState } from 'react';
import '../assets/profile.css';

const Profile= () => {
  const [formData, setFormData] = useState({
    photo: '',
    name: '',
    age: '',
    phoneNumber: '',
    email: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    age: '',
    phoneNumber: '',
    email: '',
  });

  const [editMode, setEditMode] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear the corresponding error when the user starts typing
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const handlePhotoChange = (e) => {
    // Handle photo upload separately (you can add more logic for image validation)
    const file = e.target.files[0];
    setFormData({
      ...formData,
      photo: file,
    });
  };

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleCancelEdit = () => {
    setEditMode(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    const newErrors = {};
    if (!formData.name || formData.name.trim() === '') {
      newErrors.name = 'Please enter a valid name';
    }
    if (!formData.age || isNaN(formData.age) || parseInt(formData.age) <= 0) {
      newErrors.age = 'Please enter a valid age';
    }
    if (!formData.phoneNumber || !/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Please enter a valid 10-digit phone number';
    }
    if (
      !formData.email ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (Object.keys(newErrors).length > 0) {
      // Set errors and prevent form submission
      setErrors(newErrors);
    } else {
      // Proceed with further actions (e.g., submit to a server)
      setEditMode(false);
      console.log('User profile submitted:', formData);
    }
  };

  return (
    <div className="user-profile-form">
      <h1>User Profile</h1>

      <div className="profile-container">
        <div className="photo-container">
          {editMode ? (
            <label className="photo-label">
              Choose Photo:
              <input
                type="file"
                name="photo"
                accept="image/*"
                onChange={handlePhotoChange}
              />
            </label>
          ) : (
            <div className="profile-photo">
              {formData.photo ? (
                <img
                  src={URL.createObjectURL(formData.photo)}
                  alt="User"
                  className="photo-preview"
                />
              ) : (
                <span className="placeholder-text">No Photo</span>
              )}
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              disabled={!editMode}
            />
            <span className="error">{errors.name}</span>
          </label>

          <label>
            Age:
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Enter your age"
              required
              disabled={!editMode}
            />
            <span className="error">{errors.age}</span>
          </label>

          <label>
            Phone Number:
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
              disabled={!editMode}
            />
            <span className="error">{errors.phoneNumber}</span>
          </label>

          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              required
              disabled={!editMode}
            />
            <span className="error">{errors.email}</span>
          </label>

          {editMode ? (
            <div className="edit-buttons">
              <button type="submit">Save</button>
              <button type="button" onClick={handleCancelEdit}>
                Cancel
              </button>
            </div>
          ) : (
            <button type="button" onClick={handleEditClick}>
              Edit Profile
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Profile;
