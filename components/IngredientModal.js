import React from "react";

export default function IngredientModal({ dish, onClose }) {
  if (!dish) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{dish.name}</h2>
        <p>{dish.description}</p>
        <h3>Ingredients</h3>
        <ul>
          {dish.ingredients.map((ing, idx) => (
            <li key={idx}>
              {ing.name} - {ing.quantity}
            </li>
          ))}
        </ul>
        <button onClick={onClose} className="close-btn">
          Close
        </button>
      </div>
    </div>
  );
}
