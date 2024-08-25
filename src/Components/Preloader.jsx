import React, { useState, useEffect } from 'react';
import '../styles/Preloader.css';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set a timer to hide the preloader after 5 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // 5000ms = 5 seconds

    // Cleanup the timer when the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  if (!loading) {
    return null; // Don't render the preloader if loading is false
  }

  return (
    <div className="preloader">
      <div className="blurred-background"></div>
      <div className="cube">
        <div className="face front"></div>
        <div className="face back"></div>
        <div className="face left"></div>
        <div className="face right"></div>
        <div className="face top"></div>
        <div className="face bottom"></div>
      </div>
    </div>
  );
};

export default Preloader;


