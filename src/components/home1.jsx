

// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../assets/home1.css';

const Home1 = () => {
  return (
    <div className="admin-container">
    

    <aside className="sidebar">
      {/* Sidebar content goes here */}
      <ul>
        <br>
        </br>
        <li><a href="/home">Dashboard</a></li>
        <br></br>
        <li><a href="/eventform1">Event Form</a></li>
        <br></br>
        <li><a href="/invitation">Invitation</a></li>
        <br></br>
        <li><a href="/venue">Venue</a></li>
        <br></br>
        <li><a href="/">Logout</a></li>
      </ul>
    </aside>

    <main className="main-content">
      {/* Main content goes here */}
      <h2>                 Welcome to the Admin - PARTYFY</h2>
    </main>
  </div>
  );
};

export default Home1;
