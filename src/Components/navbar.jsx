/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import {useState} from 'react'
import { Link } from "react-router-dom";
import logo from '../Assets/logo.png'
import '../styles/navbar.css'

const navbar = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [burger_class,setBurgerClass] = useState("burger-bar unclicked")
  const [menu_class,setMenuClass] = useState('menu hidden')
  const [isMenuClicked, setIsMenuClicked] = useState(false)
  const updateMenu=()=>{
    if(isMenuClicked){
      setBurgerClass("burger-bar unclicked")
      setMenuClass('menu hidden')
    }
    else{
      setBurgerClass("burger-bar clicked")
      setMenuClass('menu visible')
    }
    setIsMenuClicked(!isMenuClicked)
  }
  const handleScrollToFooter = () => {
    const footerElement = document.getElementById('footer');
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
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
                <Link to="/#footer" onClick={handleScrollToFooter}>CONTACT</Link>
            </li>
            
        </div>
        <div className="burger-menu" onClick={updateMenu}>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>
        <div className={menu_class}>
          <div>
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
                  <Link to="/#footer">CONTACT</Link>
              </li>
          </div>
        </div>
    </div>
  )
}

export default navbar
