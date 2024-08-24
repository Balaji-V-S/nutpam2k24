import React from 'react';
import '../styles/NotFound.css'; // Import the CSS for styling and animation
import logo from '../Assets/logo.png'
import Footer from '../Components/footer'

import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
    <div className="not-found-container">
      <div className="top">
            <img src={logo} alt="Nutpam Logo of Dragon"/>
            <h2 className="year">2 K 2 4</h2>
          </div>
      <div className="not-found-content">
        <div className="error-code">404</div>
        <div className="error-message">Page Not Found</div>
      </div>
      <div></div>
      <Link to="/"><button className="return-home-button" >   
        Return to Home
      </button></Link>
      {/* <div className="marquee-text">
        <span>404 エラー - ページが見つかりません</span> {/* Replace with your desired Japanese text 
      </div>*/}
    </div>
    <Footer/>
    </>
  );
};

export default NotFound;