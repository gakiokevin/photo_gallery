import React, { useState } from "react";
import Gallery from "./Gallery";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Wedding", "Birthday", "Graduation"];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    // You can later use this to filter Gallery items
  };

  return (
    <div className="flex flex-col items-center mt-8 px-4">
      {/* Filter buttons */}
      <div className="flex flex-col lg:flex-row items-center gap-4 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`px-4 py-2 text-sm transition-colors duration-200  border-none bg-white ${
  selectedCategory === category
    ? "text-black font-semibold"
    : "text-gray-600 hover:text-gray-900"
}`}
          >
            {category}
          </button>
        ))}
      
      </div>

      {/* Gallery content */}
      <Gallery />
    </div>
  );
};

export default Projects;
