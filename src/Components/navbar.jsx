import React from 'react'
import { Link } from "react-router-dom";
import logo from '../Assets/logo.png'
import '../styles/navbar.css'

const navbar = () => {
  return (
    <div className='top-nav'>
        <div className="logo-year">
          <img src={logo} alt="Nutpam Logo of Dragon"/>
          <h2 className="year-2k24">2 K 2 4</h2>
        </div>
        <div className="nav">
            <li>
                <Link to="/">HOME</Link>
            </li>
            <li>
                <Link to="/events">EVENTS</Link>
            </li>
            <li>
                <Link to="/team">TEAM</Link>
            </li>
            <li>
                <Link to="/contact">CONTACT</Link>
            </li>
        </div>
    </div>
  )
}

export default navbar
