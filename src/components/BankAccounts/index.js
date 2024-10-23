// src/components/BankAccounts.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdEdit, MdDelete } from "react-icons/md";
import './index.css'; // Import the separate CSS file

const BankAccounts = () => {
  const navigate = useNavigate();

  // Mock data for bank accounts, this would come from an API in a real app
  const [bankAccounts, setBankAccounts] = useState([
    {
      id: 1,
      bankName: 'Sbi',
      holderName: 'Rahul Sharma',
      accountNumber: '16123456362',
      ifscCode: 'SBIN0001233',
    },
  ]);

  const handleAddBank = () => {
    navigate('/add-bank');
  };

  const handleRemoveAccount = (id) => {
    const updatedAccounts = bankAccounts.filter((account) => account.id !== id);
    setBankAccounts(updatedAccounts);
  };

  const handleEditAccount = (account) => {
    // Navigate to add-bank component with account data for editing
    navigate('/add-bank', { state: { account, isEdit: true } });
  };

  return (
    <div className="bank-accounts-container">
      <h2>Bank Accounts</h2>
      <button className="add-bank-button" onClick={handleAddBank}>
        Add New Bank
      </button>

      {bankAccounts.map((account) => (
        <div key={account.id} className="bank-account-card">
          <div className="bank-name">{account.bankName}</div>
          <div className="account-info">A/C No. {`****${account.accountNumber.slice(-4)}`}</div>
          <div className="account-info">IFSC: {`****${account.ifscCode.slice(-4)}`}</div>
          <div className="account-holder">{account.holderName}</div>
          <div className="account-actions">
            <button 
              className="edit-button" 
              onClick={() => handleEditAccount(account)}>
              <MdEdit /> Edit
            </button>
            <button 
              className="remove-button" 
              onClick={() => handleRemoveAccount(account.id)}>
              <MdDelete /> Remove Account
            </button>
          </div>
        </div>
      ))}

      <div className="disclaimer-section">
        <h4>Disclaimer</h4>
        <p>1. Use only a bank account that matches your profile name.</p>
        <p>2. Do not link the same bank account to multiple accounts.</p>
      </div>
    </div>
  );
};

export default BankAccounts;
