import React from "react";
import Navbar from '../Components/navbar';
import Header from '../Components/header';
import Know from '../Components/know';
import About from '../Components/about';
import Footer from '../Components/footer';

function Home(){
    return(
        <>
        <Navbar/>
        <Header/>
        <About/>
        <Know/>
        <Footer/>
        </>
    )
}

export default Home;