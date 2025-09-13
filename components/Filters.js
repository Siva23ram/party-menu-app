export default function Filters({
  categories,
  activeCategory,
  onCategoryChange,
  searchTerm,
  onSearchChange,
  vegFilter,
  onVegFilterChange,
  selectedCountByCategory,
}) {
  const hideVegFilter = activeCategory === "DESSERT";

return (
  <div className="filters-container">
    {/* Category Tabs */}
    <div className="tabs">
      {categories.map((cat) => (
        <button
          key={cat}
          className={`tab-button ${activeCategory === cat ? "active" : ""}`}
          onClick={() => onCategoryChange(cat)}
        >
          {cat} {selectedCountByCategory[cat] > 0 && `(${selectedCountByCategory[cat]})`}
        </button>
      ))}
    </div>

    {/* Search Bar */}
    <input
      type="text"
      placeholder="Search dishes..."
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
      className="search-input"
    />

    {/* Veg Filter Dropdown - only show if category is NOT Desserts */}
    {!hideVegFilter && (
      <select
        value={vegFilter}
    
        onChange={(e) => onVegFilterChange(e.target.value)}
        
        className="veg-filter-select"
      >
        <option value="ALL">All</option>
        <option value="VEG">Veg Only</option>
        <option value="NON-VEG">Non-Veg Only</option>
      </select>
    )}
  </div>
);
}