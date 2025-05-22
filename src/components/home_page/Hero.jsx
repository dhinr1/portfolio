import React, { useState, useEffect } from 'react';
import "../../styles/home_page_styles/Hero.css";
import personalImage from "../../assets/personal_image_2.jpg";
import bgImage from "../../assets/bg_image_6.png"; // Import your background image
import { NavLink } from 'react-router-dom';

const Hero = () => {
  const [showBg, setShowBg] = useState(false);

  useEffect(() => {
    const toggleBackground = () => {
      setShowBg(true); // Fade in

      setTimeout(() => {
        setShowBg(false); // Fade out
      }, 2000); // Show for 2 seconds

      // Set next random interval between 5s - 15s
      const randomTime = Math.floor(Math.random() * (20000 - 10000) + 10000);
      setTimeout(toggleBackground, randomTime);
    };

    // Initial trigger
    toggleBackground();

    return () => clearTimeout(toggleBackground);
  }, []);

  return (
    <section id="home" className="hero-container">
      <div className={`background-container ${showBg ? "fade-in" : "fade-out"}`} 
        style={{ backgroundImage: `url(${bgImage})` }}>
      </div>

      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="hero-image-container col-10 col-sm-8 col-lg-6">
          <div className="hero-image-trigger">
            <img
              src={personalImage}
              className="d-block mx-lg-auto img-fluid hero-image"
              alt="Your Image"
              width="350"
              loading="lazy"
            />
          </div>
        </div>
        <div className="hero-text-container col-lg-6 hero-text">
          <h1 className="hero-heading">Welcome to my portfolio.</h1>
          <p className="hero-subheading">
            Skilled in Python, JavaScript, HTML, and CSS, <span className="highlight">I bring ideas to life through code </span>. 
            Whether it’s crafting user experiences or solving problems, <span className="highlight">let’s work together and find creative solutions.</span>
          </p>
          <div className="buttons-container d-grid gap-2 d-md-flex justify-content-md-start">
          <NavLink
            to="/projects"
            className="first-button btn btn-primary btn-lg px-4 me-md-2"
          >
            View My Work
        </NavLink>
            <a href="#contact">
              <button type="button" className="second-button btn btn-outline-secondary btn-lg px-4">
                Contact Me
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;