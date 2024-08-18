import React from 'react'
import deptImg from '../Assets/deptImg.png'

const about = () => {
  return (
    <div className='parent'>
      <div>
        <div id='img-holder'>
          <img src={deptImg} alt="CSE Dept Logo" />
        </div>
      </div> 
    </div>
  )
}

export default about
