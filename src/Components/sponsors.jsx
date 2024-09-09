import React from 'react'
import '../../src/styles/sponsor.css';
import byts from '../Assets/sponsor_logos/bytsLogo.png';
import livewire from '../Assets/sponsor_logos/liveWireLogo.png';
import edify from '../Assets/sponsor_logos/edifyTechnoLogo.png';
import para from '../Assets/sponsor_logos/paraprojects.png';
import revamp from '../Assets/sponsor_logos/Revamp_Logo.png';
import flink from '../Assets/sponsor_logos/FlinkFusionLogo.png';
import vyuh from '../Assets/sponsor_logos/vyuh.png';
import vectra from '../Assets/sponsor_logos/ADVANTAGE PRO LOGO.jpg'
import ziga from '../Assets/sponsor_logos/ziga.jpg';

const sponsors = () => {
  return (
    <div className='bg-img'>
      <div className="head-spon">
        <h5>Our Valued Sponsors</h5>
      </div>
      <div className="sponsors">
        <div className="associate">
            <div className="sponsor">
              <a href='https://byts.co.in/'>
                <img src={byts} alt="Byts" height={60}/>
              </a>
            </div>
            <div className="sponsor">
              <a href="https://www.advantagepro.in/">
                <img src={vectra} alt="" height={60}/>
              </a>
            </div>
        </div>
        <div className="gold">
          <div className="sponsor">
            <a href="https://livewireindia.com/">
              <img src={livewire} alt="Livewire" height={60}/>
            </a>
          </div>
          <div className="sponsor">
            <a href="https://vyuh.tech/">
              <img src={vyuh} alt="Vyuh" height={60}/>
            </a>
          </div>
          <div className="sponsor">
            <a href="https://zigainfotech.com/">
              <img src={ziga} alt="Ziga" height={60}/>
            </a>
          </div>
        </div>
        <div className="silver">
          <div className="sponsor">
            <a href="https://edifytech.in/">
              <img src={edify} alt="Edify" height={60}/>
            </a>
          </div>
        </div>
        <div className="bronze">
          <div className="sponsor">
            <a href="https://www.revampacademy.com/">
              <img src={revamp} alt="Revamp" height={60}/>
            </a>
          </div>
          <div className="sponsor">
            <a href="https://flinkfusion.com/flinkfusion/">
              <img src={flink} alt="Flink" height={60}/>
            </a>
          </div>
        </div>
        <div className="voucher">
          <div className="sponsor">
            <a href="https://paraprojects.in/">
              <img src={para} alt="Para" height={60}/>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default sponsors
