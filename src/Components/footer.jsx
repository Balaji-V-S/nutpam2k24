import React from 'react'
import logofooter from '../Assets/img/sai-footer.png'
import mail from '../Assets/img/mail.png'
import insta from '../Assets/img/insta.png'
import facebook from '../Assets/img/facebook.png'
import linkedin from '../Assets/img/linkedin.png'
import twitter from '../Assets/img/twitter.png'
import '../styles/footerStyle.css'

const footer = () => {
  return (
    <section>
  <footer className='footer-bg'>
  <div className='clg-det'>
    <div className="clg">
      <img src={logofooter} className="sai-footer" alt="College Logo"/>
      <p className="clg-name">Sri Sairam Institute of Technology</p>
    </div>
    <div className="mail">
      <img src={mail} className="mail-logo" alt="Mail Logo"/>
      <p className="mail-id">nutpam<span>&#64;</span>sairamit.edu.in</p>
    </div>
    <div className="contact">
      <a href="#"><img src={linkedin} className="linkedin-logo" alt="LinkedIn"/></a>
      <a href="https://www.instagram.com/nutpam_2024"><img src={insta} className="instagram-logo" alt="Instagram"/></a>
      <a href="https://www.facebook.com/share/4hPngiza8qPuVEa4/?mibextid=qi2Omg"><img src={facebook} className="facebook-logo" alt="Facebook"/></a>
      <a href="https://x.com/@Nutpam2k24"><img src={twitter} className="twitter-logo" alt="Twitter"/></a>
    </div>   
  </div>
  
  <div className="coordinators-det">
    <p>Staff Coordinator</p>
    <p className='co-name'>Mr. J.Pathmanaban</p>
    <p className='co-name'>Ms. S.Mathupriya</p>
    <p>Student Coordinator</p>
    <p className='co-name'>Abishek M- 9789637083</p>
    <p className='co-name'>Aiswarya S M -9790867582</p>
  </div>
  <div class="map-container">
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1749831235406!2d80.05065757358885!3d12.960652315121195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f51f638ddfbb%3A0xf3aef7ec7c8979ba!2sSri%20Sairam%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1723958415556!5m2!1sen!2sin"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
</footer>
</section>
  )
}

export default footer
