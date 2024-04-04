import React from 'react';
import '../assets/home1.css';

const Home1 = () => {
  return (
    <div className="admin-container">
      <aside className="sidebar">
        <ul>
          <button  onClick={() => window.location.href="/home"}>Dashboard</button>
          <button  onClick={() => window.location.href="/eventform1"}>Event Form</button>
          <button onClick={() => window.location.href="/invitation"}>Invitation</button>
          <button onClick={() => window.location.href="/venue"}>Venue</button>
          <button onClick={() => window.location.href="/"}>Logout</button>
        </ul>
      </aside>
      <main className="main-content">
        <h2>Welcome to Admin - PARTYFY</h2>
      </main>
    </div>
  );
};

export default Home1;
