// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AddBank from './components/AddBank';
import BankAccounts from './components/BankAccounts';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/add-bank" element={<AddBank/>} />
        <Route path="/bank-accounts" element={<BankAccounts/>} />
      </Routes>
    </Router>
  );
}

export default App;
