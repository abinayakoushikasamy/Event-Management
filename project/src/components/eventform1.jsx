import React, { useState } from 'react';
import '../assets/eventform1.css';

const EventForm1 = () => {
  const [eventName, setEventName] = useState('');
  const [eventTiming, setEventTiming] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [peopleCount, setPeopleCount] = useState('');
  const [amount, setAmount] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'eventName':
        setEventName(value);
        break;
      case 'eventTiming':
        setEventTiming(value);
        break;
      case 'eventDate':
        setEventDate(value);
        break;
      case 'peopleCount':
        setPeopleCount(value);
        break;
      case 'amount':
        setAmount(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <input
          type="text"
          name="eventName"
          value={eventName}
          onChange={handleInputChange}
          placeholder="Event Name"
        />
        <input
          type="text"
          name="eventTiming"
          value={eventTiming}
          onChange={handleInputChange}
          placeholder="Timing"
        />
        <input
          type="date"
          name="eventDate"
          value={eventDate}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="peopleCount"
          value={peopleCount}
          onChange={handleInputChange}
          placeholder="People Count"
        />
        <input
          type="number"
          name="amount"
          value={amount}
          onChange={handleInputChange}
          placeholder="Amount"
        />
        <a href={`/payment?eventName=${eventName}&eventTiming=${eventTiming}&eventDate=${eventDate}&peopleCount=${peopleCount}&amount=${amount}`}>
          Proceed to Payment
        </a>
      </div>
    </div>
  );
};

export default EventForm1;
