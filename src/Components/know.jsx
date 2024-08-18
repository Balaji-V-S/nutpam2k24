import React from 'react';
import { MDBFooter, MDBContainer, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import '../styles/knowmore.css'; // Import the CSS file

const Know = () => {
  return (
    <MDBFooter className='footer'>
      <MDBContainer className='footer-container'>
        <div className='iframe-title'>
          <p>know more about this symposium</p>
        </div>
        <MDBRow className='d-flex justify-content-center'>
          <MDBCol lg='8' md='10' sm='12' className='footer-col'>
            <div className='video-wrapper'>
              <iframe
                src="https://www.youtube.com/embed/E3EZwcv68so?si=Q2dKVe6N2_p9dmgT"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
};

export default Know;
