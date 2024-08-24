import React from 'react';
import HTMLFlipBook from 'react-pageflip';
import Img from '../Assets/404bg.jpg';

function FlipBook(){
    return(
        <HTMLFlipBook width={300} height={500}>
        <div className="demoPage"><img src={Img} alt="Page 1"></img></div>
        <div className="demoPage"><img src={Img} alt="Page 1"></img></div>
        <div className="demoPage">Page 3</div>
        <div className="demoPage">Page 4</div>
    </HTMLFlipBook>
    )
}

export default FlipBook;