import "./Home.css";
import React from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Typewriter from "typewriter-effect";
import Photo from "../images/background3.jpg";
// import Linkdin from "../images/linkdin-logo.png";
// import GitHub from "../images/gitHubLogo.png";

const Home = () => {
  return (
    <div>
    {/* //   <Outlet /> */}
      <div className="screen-cover">
        <div className="parent">
          <div className="details">
            
            
              <div className="profile-details-name">
                <span className="primary-text">
                  {"Hello, I'm "}
                  
                  <span className="highlighted-text">Charlette</span>
                </span>
                <Typewriter
                  options={{
                    strings: [
                      "I'm a Front End Developer",
                      "I love What I Do",
                      "And",
                      "I Love The Constant Evolution Of Code",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
                <div className="logo-holder">
        
              </div>
              </div>
              <div className="pic-background">
                <img className="pic" src={Photo} alt="Charlette" />
               
              </div>
          </div>
        </div>
      </div>
      <div className="email">
      <NavLink className="navLink" to="/contact">charchartier287@gmail.com </NavLink>
            </div>
            <Outlet />
    </div>
  );
};

export default Home;
