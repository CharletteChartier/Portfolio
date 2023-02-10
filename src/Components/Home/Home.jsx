import "./Home.css";
import React from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Typewriter from "typewriter-effect";
import Me from "../images/background3.jpg";

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
                      "I'm a Certified Front End Developer",
                      "I love What I Do",
                      "And",
                      "I Enjoy The Constantly Evolving Code",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
                <div className="logo-holder">
        
              </div>
              </div>
              <div className="pic-background">
                <img className="pic" src={Me} alt="Charlette" />
               
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
