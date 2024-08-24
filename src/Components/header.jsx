/* eslint-disable react-hooks/exhaustive-deps */
import React,{useRef,useState} from 'react'
import logo from '../Assets/logo.png'
import Navbar from './navbar'
// import naruto from '../Assets/naruto.png'
import '../styles/header.css'

//header
const Header = () => {
    const [time, setTime] = useState("00");
    const [min, setMin] = useState("00");
    const [hour, setHour] = useState("00");
    const [day, setDay] = useState("00");
    let interval = useRef();
    const startTimer = () => {
        const countDownDate = new Date("Sep 10, 2024 09:30:00").getTime();
        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now;
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            if (distance < 0) {
                clearInterval(interval.current);
            } else {
                setDay(days);
                setHour(hours);
                setMin(minutes);
                setTime(seconds);
            }
        }, 1000);
    };
    React.useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current);
        };
    }, []);
  return (
    <>
        <div className='bg'>
          <Navbar/>
          <div className="heading">NUTPAM</div>
          {/* <img src={naruto} className='naruto' alt="" /> */}
          {/* <div className="navbar">
            <ul>
              <li className='nav1'><a href="#time">EVENTS</a></li>
              <li className='nav2'><a href="#about">TEAM</a></li>
              <li className='nav3'><a href="#footer">CONTACT</a></li>
            </ul>
          </div> */}
          
          <div className="jap-text">
                <div className="technology">
                  <div>技</div>
                  <div >術</div>
                </div>
                
                <div className="register">
                    <a href="https://forms.gle/6YfPugs214DG3je87">REGISTER</a>
                </div>
                <div className="jap-number">
                    <div>二</div>
                    <div>千</div>
                    <div>二</div>
                    <div>十</div>
                    <div>四</div>
                </div>
          </div>
          <div className="timer">
            <div className="time">
              <h1>{day}</h1>
              <p>Days</p>
            </div>
            <div className="time">
              <h1>{hour}</h1>
              <p>Hours</p>
            </div>
            <div className="time">
              <h1>{min}</h1>
              <p>Minutes</p>
            </div>
            <div className="time">
              <h1>{time}</h1>
              <p>Seconds</p>
            </div>
          </div>
          <div className="empty"></div>
        </div>
        <div className="shadow-box"></div>
    </>
  )
}

export default Header
