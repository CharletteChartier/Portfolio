import "./Home.css";
import React from "react";
import { Outlet } from "react-router-dom";
import Typewriter from "typewriter-effect";
import Photo from "../images/PortfolioPic.jpg";
import Linkdin from "../images/linkdin-logo.png";
import GitHub from "../images/gitHubLogo.png";

const Home = () => {
  return (
    <div>
      <Outlet />
      <div className="main-container">
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
              </div>
              <div className="pic-background">
                <img className="pic" src={Photo} alt="Charlette" />
                <div className="filter"></div>
              </div>
            
          </div>
        </div>
      </div>
      <footer>
      <div className="email">
              <span className="email-text">charchartier287@gmail.com </span>
              <div className="logo-holder">
              <img className="linkdin" src={Linkdin} alt="Linkdin Link"></img>
              <img className="gitHub" src={GitHub} alt="GitHub Link"></img>
              </div>
            </div>
            </footer>
    </div>
  );
};

export default Home;
