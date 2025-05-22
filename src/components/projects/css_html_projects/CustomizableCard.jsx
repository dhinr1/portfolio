import React from "react";
import "./CustomizableCard.css";
import placeholderImage from "./card_assets/card-image-placeholder.jpg";

const CustomizableCard = () => {
  return (
    <div className="card-container">
        <div className="card-image-container">
        <img className="card-image" src={placeholderImage} alt="abstract placeholder image"></img>
        </ div>
      <h1>H1 Text</h1>
    </div>
  );
};

export default CustomizableCard;