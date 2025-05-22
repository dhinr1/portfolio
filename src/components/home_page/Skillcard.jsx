import React, { useState } from "react";
import "../../styles/home_page_styles/Skillcard.css"; // Ensure the path is correct

const Skillcard = ({ Icon, title, description, color, isActive }) => {
  const [hovered, setHovered] = useState(false);
  const [rotated, setRotated] = useState(false);

  return (
    <div 
      className={`skillcard ${isActive ? 'active' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="icon-title-container">
        <div 
          className={`icon-container ${isActive ? 'active' : ''}`}
          onClick={() => setRotated(!rotated)} // Toggle rotation on click
        >
          {Icon && (
            <Icon 
              size={32} 
              className="icon" 
              style={{
                transition: "all 0.5s ease-in-out",
                color: isActive ? color : hovered ? color : "black",
                transform: `${isActive ? "scale(1.3) rotate(360deg)" : hovered ? "scale(1.3)" : "scale(1)"} ${rotated ? "rotate(360deg)" : ""}`
              }}
            />
          )}
        </div>
        <h3>{title}</h3>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default Skillcard;