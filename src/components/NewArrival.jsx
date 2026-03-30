// NewArrival.jsx
import React from "react";
import { dummyProducts as products } from "../assets/asstes";
import ProductCard from "./ProductCard";

function NewArrival() {
  const newArrivals = products
    .filter((product) => product.inStock)
    .slice(0, 10);

  return (
    <section className="mt-16 sm:mt-20 lg:mt-24 px-4 sm:px-6 lg:px-10">
      
      {/* Section Heading */}
      <div className="flex items-center justify-between mb-8">
        <div className="w-full text-center relative">
          <h2
            className="inline-block text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 relative
            after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-3
            after:w-16 sm:after:w-20 after:h-1 after:bg-blue-500 after:rounded-full"
          >
            New Arrivals
          </h2>
        </div>

        <button
          className="absolute right-4 sm:right-6 lg:right-10 text-xs sm:text-sm md:text-base
          text-gray-500 hover:text-black transition whitespace-nowrap"
        >
          View All →
        </button>
      </div>

      {/* Product Grid */}
      <div
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5
        gap-4 sm:gap-5 md:gap-6 lg:gap-8"
      >
        {newArrivals.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default NewArrival;