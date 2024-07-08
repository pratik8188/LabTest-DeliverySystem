// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddDelivery from './components/AddDelivery';
import ViewDeliveries from './components/ViewDelivery';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <div className="container mt-5">
        <Routes>
          <Route path="/add" element={<AddDelivery />} />
          <Route path="/view" element={<ViewDeliveries />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;