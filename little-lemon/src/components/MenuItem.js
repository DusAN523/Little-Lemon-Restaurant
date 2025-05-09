import React from "react";
import "./MenuItem.css";

export default function MenuItem({ strMeal, strMealThumb }) {
  return (
    <div className="menu-item">
      <img src={strMealThumb} alt={strMeal} />
      <div className="menu-item-info">
        <div className="menu-item-header">
          <h3>{strMeal}</h3>
        </div>
      </div>
    </div>
  );
}
