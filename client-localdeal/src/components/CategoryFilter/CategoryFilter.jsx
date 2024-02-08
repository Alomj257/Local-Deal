// CategoryFilter.js
import React from "react";

const CategoryFilter = ({ categories, selectedCategory, onClick }) => {
  return (
    <div className="card">
      <div className="card-header">Food category</div>
      <ul className="list-group list-group-flush">
        <li
          key="all"
          className={`list-group-item ${
            selectedCategory === null ? "active" : ""
          }`}
          onClick={() => onClick(null)}
        >
          All
        </li>
        {categories.map((category) => (
          <li
            key={category}
            className={`list-group-item ${
              selectedCategory === category ? "active" : ""
            }`}
            onClick={() => onClick(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryFilter;
