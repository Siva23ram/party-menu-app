import React from "react";
import DishCard from "./DishCard";

export default function DishList({
  dishes,
  cart,
  onAddDish,
  onRemoveDish,
  onViewIngredients,
}) {
  if (dishes.length === 0) {
    return <p>No dishes found.</p>;
  }

  return (
    <div className="dish-list">
      {dishes.map((dish) => (
        <DishCard
          key={dish.id}
          dish={dish}
          quantity={cart[dish.id] || 0}
          onAddDish={() => onAddDish(dish.id)}
          onRemoveDish={() => onRemoveDish(dish.id)}
          onViewIngredients={() => onViewIngredients(dish)}
        />
      ))}
    </div>
  );
}
