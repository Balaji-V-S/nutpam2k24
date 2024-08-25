import './App.css';
import React from 'react';
import { Route,Routes } from 'react-router-dom';
/* Page Imports */
import Home from './Pages/HomePg';
import Events from './Pages/EventsPg';
import NotFound from './Pages/PageNotFound';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} /> 
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
