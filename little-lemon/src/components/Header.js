import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <button className="menu-btn" aria-label="Open menu">
        <span />
        <span />
        <span />
      </button>
      <div className="logo">
        <img
          src="https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/main/src/assets/lemon.png"
          alt="Little Lemon Logo"
          onError={(e) => {
            e.target.onerror = null;
            e.target.style.display = 'none';
            e.target.parentElement.innerHTML = '🍋 Little Lemon';
          }}
        />
        <span>Little Lemon</span>
      </div>
      <button className="cart-btn" aria-label="View cart">
        <img
          src="https://img.icons8.com/ios-filled/24/000000/shopping-cart.png"
          alt="Cart"
        />
      </button>
    </header>
  );
}
