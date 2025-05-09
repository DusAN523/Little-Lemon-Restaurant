import React from "react";
import "./Hero.css";
import { useNavigate } from "react-router-dom";

export default function Hero({ onReserve }) {
  const navigate = useNavigate();
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>
          <span className="yellow">Little Lemon</span>
          <br />
          <span className="city">Chicago</span>
        </h1>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <button className="reserve-btn" onClick={() => navigate("/reserve")}>
          Reserve a table
        </button>
      </div>
      <div className="hero-img">
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80"
          alt="Mediterranean food"
        />
      </div>
    </section>
  );
}
