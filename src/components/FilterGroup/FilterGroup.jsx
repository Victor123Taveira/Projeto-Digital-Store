import React from "react";

const FilterGroup = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
    <aside className="filter-group">
      <h3>Filtrar por Categoria</h3>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            <label>
              <input
                type="radio"
                name="category"
                value={category}
                checked={selectedCategory === category}
                onChange={() => onCategoryChange(category)}
              />
              {category}
            </label>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default FilterGroup;
