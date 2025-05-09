import React from "react";
import "./MenuFilter.css";

export default function MenuFilter({ categories, selected, onSelect }) {
  return (
    <div className="menu-filter">
      {categories.map((cat) => (
        <button
          key={cat}
          className={selected === cat ? "active" : ""}
          onClick={() => onSelect(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
