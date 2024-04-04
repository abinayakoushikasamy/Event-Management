// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import '../assets/payment.css';
const Payment = () => {
  const [eventName, setEventName] = useState('');
  const [amount, setAmount] = useState('');
  const [offer, setOffer] = useState('');
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [nameError, setNameError] = useState('');
  const [contactError, setContactError] = useState('');

  useEffect(() => {
    const loadRazorpayScript = () => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      document.body.appendChild(script);
    };

    loadRazorpayScript();

    return () => {
      document.body.removeChild(document.body.lastChild);
    };
  }, []);

  const handlePay = () => {
    if (!validateName(name) || !validateContact(contact)) {
      return;
    }

    try {
      const options = {
        key: "rzp_test_i1tLowNKXmrrLX",
        key_secret: "AC5ZHrWpt0uurpR7eXt9yUEQ",
        amount: amount * 100,
        currency: "INR",
        name: "D-Portal",
        description: `Event: ${eventName}, Amount: ${amount}, Offer: ${offer}, Name: ${name}, Contact: ${contact}`,
        handler: function (response) {
          alert(response.razorpay_payment_id);
        },
        prefill: {
          name: name,
          email: "example@example.com",
          contact: contact,
        },
        notes: {
          address: "Sri krishna college of Engineering and Technology",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const pay = new window.Razorpay(options);
      pay.open();
    } catch (error) {
      console.error(error);
    }
  };

  const validateName = (value) => {
    if (!value) {
      setNameError('Name is required');
      return false;
    }
    setNameError('');
    return true;
  };

  const validateContact = (value) => {
    const pattern = /^[0-9]{10}$/;
    if (!value || !pattern.test(value)) {
      setContactError('Please enter a valid contact number');
      return false;
    }
    setContactError('');
    return true;
  };

  return (
  
    <div className="payment-container">
      <h2>Name:</h2>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
      <span className="error">{nameError}</span>

      <h2>Contact:</h2>
      <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} placeholder="Enter your contact number" />
      <span className="error">{contactError}</span>

      <h2>Select Event:</h2>
      <select value={eventName} onChange={(e) => setEventName(e.target.value)}>
        <option value="">Select Event</option>
        <option value="Conference">party</option>
        <option value="Workshop">Birthday</option>
        <option value="Seminar">celebration</option>
      </select>

      <div className="select-container">
  <h2>Select Amount:</h2>
  <select className="select-box" value={amount} onChange={(e) => setAmount(e.target.value)}>
    <option value="" disabled hidden>Select Amount</option>
    <option value="50000">50,000</option>
    <option value="100000">100,000</option>
    <option value="25000">25,000</option>
  </select>
</div>


      <h2>Select Offer:</h2>
      <select value={offer} onChange={(e) => setOffer(e.target.value)}>
        <option value="">No Offer</option>
        <option value="Discounted">Discounted</option>
        <option value="Freebies">Freebies</option>
      </select>

      <button onClick={handlePay} className="pricing-button">
        Pay
      </button>
    </div>
    
  );
};

export default Payment;
