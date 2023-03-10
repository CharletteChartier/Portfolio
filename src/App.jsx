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


function App() {
;
  return (
  
    <Router>
      <Nav />
     
      <Routes>
       
        <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/resume" element={<Resume />} /> 
        
      </Routes>
    </Router>
  );
}

export default App;
