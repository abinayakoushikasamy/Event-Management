// PaymentPage.jsx

// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import '../assets/payment.css';

const Payment= () => {
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [amount, setAmount] = useState('');

  const handlePayment = (e) => {
    e.preventDefault();

    // Implement actual payment processing logic here
    console.log('Payment details:', { name, cardNumber, expiryDate, cvv, amount });
  };

  return (
    <div className="payment-container">
      <h2>Complete Your Purchase</h2>
      <form className="payment-form" onSubmit={handlePayment}>
        <label>
          Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Card Number
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />
        </label>
        <label>
          Expiry Date
          <input
            type="text"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            required
          />
        </label>
        <label>
          CVV
          <input
            type="text"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            required
          />
        </label>
        <label>
          Amount
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </label>
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
};

export default Payment;
