import React, { useState, useEffect } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((response) => response.json())
      .then((data) => setListings(data))
      .catch((error) => console.error(error));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    }).then(() => {
      setListings(listings.filter((listing) => listing.id !== id));
    });
  };

  return (
    <main>
      <ul className="cards">
        {listings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} onDelete={handleDelete} />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
