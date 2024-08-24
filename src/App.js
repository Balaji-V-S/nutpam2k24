import './App.css';

import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Home from './Pages/homePg';



function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="*" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;