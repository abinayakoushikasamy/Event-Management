// Home.jsx

// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import '../assets/admin.css'; // Import the admin styles

const Admin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (inputEmail) => {
    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(inputEmail);
  };

  const validatePassword = (inputPassword) => {
    // Password should have a minimum length of 6 characters
    return inputPassword.length >= 6;
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage('Invalid email format. Please enter a valid email.');
      return;
    }

    if (!validatePassword(password)) {
      setErrorMessage('Password must be at least 6 characters long.');
      return;
    }

    // Replace these credentials with your specific login information
    const validEmail = 'abi@gmail.com';
    const validPassword = '123456';

    if (email === validEmail && password === validPassword) {
      // Successful login logic (redirect or other actions)
      alert('Login successful!');
    } else {
      setErrorMessage('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="admin-login-container"> {/* Use the admin-login-container class */}
      <div className="admin-form"> {/* Use the admin-form class */}
        <h2>Admin Login</h2>
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit"> <a href="/home1">Login</a></button>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default Admin;
