import React from "react";
import { dummyProducts } from "../assets/asstes";
import { useNavigate } from "react-router";

function AllProducts() {

  const navigate = useNavigate();

  return (
    <div className="px-4 md:px-16 lg:px-14 xl:px-20 mt-14">

      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-semibold">
          All Sneakers
        </h1>

        <span className="block h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mt-3 rounded-full"></span>

        <p className="text-gray-500 mt-4">
          Explore our latest UA+ premium sneaker collection
        </p>
      </div>


      {/* Products Grid */}
      <div className="flex flex-wrap gap-8 ">

        {dummyProducts.map((product) => (

          <div
            key={product._id}
            onClick={() => {
              navigate(`/products/${product.category.toLowerCase()}/${product._id}`);
              window.scrollTo(0, 0);
            }}

            className="border border-gray-200 rounded-xl p-2 bg-white
            hover:shadow-lg transition duration-300 cursor-pointer
            w-80"
          >

            {/* Image */}
            <div className="bg-[#f5f5f5] rounded-lg overflow-hidden
            w-full h-48 flex items-center justify-center">

              <img
                src={product.image[0]}
                alt={product.name}
                className="h-full w-full object-contain
                transition-transform duration-500
                hover:scale-125 hover:rotate-6"
              />

            </div>


            {/* Details */}
            <div className="mt-4">

              <p className="text-sm text-gray-500">
                {product.category}
              </p>

              <p className="text-base font-semibold text-gray-800 truncate">
                {product.name}
              </p>


              {/* Price */}
              <div className="mt-2 flex items-center gap-2">

                <span className="text-lg font-bold text-indigo-600">
                  ₹{product.offerPrice}
                </span>

                <span className="text-sm text-gray-400 line-through">
                  ₹{product.price}
                </span>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default AllProducts;