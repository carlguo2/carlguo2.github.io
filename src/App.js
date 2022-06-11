import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';

import './App.css';
import Coursework from './components/Coursework/Coursework';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='content-container'>
        <Home />
        <About />
        <Coursework />
        <Projects />
        <Resume />
      </div>
    </div>
  );
}

export default App;
