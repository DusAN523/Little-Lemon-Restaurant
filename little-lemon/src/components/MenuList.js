import React from "react";
import MenuItem from "./MenuItem";
import "./MenuList.css";

export default function MenuList({ items }) {
  if (!items.length) return <div>No menu items found.</div>;
  return (
    <div className="menu-list">
      {items.map((item) => (
        <MenuItem key={item.idMeal} {...item} />
      ))}
    </div>
  );
}
