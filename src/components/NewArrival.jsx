import React from "react";
import { dummyProducts as products } from "../assets/asstes";
import ProductCard from "./ProductCard";

function NewArrival() {

  const newArrivals = products
    .filter((product) => product.inStock)
    .slice(0, 5);

  return (
    <div className="mt-24 px-4">

      {/* Section Heading */}
      <div className="relative flex items-center justify-center">

        <p className="text-2xl md:text-3xl font-semibold tracking-wide text-center relative inline-block
        after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2
        after:w-16 after:h-[3px] after:bg-blue-500 after:rounded-full">
          New Arrivals
        </p>

        <button className="absolute right-0 text-sm text-gray-500 hover:text-black transition">
          View All →
        </button>

      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-25 mt-10">
        {newArrivals.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>

    </div>
  );
}

export default NewArrival;