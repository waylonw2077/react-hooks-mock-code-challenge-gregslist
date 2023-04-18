import React, { useState } from "react";
import Search from "./Search";

function Header({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const handleQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search
        searchQuery={searchQuery}
        onSearch={handleSearch}
        onQueryChange={handleQueryChange}
      />
    </header>
  );
}

export default Header;
