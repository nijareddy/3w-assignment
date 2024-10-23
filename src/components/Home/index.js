// src/components/Home.js

import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleAddBank = () => {
    navigate('/add-bank');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Bank Information Management</h1>
      <button 
        onClick={handleAddBank} 
        style={{
          padding: '10px 20px', 
          backgroundColor: 'green', 
          color: 'white', 
          border: 'none', 
          borderRadius: '5px',
          cursor: 'pointer'
        }}>
        Add Bank Account
      </button>
    </div>
  );
};

export default Home;
