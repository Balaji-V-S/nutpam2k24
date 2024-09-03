import React, { useState } from "react";
import "../styles/EventsPg.css";
import Navbar from "../Components/navbar";
import FlipBook from "../Components/FlipBook";
import Footer from "../Components/footer";

function EventPg(props) {
  return (
    <>
      <Navbar/>
      <div className="parent-root">
      <FlipBook />
      <div className="text-bg">
        <div className="registration-ribbon">
          <div className="register-text">
            <p>So what you're waiting for?</p>
            <p>Go register 👇</p>
          </div>
          <div className="register-btn">
            <button
              className="bg-red-500 text-white px-4 py-2 rounded" >
              Registrations Closed❌
            </button>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
}

export default EventPg;
