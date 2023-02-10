import { NavLink } from "react-router-dom";
import './Nav.css';
// import NavImage from '../images/PortfolioPic.jpg'
import Linkdin from "../images/linkdin-logo.png";
import GitHub from "../images/gitHubLogo.png";

const Nav = () => {
  return (
    <nav className="sidebar">
    
        <NavLink to='/landingPage' hidden={true}></NavLink>
        <NavLink className="navLink"  to="/resume">~Chartier~</NavLink>
      <NavLink className="navLink" to="/home">
        Home
      </NavLink>
      <NavLink className="navLink" to="/contact">
        Contact
      </NavLink>
      <NavLink className="navLink" to="/about">
        About
      </NavLink>
      <a className="linkdin-anchor" href="https://www.linkedin.com/in/charlette-chartier-152945262/" target="_blank"  rel="noreferrer">
              <img className="linkdin" src={Linkdin} alt="Linkdin Link" />
              </a>
              <a className="git-anchor" href="https://github.com/CharletteChartier" target="_blank"  rel="noreferrer">
              <img className="gitHub" src={GitHub} alt="GitHub Link" />
              </a>
          
    </nav>
  );
};

export default Nav;
