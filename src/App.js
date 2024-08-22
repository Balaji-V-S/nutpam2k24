
// import Sponsors from '../src/Components/sponsors';

// function App() {
  //   return (
    //     <div className="App">
    //       <Header/>
    //       <About/>
    //       <Know/>
    //       <Footer/>
    //       {/* <Time/>
    //       <Sponsors/>
//       <Footer/> */}
//     </div>
//   );
// }

// export default App;

import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route } from 'react-router-dom'; 
import Home from './Pages/homePg'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </div>
  );
}

export default App;