import React, { useState } from 'react';
import './subscribe.css';

const SubscriptionForm = () => {
  const [email, setEmail] = useState('');
  const [subscriptionPlan, setSubscriptionPlan] = useState('monthly');

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePlanChange = (event) => {
    setSubscriptionPlan(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can add your logic here to handle form submission, e.g., send data to the server
    console.log('Submitted data:', { email, subscriptionPlan });

    // Show alert when the form is submitted successfully
    alert('You have successfully subscribed!');
  };

  return (
    <div className="subscription-form">
      <h2>Subscribe to Music Hits</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleInputChange}
          placeholder="Enter your email"
          required
        />

        <label htmlFor="plan">Choose a Plan:</label>
        <select
          id="plan"
          name="plan"
          value={subscriptionPlan}
          onChange={handlePlanChange}
        >
          <option value="monthly">$5 a month</option>
          <option value="yearly">$10 a year</option>
        </select>

        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export default SubscriptionForm;
