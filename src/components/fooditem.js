// src/components/FoodItem.js
import React from 'react';
import '../styles/foodlist.css';

const FoodItem = ({ image, date, title, description, link }) => {
  return (
    <>
<div className="food-item">
      <a className="food-image-container" href={link} aria-label="View recipe">
        <img className="food-image" src={image} alt="Recipe image" />
      </a>
      <div className="food-details">
        <div className="food-upload-date">{date}</div>
        <h2 className="food-title">{title}</h2>
        <p className="food-desc">{description}</p>
        <a href={link} className="get-foodinfo">CONTINUE READING</a>
      </div>
    </div>
    </>
  );
};

export default FoodItem;
