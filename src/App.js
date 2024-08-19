import './App.css';
import Footer from '../src/Components/footer';
import About from '../src/Components/about';
import Header from '../src/Components/header';
import Know from '../src/Components/know';
import Sponsors from '../src/Components/sponsors';

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Know/>
      <Footer/>
      {/* <Time/>
      <Sponsors/>
      <Footer/> */}
    </div>
  );
}

export default App;
