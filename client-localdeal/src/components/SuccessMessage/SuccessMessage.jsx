// Success.js
import React from 'react';
import './SuccessMessage.css'; // Import your styles

const SuccessMessage = ({ message }) => {
  return (
    <div className="success-container">
      <p className="success-message">{message}</p>
    </div>
  );
};

export default SuccessMessage;
