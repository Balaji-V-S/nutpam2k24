import React from "react";
import Header from '../Components/header';
import Know from '../Components/know';
import About from '../Components/about';
import Footer from '../Components/footer';

function Home(){
    return(
        <>
        <Header/>
        <About/>
        <Know/>
        <Footer/>
        </>
    )
}

export default Home;