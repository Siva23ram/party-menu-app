import React from "react";

export default function DishCard({
  dish,
  quantity,
  onAddDish,
  onRemoveDish,
  onViewIngredients,
}) {
  return (
    <div className={`dish-card ${quantity > 0 ? "selected" : ""}`}>
      <img
        src={dish.image || "https://placehold.co/300x200?text=No+Image"}
        alt={dish.name}
        className="dish-image"
      />
      <div className="dish-info">
        <h3>{dish.name}</h3>
        <p>{dish.description}</p>
        <div className="dish-actions">
          { quantity > 0 &&(
          <button onClick={onRemoveDish} disabled={quantity === 0}>
            Remove
          </button>
          )}
          { quantity > 0 && (<span className="quantity" disabled={quantity===0} >{quantity}</span>) }
          <button onClick={onAddDish}>Add</button>
          <button onClick={onViewIngredients} className="ingredients-btn">
            Ingredients
          </button>
        </div>
      </div>
    </div>
  );
}
