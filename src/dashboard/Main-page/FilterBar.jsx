import React, { useState } from "react";
import "../../styles/screen/Main-page/FilterBar.css";

const FilterBar = () => {
  const [filters, setFilters] = useState({});

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="filter-container">
      <h2>Book Custom Firm Land</h2>

      {/* TOP ROW */}
      <div className="row top-row">
        <input name="search" placeholder="Search..." onChange={handleChange} />

        <select name="country" onChange={handleChange}>
          <option>All Countries</option>
        </select>

        <select name="state" onChange={handleChange}>
          <option>All States</option>
        </select>

        <select name="city" onChange={handleChange}>
          <option>All Cities</option>
        </select>

        <select name="status" onChange={handleChange}>
          <option>All Status</option>
        </select>
      </div>

      <div className="row bottom-row">
        <select name="type" onChange={handleChange}>
          <option>All Types</option>
        </select>

        <select name="bedrooms" onChange={handleChange}>
          <option>Bedrooms</option>
        </select>

        <select name="bathrooms" onChange={handleChange}>
          <option>Bathrooms</option>
        </select>

        <input name="minArea" placeholder="Min. Area" onChange={handleChange} />
        <input name="maxArea" placeholder="Max. Area" onChange={handleChange} />

        <button className="book-btn">Book</button>
      </div>
    </div>
  );
};

export default FilterBar;