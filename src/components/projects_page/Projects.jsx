import React, { useEffect, useState }from "react";
import "../../styles/projects_page_styles/Projects.css";
import { FaPython, FaJsSquare, FaHtml5 } from "react-icons/fa";
import DueDatePlanner from "../../components/projects/pregnancy_course_planner/DueDatePlanner";
import CustomizableCard from "../../components/projects/css_html_projects/CustomizableCard";

const Projects = () => {

  const [activeLanguage, setActiveLanguage] = useState("python");

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top of the page
  }, []);

  return <div className="projects-container">
    <div className="title-container">
    <button className={`language-button ${activeLanguage === "python" ? "active" : ""}`} id="python-button" onClick={() => setActiveLanguage("python")}><FaPython/> {activeLanguage === "python" && <span className="language-text">Python</span>}</button>
    <button className={`language-button ${activeLanguage === "javascript" ? "active" : ""}`} id="javascript-button" onClick={() => setActiveLanguage("javascript")}><FaJsSquare/>{activeLanguage === "javascript" && <span className="language-text">JavaScript</span>}</button>
    <button className={`language-button ${activeLanguage === "html-css" ? "active" : ""}`} id="html-css-button" onClick={() => setActiveLanguage("html-css")}><FaHtml5/>{activeLanguage === "html-css" && <span className="language-text">HTML and CSS</span>}</button>
    </div>
 <div className={`projects-section ${activeLanguage === "python" ? "active" : ""}`}>
        <h2>Python Projects</h2>
        <p>These are my Python projects Lorem ipsum dolor sit amet...</p>
        <p>Another Python project description...</p>
      </div>
      <div className={`projects-section ${activeLanguage === "javascript" ? "active" : ""}`}>
        <h2>Pregnancy course planner</h2>
        <p className="project-subtitles">Tech: JavaScript, HTML, CSS</p>
        <p className="project-subtitles">Project type: Internship</p>
        <div className="project-description">
        <p>For this project I created a custom website widget for the website of a midwifery practice. It allows expecting clients to enter their due date and instantly receive a personalized course schedule tailored to their pregnancy timeline. The goal is to make it easy and intuitive for users to plan which prenatal courses to take — and when — without needing manual coordination. It solves the problem of aligning course availability with each client’s individual pregnancy timeline.</p>
        <p>I implemented both the functionality and styling for this project. To ensure smooth integration with the existing website — built on Jimdo — I chose to write the functionality in plain JavaScript, avoiding potential compatibility issues. For the styling, I used HTML and CSS, utilizing CSS Flexbox to achieve a responsive layout. I also matched the widget’s colors and typography to the original website, ensuring it blends in seamlessly with the existing design. Below you will find the final product, and a more detailed description.</p>
        </div>
        <DueDatePlanner />
      </div>
      <div className={`projects-section ${activeLanguage === "html-css" ? "active" : ""}`}>
        <h2>HTML & CSS Projects</h2>
        <p>These are my HTML and CSS projects Lorem ipsum dolor sit amet...</p>
        <p>Another HTML & CSS project description...</p>
       </div>
  </div>
};

export default Projects;