import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MenuFilter from "./components/MenuFilter";
import MenuList from "./components/MenuList";
import ReservationForm from "./components/ReservationForm";
import SuccessBanner from "./components/SuccessBanner";
import "./App.css";

function Home({ onReserve }) {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch categories on mount
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data.categories.map((cat) => cat.strCategory));
        setSelectedCategory(data.categories[0].strCategory);
      });
  }, []);

  // Fetch meals when category changes
  useEffect(() => {
    if (!selectedCategory) return;
    setLoading(true);
    fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMeals(data.meals || []);
        setLoading(false);
      });
  }, [selectedCategory]);

  return (
    <>
      <Hero onReserve={onReserve} />
      <section className="menu-section">
        <h2>ORDER FOR DELIVERY!</h2>
        <MenuFilter
          categories={categories}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />
        {loading ? <div>Loading menu...</div> : <MenuList items={meals} />}
      </section>
    </>
  );
}

function App() {
  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <Router>
      <div className="App">
        <Header />
        {showSuccess && <SuccessBanner />}
        <Routes>
          <Route
            path="/"
            element={
              <Home
                onReserve={() => {
                  window.location.href = "/reserve";
                }}
              />
            }
          />
          <Route
            path="/reserve"
            element={
              <ReservationForm
                onSuccess={() => {
                  setShowSuccess(true);
                  setTimeout(() => {
                    setShowSuccess(false);
                    window.location.href = "/";
                  }, 2000);
                }}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
