// PriceRangeFilter.js
import React from "react";

const PriceRangeFilter = ({ value, onChange }) => {
  return (
    <>
      <label>Price filter</label>
      <input
        type="range"
        className="form-range"
        value={value}
        onChange={onChange}
        min="0"
        max="5000"
        data-min={`$${value[0]}`}
        data-max={`$${value[1]}`}
      />
      <div className="range-tooltip">${value[0]}</div>
    </>
  );
};

export default PriceRangeFilter;
