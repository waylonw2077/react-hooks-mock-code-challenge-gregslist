import React, { useState } from "react";

function Search({ listings, setFiltered, filter, setFilter }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const filteredListings = listings.filter((listing) =>
      listing.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFiltered(filteredListings);
    setFilter(searchQuery);
  };

  const handleQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchQuery}
        onChange={handleQueryChange}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
