import React from 'react';
import Header from '../Components/header';
import About from '../Components/about';
import Know from '../Components/know';
import Footer from '../Components/footer';

function Home(){
    return (
        <div>
        <Header/>
        <About/>
        <Know/>
        <Footer/>
        {/* <Time/>
        <Sponsors/>
       <Footer/> */}
        </div>
    )
}

export default Home;