// import React from 'react'

// const about = () => {
//   return (
//     <div className='parent'>
//       Sairam College's CSE department delivers a forward-thinking education with a focus on practical experience and industry connections. The program features modern labs and a diverse faculty, ensuring students gain both theoretical knowledge and hands-on skills. 
//     </div>
//   )
// }

// export default about
import React from 'react'
import deptImg from '../Assets/deptImg.png'
import aboutBG from '../Assets/aboutBG.png'
import deptLogo from '../Assets/deptLogo.png'
import '../styles/aboutPG.css'

const About = () => {
  return (
    <div className='parent' style={{ backgroundImage: `url(${aboutBG})` }}>
      <div className='content-wrapper'>
        <div className='img-holder'>
          <img src={deptImg} alt="CSE Dept Logo" />
        </div>
        <div className='logo-holder'>
          <img src={deptLogo} alt="Dept Logo" />
        </div>
        <div className='content'>
          <p>SAIRAM COLLEGE'S CSE DEPARTMENT DELIVERS A FORWARD-THINKING EDUCATION WITH A FOCUS ON PRACTICAL EXPERIENCE AND INDUSTRY CONNECTIONS. THE PROGRAM FEATURES MODERN LABS AND A DIVERSE FACULTY, ENSURING STUDENTS GAIN BOTH THEORETICAL KNOWLEDGE AND HANDS-ON SKILLS.</p>
        </div>
      </div>
    </div>
  )
}

export default About
