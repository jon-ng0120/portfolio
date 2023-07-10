import React from 'react';
import App from '../App';
import AboutMe from '../components/AboutMe';
import { HashRouter, Routes, Route } from 'react-router-dom';

function RouteSwitch() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>
    </HashRouter>
  );
}

export default RouteSwitch;
