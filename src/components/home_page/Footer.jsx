import React from "react";
import "../../styles/home_page_styles/footer.css";

const date = new Date()
const year = date.getFullYear()

const Footer = () => {
  return (
    <footer className="footer-tag">
      <div className="footer-container">
        <div className="footer-section">
          <p>Remote / Berlin</p>
        </div>
        <div className="footer-section">
          <p>Contact me: hietbrink.dev@gmail.com</p>
        </div>
        <div className="footer-section">
          <p>© {year} Demi Hietbrink. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;