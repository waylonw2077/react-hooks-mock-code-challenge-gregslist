import React, { useState, useEffect } from "react";

function ListingCard({ listing, onDelete }) {
  const handleDelete = () => {
    onDelete(listing.id);
  };

  return (
    <li className="card" key={listing.id}>
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        <button className="emoji-button favorite">☆</button>
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button className="emoji-button delete" onClick={handleDelete}>
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
