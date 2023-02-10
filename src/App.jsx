import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from './Components/Home/Home';
import Nav from './Components/Nav/Nav';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Resume from "./Components/Resume/Resume";
import Skill from "./Components/Skills/Skill";

function App() {
;
  return (
  
    <Router>
      <Nav />
     
      <Routes>
       
        <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/resume" element={<Resume />} /> 
        <Route path="/skill" element={<Skill />} />
      </Routes>
    </Router>
  );
}

export default App;
