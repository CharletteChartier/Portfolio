import { NavLink } from "react-router-dom";
import "./Resume.css";

const Resume = () => {
  // const handleClick = (e) => {
  //   // using Java Script method to get PDF file
  //   e.preventDefault();
  //   fetch("https://docs.google.com/document/d/1abJY11jCRLYOE7HqLKnRZ7FHJXvoo31IL2IgOeqThT4",).then(response => {
  //       response.blob().then(blob => {
          
  //           // Creating new object of PDF file
  //           const fileURL = window.URL.createObjectURL(blob);
  //           // Setting various property values
  //           let alink = document.createElement('a');
  //           alink.href = fileURL;
  //           alink.download = 'https://docs.google.com/document/d/1abJY11jCRLYOE7HqLKnRZ7FHJXvoo31IL2IgOeqThT4';
  //           alink.click();
  //       })
  //   })
// }
  return (
    <div>
       <a className="navLink-download" href="https://docs.google.com/document/d/1abJY11jCRLYOE7HqLKnRZ7FHJXvoo31IL2IgOeqThT4" target="_blank"  rel="noreferrer"
              alt="Resume Link">DownLoad
              </a>
      <div className="screen-cover">
        <div className="resume-container">
          <h1 className="name">Charlette Chartier</h1>
          {/* <button className="download" onClick={handleClick}>
            Download
          </button> */}
         
          <p className="content">
            <NavLink className="navLink-email" to="/contact">
              charchartier287@gmail.com{" "}
            </NavLink>{" "}
            | 602-339-4674 | AZ
          </p>
          <h2 className="secondary-headings">Professional Summary</h2>
          <p className="content">
            Skilled Software Developer whom brings high-level proficiency in
            React, JavaScript, and CSS. Works well with technical and
            non-technical personel to accomplish development goals. Focused on
            delivering clean, error-free code for scalable, user-friendly
            designs.
          </p>
          <h2 className="secondary-headings">Skills</h2>
          <ul>
            <li>Problem-Solving</li>
            <li>Timeline estimation</li>
            <li>Product management</li>
            <li>Data Structures</li>
            <li>Algorithms</li>
            <li>Technology integration</li>
          </ul>
          <h2 className="secondary-headings">Experience</h2>
          <h2 className="secondary-headings">Software Developer</h2>
          <h2 className="secondary-headings">Banyanlabs, 2023 - Current</h2>
          <ul>
            <li>Support, maintain, and enhance software functionality</li>
            <li>
              Learned new technologies and adopted new tools to maximize
              performance and contributions
            </li>
            <li>
              Adapt existing software to new purposes, improving performance and
              including new Functionality
            </li>
          </ul>
          <h2 className="secondary-headings">Education</h2>
          Front End Developer: Web Development Persevere, Phoenix, AZ
          <h2 className="secondary-headings">Languages</h2>
          <ul className="languages">
            <li>Javascript</li>
            <li>React</li>
            <li>Bootstrap</li>
            <li>Fluent</li>
            <li>Fluent</li>
            <li>Fluent</li>
            <li>Html</li>
            <li>CSS</li>
            <li>Functional Programing</li>
            <li>Fluent</li>
            <li>Fluent</li>
            <li>Fluent</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume;
