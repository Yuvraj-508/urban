import React from "react";
import { useNavigate } from "react-router";

function ProductCard({ product }) {

  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(`/products/${product.category.toLowerCase()}/${product._id}`);
        scrollTo(0, 0);
      }}
      className="border border-gray-200 rounded-xl p-3 bg-white
      hover:shadow-xl transition duration-300 cursor-pointer
      w-62 group"
    >

      {/* Image */}
      <div className="bg-[#f5f5f5] rounded-lg overflow-hidden
      w-full h-30 md:h-48 flex items-center justify-center">

        <img
          src={product.image[0]}
          alt={product.name}
          className="h-full w-full object-contain
          transition-transform duration-500
          hover:scale-125 hover:rotate-10"
        />

      </div>

      {/* Details */}
      <div className="mt-3">

        <p className="text-xs md:text-sm text-gray-500">
          {product.category}
        </p>

        <p className="text-sm md:text-base font-semibold text-gray-800 truncate">
          {product.name}
        </p>

        <div className="mt-1 flex items-center gap-2">

          <span className="text-base md:text-lg font-bold text-indigo-600">
            ₹{product.offerPrice}
          </span>

          <span className="text-xs md:text-sm text-gray-400 line-through">
            ₹{product.price}
          </span>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;
