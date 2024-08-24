import React from 'react'
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
                <a href="">HOME</a>
            </li>
            <li>
                <a href="">EVENTS</a>
            </li>
            <li>
                <a href="">TEAM</a>
            </li>
            <li>
                <a href="">CONTACT</a>
            </li>
        </div>
        <div className="menu-icon">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
    </div>
  )
}

export default navbar
