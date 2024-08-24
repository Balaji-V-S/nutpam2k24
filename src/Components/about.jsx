import React from 'react'
import aboutBG from '../Assets/aboutBG.png'
import deptLogo from '../Assets/deptLogo.png'
import '../styles/aboutPg.css'

const About = () => {
  return (
    <div className='parent' style={{ backgroundImage: `url(${aboutBG})` }}>
      <div className='content-wrapper'>
        <div className='logo-holder'>
          <img src={deptLogo} alt="Dept Logo" />
        </div>
        <div className='content'>
          <p>SAIRAM COLLEGE'S <span>CSE DEPARTMENT</span> DELIVERS A FORWARD-THINKING EDUCATION WITH A FOCUS ON PRACTICAL EXPERIENCE AND INDUSTRY CONNECTIONS. THE PROGRAM FEATURES MODERN LABS AND A DIVERSE FACULTY, ENSURING STUDENTS GAIN BOTH THEORETICAL KNOWLEDGE AND HANDS-ON SKILLS.</p>
        </div>
      </div>
    </div>
  )
}

export default About


