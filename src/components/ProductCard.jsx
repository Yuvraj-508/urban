// ProductCard.jsx
import React from "react";
import { useNavigate } from "react-router";

function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(`/products/${product.category.toLowerCase()}/${product._id}`);
        window.scrollTo(0, 0);
      }}
      className="border border-gray-200 rounded-xl p-2 bg-white
      hover:shadow-lg transition duration-300 cursor-pointer
      w-full max-w-[170px] sm:max-w-[220px] md:max-w-[250px] lg:max-w-[280px]
      mx-auto"
    >
      {/* Image */}
      <div
        className="bg-[#f5f5f5] rounded-lg overflow-hidden
        w-full h-36 sm:h-44 md:h-48 flex items-center justify-center"
      >
        <img
          src={product.image[0]}
          alt={product.name}
          className="h-full w-full object-contain
          transition-transform duration-500
          hover:scale-125 hover:rotate-6"
        />
      </div>

      {/* Details */}
      <div className="mt-3 sm:mt-4">
        <p className="text-[11px] sm:text-xs md:text-sm text-gray-500">
          {product.category}
        </p>

        <p
          className="text-sm sm:text-base font-semibold text-gray-800
          line-clamp-2 min-h-[40px] sm:min-h-[48px]"
        >
          {product.name}
        </p>

        {/* Price */}
        <div className="mt-2 flex items-center gap-2 flex-wrap">
          <span className="text-sm sm:text-base md:text-lg font-bold text-[#1449e6b7]">
            ₹{product.offerPrice}
          </span>

          <span className="text-[11px] sm:text-sm text-gray-400 line-through">
            ₹{product.price}
          </span>
        </div>

       
      </div>
    </div>
  );
}

export default ProductCard;