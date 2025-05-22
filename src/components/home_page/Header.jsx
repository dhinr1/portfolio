import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "../../styles/home_page_styles/Header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Detect scroll position and update header state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      handleActiveSection();
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detect which section is in view
  const handleActiveSection = () => {
    const sections = document.querySelectorAll("section");
    let currentSection = "";

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
        currentSection = section.id;
      }
    });

    setActiveSection(currentSection);
  };

  // Handle navigation and smooth scrolling
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection(sectionId), 100);
    } else {
      scrollToSection(sectionId);
    }
  };

  // Scroll to a section smoothly
  const scrollToSection = (sectionId) => {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      const headerHeight = document.querySelector("header")?.offsetHeight || 0;
      window.scrollTo({
        top: targetSection.offsetTop - headerHeight,
        behavior: "smooth",
      });
    }
  };

  // Set initial active section on first load
  useEffect(() => {
    if (location.pathname === "/") {
      setActiveSection("home");
    } else {
      setActiveSection("");
    }
  }, [location]);

  //toggle hamburger menu (small screens only)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isScrolled && !isMenuOpen ? "shrink" : ""}`}>
      <div className="header-container">
        <nav className="nav-tag">
          <div className="hamburger-icon" onClick={toggleMenu}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
            <li>
              <a
                href="#home"
                className={`nav-link ${activeSection === "home" ? "active" : ""}`}
                onClick={(e) => handleNavClick(e, "home")}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about-me"
                className={`nav-link ${activeSection === "about-me" ? "active" : ""}`}
                onClick={(e) => handleNavClick(e, "about-me")}
              >
                About Me
              </a>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={`nav-link ${activeSection === "projects" ? "active" : ""}`}
              >
                Projects
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;