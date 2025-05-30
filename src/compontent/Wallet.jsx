import React, { useState } from 'react';
 // assuming App.css is in the same directory

const Wallet = () => {
  // State to manage the top-up amount
  const [amount, setAmount] = useState('');
  
  // Handler for setting predefined amounts
  const handleSetAmount = (value) => {
    setAmount(value);
  };

  // Handler for proceeding with the top-up
  const handleProceedTopUp = () => {
    if (amount) {
      alert(`Proceeding to top-up $${amount}`);
    } else {
      alert('Please enter an amount');
    }
  };

  return (
    <div className="wallet-container bg-info mt-5 mx-auto align-content-center justify-content-center">
      
      <div>
        <p>Current balance</p>
        <h1>$50</h1>
        <hr className="row-divider" />
      </div>

      <div>
        <label htmlFor="Top-Up">Top-Up Wallet</label>
        <input
          type="text"
          id="Top-Up"
          name="Top-Up"
          placeholder="Enter Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)} // To handle user input
          aria-describedby="amount-description"
        />
      </div>

      <div>
        <label>Recommended</label>
        <div className="buttons">
          <input
            type="button"
            value="100"
            onClick={() => handleSetAmount(100)}
          />
          <input
            type="button"
            value="500"
            onClick={() => handleSetAmount(500)}
          />
          <input
            type="button"
            value="1000"
            onClick={() => handleSetAmount(1000)}
          />
        </div>
      </div>

      <button className="topup-btn" onClick={handleProceedTopUp}>
        PROCEED
      </button>
    </div>
  );
};

export default Wallet;
