// src/App.js
import React, { useState } from "react";
import ProductList from "./ProductList";
import "./App.css"; // Add this for styling

const App = () => {
  // Define the product array
  const products = [
    { name: "Smartphone", category: "Electronics", price: 699 },
    { name: "Laptop", category: "Electronics", price: 999 },
    { name: "T-shirt", category: "Clothing", price: 19 },
    { name: "Jeans", category: "Clothing", price: 49 },
    { name: "Novel", category: "Books", price: 12 },
    { name: "E-Reader", category: "Electronics", price: 199 },
    { name: "Jacket", category: "Clothing", price: 89 },
    { name: "Textbook", category: "Books", price: 45 },
  ];

  // State to handle the current filter and filtered products
  const [categoryFilter, setCategoryFilter] = useState("All");

  // Function to handle category filtering
  const handleFilterChange = (category) => {
    setCategoryFilter(category);
  };

  // Filtered products based on the current category
  const filteredProducts = categoryFilter === "All"
    ? products
    : products.filter((product) => product.category === categoryFilter);

  return (
    <div className="app">
      <h1>Product List</h1>
      {/* Filter buttons */}
      <div className="filter-buttons">
        <button onClick={() => handleFilterChange("All")}>All</button>
        <button onClick={() => handleFilterChange("Electronics")}>Electronics</button>
        <button onClick={() => handleFilterChange("Clothing")}>Clothing</button>
        <button onClick={() => handleFilterChange("Books")}>Books</button>
      </div>

      {/* Passing the filtered products to the ProductList component */}
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default App;
