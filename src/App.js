import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './NavBar.js';
import Home from './Home.js';
import About from './About.js';
import Projects from './Projects.js';
import Skills from './Skills.js';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className="App">
      <div id="fillerNavBar"></div>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/skills" element={<Skills/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

/*
Links:
https://www.geeksforgeeks.org/how-to-create-typewriter-effect-in-reactjs/
https://www.geeksforgeeks.org/html-marquee-loop-attribute/
https://www.w3schools.com/howto/howto_css_circles.asp
https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_display_element_hover


*/
