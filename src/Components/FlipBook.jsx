import React from 'react';
import HTMLFlipBook from 'react-pageflip';
import Eve1 from '../Assets/events/event1.jpg';
import Eve2 from '../Assets/events/event2.jpg';
import Eve3 from '../Assets/events/event3.jpg';
import Eve4 from '../Assets/events/event4.jpg';
import Eve5 from '../Assets/events/event5.jpg';
import Eve6 from '../Assets/events/event6.jpg';
import Eve7 from '../Assets/events/event7.jpg';
import Eve8 from '../Assets/events/event8.jpg';
import Eve9 from '../Assets/events/event9.jpg';
import Eve10 from '../Assets/events/event10.jpg';
import Eve11 from '../Assets/events/event11.jpg';
import Eve12 from '../Assets/events/event12.jpg';
import Eve13 from '../Assets/events/event13.png';
import Eve14 from '../Assets/events/event14.jpg';
import Eve15 from '../Assets/events/event15.jpg';
import Eve16 from '../Assets/events/event16.jpg';
import Eve17 from '../Assets/events/event17.jpg';
import last from '../Assets/events/eventbackcover.jpg';



function FlipBook(){
    return(
        <HTMLFlipBook width={700} height={500} className='flip-book'>
            <div className="demoPage"><img src={Eve1} alt="Page 1"></img></div>
            <div className="demoPage"><img src={Eve2} alt="Page 1"></img></div>
            <div className="demoPage"><img src={Eve3} alt="Page 1"></img></div>
            <div className="demoPage"><img src={Eve4} alt="Page 1"></img></div>
            <div className="demoPage"><img src={Eve5} alt="Page 1"></img></div>
            <div className="demoPage"><img src={Eve6} alt="Page 1"></img></div>
            <div className="demoPage"><img src={Eve7} alt="Page 1"></img></div>
            <div className="demoPage"><img src={Eve8} alt="Page 1"></img></div>
            <div className="demoPage"><img src={Eve9} alt="Page 1"></img></div>
            <div className="demoPage"><img src={Eve10} alt="Page 1"></img></div>
            <div className="demoPage"><img src={Eve11} alt="Page 1"></img></div>
            <div className="demoPage"><img src={Eve12} alt="Page 1"></img></div>
            <div className="demoPage"><img src={Eve13} alt="Page 1"></img></div>
            <div className="demoPage"><img src={Eve14} alt="Page 1"></img></div>
            <div className="demoPage"><img src={Eve15} alt="Page 1"></img></div>
            <div className="demoPage"><img src={Eve16} alt="Page 1"></img></div>
            <div className="demoPage"><img src={Eve17} alt="Page 1"></img></div>
            <div className="demoPage"><img src={last} alt="Page 1"></img></div>
        </HTMLFlipBook>
    )
}

export default FlipBook;