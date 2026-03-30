import React from "react";

export default function Newsletter() {
  return (
    <div className="mt-24 px-4">

      <div className="max-w-6xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-sm p-8 md:p-12 grid md:grid-cols-3 gap-10 items-center justify-center"> 

        {/* LEFT SECTION */}
        <div className="md:col-span-1">

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Get Sneaker Deals
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mt-3 rounded-full"></div>

          <p className="text-gray-500 mt-4 text-sm md:text-base">
            Subscribe to get updates about new sneaker drops, exclusive offers,
            and the latest arrivals in our store.
          </p>

          {/* Input */}
          <div className="flex flex-col sm:flex-row gap-3 mt-6">

            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:scale-105 transition">
              Subscribe
            </button>

          </div>

        </div>

        {/* FEATURE 1 */}
        <div className="flex gap-4 items-start">

          <div className="bg-blue-50 p-3 rounded-lg text-xl">
            👟
          </div>

          <div>
            <h3 className="font-semibold text-gray-800">
              New Sneaker Drops
            </h3>

            <p className="text-gray-500 text-sm mt-1">
              Be the first to know when new sneakers and trending styles arrive.
            </p>
          </div>

        </div>

        {/* FEATURE 2 */}
        <div className="flex gap-4 items-start">

          <div className="bg-blue-50 p-3 rounded-lg text-xl">
            🔥
          </div>

          <div>
            <h3 className="font-semibold text-gray-800">
              Exclusive Deals
            </h3>

            <p className="text-gray-500 text-sm mt-1">
              Get early access to limited sneaker deals and discounts.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}