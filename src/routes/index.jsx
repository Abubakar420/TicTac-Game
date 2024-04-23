// Init
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Routes
import Home from '../containers/Home';
import Calculator from '../containers/Calculator';

function Index() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Calculator" element={<Calculator />} />
    </Routes>
  );
}
export default Index;
