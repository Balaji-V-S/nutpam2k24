
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
import { Routes, Route } from 'react-router-dom'; 
import Home from './Pages/homePg';

import About from './Components/about';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/about" element={<About />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="*" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;