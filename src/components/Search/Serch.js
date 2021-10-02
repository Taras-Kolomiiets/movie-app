import React from "react";

const Search = ({ search, setQuery }) => {
  return (
    <form className="search-form">
      <input
        className="form-input"
        type="text"
        placeholder="Search any movie"
        onChange={(event) => setQuery(event.target.value)}
      />
      <button
        onClick={(event) => search(event)}
        className="btn btn-primary mb-2"
      >
        Submit
      </button>
    </form>
  );
};

export default Search;
