import React from "react";

const SearchBar = ({ value, onChange }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
      <div className="input-group">
        <input
          type="search"
          placeholder="Search food by location or category"
          aria-describedby="button-addon1"
          className="form-control border-0 bg-light"
          value={value}
          onChange={handleChange}
        />
        <div className="input-group-append">
          <button
            id="button-addon1"
            type="submit"
            className="btn btn-link text-primary"
          >
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
