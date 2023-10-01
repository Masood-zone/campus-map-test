import React from "react";
import { HiSearch } from "react-icons/hi";

const SearchBar = () => {
  return (
    <div className="form-control">
      <div className="input-group">
        <input
          type="text"
          placeholder="Search for buildings and more..."
          className="input w-96 text-gray-800 max-sm:w-60 max-[299px]:w-40 max-[399px]:w-44"
        />
        <button className="btn btn-square">
          <HiSearch fontSize={24} />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
