import React from "react";

const Card = ({ img, name, price, rating, category, description, onAddToCart }) => {
  return (
    <div className="card">
      <img src={img} alt={name} className="card-image" />
      <h3>{name}</h3>
      <p className="category">{category}</p>
      <p className="price">₹{price.toFixed(2)}</p>
      <p className="description">{description}</p>
      <p className="rating">⭐ {rating}</p>
      <button className="btn" onClick={onAddToCart}>Add to Cart</button>
    </div>
  );
};

export default Card;