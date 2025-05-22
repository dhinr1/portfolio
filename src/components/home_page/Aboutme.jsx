import React, { useState, useEffect } from "react";
import "../../styles/home_page_styles/AboutMe.css";
import bgImage from "../../assets/bg_image_7.png";

const AboutMe = () => {
  // fading background.
  const [showBg, setShowBg] = useState(false);
  useEffect(() => {
    const toggleBackground = () => {
      setShowBg(true);

      setTimeout(() => {
        setShowBg(false);
      }, 2000);

      const randomTime = Math.floor(Math.random() * (30000 - 20000) + 10000);
      setTimeout(toggleBackground, randomTime);
    };

    toggleBackground();

    return () => clearTimeout(toggleBackground);
  }, []);

  
  const handleCopy = (text) => {
    // functionality to copy email and phone number to clipboard on-click
    navigator.clipboard.writeText(text)
      .then(() => {
        alert(`Copied: ${text}`);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <section className="about-me" id="about-me">
      <div
        className={`about-me-bg-container ${showBg ? "fade-in" : "fade-out"}`}
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      <div className="about-me-container">
        <div className="timeline-wrapper">
          <div className="timeline"></div>
        </div>

        <div className="about-me-content">



          <h1 className="about-me-title">About me</h1>
          <div className="about-me-text-container">
            <p>Hi, I’m Your Name, a passionate software developer with expertise in Python, JavaScript, HTML and CSS. I love building intuitive and responsive web applications that provide meaningful user experiences. Whether it's crafting interfaces or solving problems, I’m excited about using technology to make an impact. Outside of coding, I enjoy [hobby], exploring new tech, and constantly learning. and more text.</p>

          </div>
          <section className="contact-section" id="contact">
          <div className="contact-container">
          <p>Email: <span onClick={() => handleCopy('hietbrink.dev@gmail.com')} className="contact-highlight">hietbrink.dev@gmail.com</span></p>
          <p>Phone: <span onClick={() => handleCopy('+31683658384')}className="contact-highlight">+31683658384</span></p>
          </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;