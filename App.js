import React, { useState, useMemo } from "react";
import { dishes } from "./data/mockDishes";
import Filters from "./components/Filters";
import DishList from "./components/DishList";
import IngredientModal from "./components/IngredientModal";
import "./App.css";

const categories = ["STARTER", "MAIN COURSE", "DESSERT", "SIDES"];

function App() {
  // cart: { [dishId]: quantity }
  const [cart, setCart] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("STARTER");
  const [searchTerm, setSearchTerm] = useState("");
  const [vegFilter, setVegFilter] = useState("ALL"); // "ALL", "VEG", or "NON-VEG"
  const [modalDish, setModalDish] = useState(null);

  // Filter dishes based on category, search, and veg filter
  const filteredDishes = useMemo(() => {
  return dishes.filter((dish) => {
    const matchesCategory = dish.mealType === selectedCategory;
    const matchesSearch = dish.name.toLowerCase().includes(searchTerm.toLowerCase());

    let matchesVeg = true;
    if (vegFilter === "VEG") matchesVeg = dish.type === "VEG";
    else if (vegFilter === "NON-VEG") matchesVeg = dish.type !== "VEG";

    return matchesCategory && matchesSearch && matchesVeg;
  });
}, [selectedCategory, searchTerm, vegFilter]);


  // Add one quantity of dish
  const addDish = (id) => {
    setCart((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  // Remove one quantity of dish
  const removeDish = (id) => {
    setCart((prev) => {
      if (!prev[id]) return prev;
      const newQty = prev[id] - 1;
      if (newQty <= 0) {
        const { [id]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [id]: newQty };
    });
  };

  // Count selected dishes per category (sum quantities)
  const selectedCountByCategory = useMemo(() => {
    const counts = {};
    categories.forEach((cat) => {
      counts[cat] = dishes
        .filter((d) => d.mealType === cat)
        .reduce((sum, d) => sum + (cart[d.id] || 0), 0);
    });
    return counts;
  }, [cart]);

  // Total quantity of all dishes in cart
  const totalSelected = Object.values(cart).reduce((sum, qty) => sum + qty, 0);

  return (
    <div className="app-container">
      <h1>Party Menu Selection</h1>

      <Filters
  categories={categories}
  activeCategory={selectedCategory}
  onCategoryChange={setSelectedCategory}
  searchTerm={searchTerm}
  onSearchChange={setSearchTerm}
  vegFilter={vegFilter}
  onVegFilterChange={setVegFilter}
  selectedCountByCategory={selectedCountByCategory}
/>


      <DishList
        dishes={filteredDishes}
        cart={cart}
        onAddDish={addDish}
        onRemoveDish={removeDish}
        onViewIngredients={setModalDish}
      />

      <div className="summary-bar">
        <div>Total Selected: {totalSelected}</div>
        <button
          disabled={totalSelected === 0}
          onClick={() => alert("Continue clicked!")}
        >
          Continue
        </button>
      </div>

      {modalDish && (
        <IngredientModal dish={modalDish} onClose={() => setModalDish(null)} />
      )}
    </div>
  );
}

export default App;
