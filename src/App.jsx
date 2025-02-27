// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/welcome" />} />
      </Routes>
    </Router>
  );
}

export default App;