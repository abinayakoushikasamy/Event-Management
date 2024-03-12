// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import '../assets/welcome.css'; // Make sure to import your CSS file

const Welcome= () => {
    return(
      <>
      {/* Inspired by https://bert.house/en/*/}
      <div className="welcome-center">
        <h1>PARTYFY</h1>
        <div className="btn" >
          <a href="/login">User</a>
        </div>
        <div className="btn" >
          <a href="/admin">Admin</a>
        </div>
        </div>
    </>
    
   
  );
};

export default Welcome;