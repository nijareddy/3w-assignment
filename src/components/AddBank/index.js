// src/components/AddBank.js

import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import './index.css'; // Import the CSS file for styling

const AddBank = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Check if it's editing or adding
  const isEdit = location.state?.isEdit || false;
  const accountToEdit = location.state?.account || {};

  const [bankName, setBankName] = useState('');
  const [holderName, setHolderName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [confirmAccountNumber, setConfirmAccountNumber] = useState('');
  const [ifscCode, setIfscCode] = useState('');

  // Populate fields with account data if editing
  useEffect(() => {
    if (isEdit && accountToEdit) {
      setBankName(accountToEdit.bankName);
      setHolderName(accountToEdit.holderName);
      setAccountNumber(accountToEdit.accountNumber);
      setConfirmAccountNumber(accountToEdit.accountNumber); // confirm should match initial account number
      setIfscCode(accountToEdit.ifscCode);
    }
  }, [isEdit, accountToEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (accountNumber !== confirmAccountNumber) {
      alert("Account numbers do not match!");
      return;
    }

    const accountData = {
      bankName,
      holderName,
      accountNumber,
      ifscCode,
    };

    try {
      if (isEdit) {
        // Update existing bank account (PUT request)
        
        alert('Bank account updated successfully');
      } else {
        // Add new bank account (POST request)
       
        alert('Bank account added successfully');
      }
      navigate('/bank-accounts'); // Navigate back to bank accounts after submission
    } catch (error) {
      console.error('Error adding/updating bank account:', error);
      alert('Failed to submit the bank account. Please try again.');
    }
  };
 
  return (
    <div className="add-container">
      <h2>{isEdit ? 'Update Bank' : 'Add New Bank'}</h2>
      <form onSubmit={handleSubmit} className="bank-form">
        <div className="form-group">
          <label>Bank Name</label>
          <br/>
          <input
            type="text"
            value={bankName}
            onChange={(e) => setBankName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Holder Name</label>
          <br/>
          <input
            type="text"
            value={holderName}
            onChange={(e) => setHolderName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Account Number</label>
          <br/>
          <input
            type="text"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Confirm Account Number</label>
          <br/>
          <input
            type="text"
            value={confirmAccountNumber}
            onChange={(e) => setConfirmAccountNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>IFSC Code</label>
          <br/>
          <input
            type="text"
            value={ifscCode}
            onChange={(e) => setIfscCode(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="add-bank-btn">
          {isEdit ? 'Update Bank' : 'Add Bank'}
        </button>
      </form>
    </div>
  );
};

export default AddBank;
