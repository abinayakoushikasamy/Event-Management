// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../assets/eventcal.css';

const EventCalendar = () => {
 return(
  <ul className="card-list">
  <li className="card">
    <a
      className="card-image"
      href="https://www.pexels.com/photo/child-wearing-party-hat-sitting-on-a-stool-7600221/"
      target="_blank"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/7600221/pexels-photo-7600221.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=100)"
      }}
      data-image-full="https://images.pexels.com/photos/7600221/pexels-photo-7600221.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500&w=500"
    >
      <img
        src="https://images.pexels.com/photos/7600221/pexels-photo-7600221.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=100"
        alt="Psychopomp"
      />
    </a>
    <a
      className="card-description"
      href="https://www.pexels.com/photo/child-wearing-party-hat-sitting-on-a-stool-7600221/"
      target="_blank"
    >
      <h2>BIRTHDAY PARTY</h2>
      
    </a>
  </li>
  <li className="card">
    <a
      className="card-image"
      href="https://www.pexels.com/photo/family-celebrating-a-birthday-4262417/"
      target="_blank"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/4262417/pexels-photo-4262417.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=100)"
      }}
      data-image-full="https://images.pexels.com/photos/4262417/pexels-photo-4262417.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500&w=500"
    >
      <img
        src="https://images.pexels.com/photos/4262417/pexels-photo-4262417.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=100"
        alt="let's go"
      />
    </a>
    <a
      className="card-description"
      href="https://www.pexels.com/photo/family-celebrating-a-birthday-4262417/"
      target="_blank"
    >
      <h2>MARRIAGE </h2>
     
    </a>
  </li>
  <li className="card">
    <a
      className="card-image"
      href="https://www.pexels.com/photo/women-blowing-a-birthday-cake-together-7336964/"
      target="_blank"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/7336964/pexels-photo-7336964.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=100)"
      }}
      data-image-full="https://images.pexels.com/photos/7336964/pexels-photo-7336964.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500&w=500"
    >
      <img
        src="https://images.pexels.com/photos/7336964/pexels-photo-7336964.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=100"
        alt="The Beautiful Game"
      />
    </a>
    <a
      className="card-description"
      href="https://www.pexels.com/photo/women-blowing-a-birthday-cake-together-7336964/"
      target="_blank"
    >
      <h2>BACHELOR PARTY</h2>

    </a>
  </li>
  <li className="card">
    <a
      className="card-image"
      href="https://www.pexels.com/photo/a-group-of-friends-celebrating-5804894/"
      target="_blank"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/5804894/pexels-photo-5804894.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=100)"
      }}
      data-image-full="https://images.pexels.com/photos/5804894/pexels-photo-5804894.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500&w=500"
    >
      <img
        src="https://images.pexels.com/photos/5804894/pexels-photo-5804894.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=100"
        alt="Jane Doe"
      />
    </a>
    <a
      className="card-description"
      href="https://www.pexels.com/photo/a-group-of-friends-celebrating-5804894/"
      target="_blank"
    >
      <h2>SPORTS DAY</h2>
    
    </a>
  </li>
</ul>

  );
};

export default EventCalendar;
