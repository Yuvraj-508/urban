import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { dummyProducts } from "../assets/asstes";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";

const ProductDetails = () => {
  const { category, id } = useParams();
  const { cartItems, setCartItems, addToCart, getCartCount, navigate } =
    useAppContext();
  const [thumbnail, setThumbnail] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const product =
    dummyProducts.find(
      (item) =>
        item._id === id &&
        item.category.toLowerCase() === category.toLowerCase(),
    ) || null;

  useEffect(() => {
    if (product) {
      setThumbnail(product.image[0]);
      setSelectedSize(null);
      setSelectedColor(null);
    }
  }, [product]);
  const handleAddToCart = () => {
    if (!selectedSize && !selectedColor) {
      toast.error("Please select size and color");
      return;
    }

    if (!selectedSize) {
      toast.error("Please select a size");
      return;
    }

    if (!selectedColor) {
      toast.error("Please select a color");
      return;
    }

    addToCart(product._id, selectedSize, selectedColor);
  };
  const handleBuyNow = () => {
    if (!selectedSize && !selectedColor) {
      toast.error("Please select size and color");
      return;
    }

    if (!selectedSize) {
      toast.error("Please select a size");
      return;
    }

    if (!selectedColor) {
      toast.error("Please select a color");
      return;
    }

    addToCart(product._id, selectedSize, selectedColor);
    navigate("/cart");
  };

  if (!product) return <p className="p-10">Product not found</p>;

  return (
    <div className="max-w-6xl w-full  mx-auto">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-3   md:px-8 lg:px-12">
        {/* Breadcrumb */}
        <p className="text-xs md:text-sm text-gray-500 mb-6">
          Home / Products / {product.category} /
          <span className="text-indigo-600 font-medium"> {product.name}</span>
        </p>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* IMAGE SECTION */}
       <div className="flex flex-col-reverse md:flex-row gap-4 h-full w-full">
  {/* Thumbnails */}
  <div className="flex md:flex-col gap-3 justify-center md:justify-start">
    {product.image.map((img, index) => (
      <div
        key={index}
        onClick={() => setThumbnail(img)}
        className={`w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 border rounded-lg overflow-hidden cursor-pointer
        ${thumbnail === img ? "border-indigo-500" : "border-gray-200"}`}
      >
        <img
          src={img}
          alt={`thumbnail-${index}`}
          className="w-full h-full object-contain p-1"
        />
      </div>
    ))}
  </div>

  {/* Main Image */}
  <div
    className="border border-gray-300 w-full max-w-[500px] aspect-square rounded-xl
    flex items-center justify-center bg-gray-50 overflow-hidden mx-auto"
  >
    <img
      src={thumbnail}
      alt={product.name}
      className="max-w-full max-h-full object-contain hover:scale-110 transition duration-300"
    />
  </div>
</div>

          {/* PRODUCT INFO */}
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-2 text-yellow-500 text-sm">
              ⭐⭐⭐⭐☆
              <span className="text-gray-500 text-xs">(120 reviews)</span>
            </div>

            {/* Price */}
            <div className="mt-6 flex items-center gap-4">
              <p className="text-gray-400 line-through text-lg">
                ₹{product.price}
              </p>

              <p className="text-3xl font-bold text-gray-800">
                ₹{product.offerPrice}
              </p>

              <span className="text-green-600 text-sm font-medium">
                Save ₹{product.price - product.offerPrice}
              </span>
            </div>

            <p className="text-gray-500 text-sm mt-1">Inclusive of all taxes</p>

            {/* COLOR */}
            <div className="mt-8">
              <p className="font-medium mb-3">Select Color</p>

              <div className="flex flex-wrap gap-3 overflow-hidden">
                {product.colors.map((item, index) => (
                  <button
                    key={index}
                    disabled={!item.available}
                    onClick={() =>
                      item.available && setSelectedColor(item.color)
                    }
                    className={`relative px-4 py-2 border rounded-lg flex items-center gap-2 text-sm

${selectedColor === item.color ? "bg-indigo-600 text-white" : "bg-white"}

${!item.available ? "opacity-40 cursor-not-allowed" : "hover:border-indigo-500"}
`}
                  >
                    <span
                      className="w-4 h-4 rounded-full border"
                      style={{ backgroundColor: item.color }}
                    ></span>

                    {item.color}

                    {!item.available && (
                      <span className="absolute inset-0 flex items-center justify-center">
                        <span className="w-full h-[2px] bg-gray-500 rotate-45"></span>
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* SIZE */}
            <div className="mt-8">
              <p className="font-medium mb-3">Select Size</p>

              <div className="flex flex-wrap gap-3">
                {product.sizes.map((item, index) => (
                  <button
                    key={index}
                    disabled={!item.available}
                    onClick={() => item.available && setSelectedSize(item.size)}
                    className={`px-4 py-2 border rounded-lg text-sm

${selectedSize === item.size ? "bg-indigo-600 text-white" : "bg-white"}

${!item.available ? "opacity-40 cursor-not-allowed" : "hover:border-indigo-500"}
`}
                  >
                    {item.size}
                  </button>
                ))}
              </div>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <button
                onClick={handleAddToCart}
                className="w-full py-3 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium transition"
              >
                Add to Cart
              </button>

              <button
                onClick={handleBuyNow}
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:scale-105 transition font-medium"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* ABOUT PRODUCT SECTION */}

      <div className="mt-24">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Why You'll Love It
          </h2>

          <span className="block h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-600 mt-2 rounded-full mx-auto"></span>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
          {/* CARD 1 */}
          <div className="group p-6 md:p-8 border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 mb-4 group-hover:bg-indigo-600 group-hover:text-white transition">
              👟
            </div>

            <h3 className="font-semibold text-lg mb-2 group-hover:text-indigo-600 transition">
              Premium UA+ Quality
            </h3>

            <p className="text-gray-500 text-sm leading-relaxed">
              Crafted with high-grade materials and excellent finishing,
              delivering premium sneaker quality and durability.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="group p-6 md:p-8 border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 mb-4 group-hover:bg-indigo-600 group-hover:text-white transition">
              ⚡
            </div>

            <h3 className="font-semibold text-lg mb-2 group-hover:text-indigo-600 transition">
              All Day Comfort
            </h3>

            <p className="text-gray-500 text-sm leading-relaxed">
              Lightweight cushioning and breathable design make these sneakers
              perfect for everyday wear and long hours.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="group p-6 md:p-8 border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 mb-4 group-hover:bg-indigo-600 group-hover:text-white transition">
              🔥
            </div>

            <h3 className="font-semibold text-lg mb-2 group-hover:text-indigo-600 transition">
              Street Style Design
            </h3>

            <p className="text-gray-500 text-sm leading-relaxed">
              Modern sneaker aesthetics inspired by top streetwear trends to
              elevate your outfit effortlessly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
