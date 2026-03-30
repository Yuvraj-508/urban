import React from "react";
import { categories } from "../assets/asstes";
import { useNavigate } from "react-router";

function Categories() {

  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    if (category.text === "Shoes") {
      navigate("/all-products");
    } else {
      navigate("/coming-soon");
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="mt-24 px-4 md:px-8 lg:px-16">

      {/* Heading */}
      <div className="text-center">
        <p className="text-2xl md:text-3xl font-semibold">
          Categories
        </p>

        <span className="block h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-600 mt-2 rounded-full mx-auto"></span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">

        {categories.map((category, idx) => (

          <div
            key={idx}
            onClick={() => handleCategoryClick(category)}
            className="relative rounded-2xl overflow-hidden cursor-pointer group md:shadow-sm md:hover:shadow-xl transition duration-300"
          >

            {/* Image */}
            <img
              src={category.image}
              alt={category.text}
              className="w-full h-40 sm:h-52 md:h-64 object-cover"
            />

            {/* Blur Overlay */}
            <div
              className="absolute inset-0 bg-black/20 backdrop-blur-[4px]
              transition-transform duration-700 ease-out
              group-hover:translate-y-full"
            ></div>

            {/* Category Text */}
            <div
              className="absolute bottom-4 left-1/2 -translate-x-1/2 
              bg-white/90 px-4 py-2 rounded-full shadow-md z-10"
            >
              <p className="text-sm md:text-base font-semibold text-gray-800">
                {category.text}
              </p>
            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Categories;