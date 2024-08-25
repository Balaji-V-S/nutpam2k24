import './App.css';
import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
/* Page Imports */
import Home from './Pages/HomePg';
import Events from './Pages/EventsPg';
import Team from './Components/team';
import Footer from './Components/footer';
import NotFound from './Pages/PageNotFound';
import Preloader from './Components/Preloader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay or actual async data fetching
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the timeout duration as needed
  }, []);

  return (
    <div>
      {loading ? (
        <Preloader />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} /> 
          <Route path="/team" element={<Team />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
