import React from 'react';
import App from '../App';
import AboutMe from '../components/AboutMe';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function RouteSwitch() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteSwitch;
