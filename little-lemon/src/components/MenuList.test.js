// src/components/MenuList.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import MenuList from "./MenuList";

describe("MenuList", () => {
  it("renders menu items from props", () => {
    const items = [
      { idMeal: "1", strMeal: "Meal 1", strMealThumb: "img1.jpg" },
      { idMeal: "2", strMeal: "Meal 2", strMealThumb: "img2.jpg" },
    ];
    render(<MenuList items={items} />);
    expect(screen.getByText("Meal 1")).toBeInTheDocument();
    expect(screen.getByText("Meal 2")).toBeInTheDocument();
  });

  it("shows message if no items", () => {
    render(<MenuList items={[]} />);
    expect(screen.getByText(/no menu items found/i)).toBeInTheDocument();
  });
});
