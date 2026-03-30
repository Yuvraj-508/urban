import React from "react";
import { NavLink } from "react-router";
import { Instagram, Facebook, MessageCircle } from "lucide-react";

function Fotter() {
  return (
    <footer className="bg-gray-50 border-t mt-24">

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-5">

        {/* Brand Section */}
        <div className="lg:col-span-2">

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            UrbanKicks
          </h2>

          <p className="mt-4 text-gray-500 text-sm leading-relaxed max-w-sm">
            Step into style with UrbanKicks. Discover premium UA+ sneakers,
            trending styles, and unbeatable deals for sneaker lovers.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">

            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white shadow-sm hover:shadow-md transition"
            >
              <Instagram size={18} className="text-pink-500" />
            </a>

            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white shadow-sm hover:shadow-md transition"
            >
              <Facebook size={18} className="text-blue-600" />
            </a>

            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-white shadow-sm hover:shadow-md transition"
            >
              <MessageCircle size={18} className="text-green-500" />
            </a>

          </div>

        </div>

        {/* Quick Links */}
        <div>

          <h3 className="font-semibold text-gray-800 mb-4">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-500 text-sm">

            <li>
              <NavLink to="/" className="hover:text-blue-600 transition">
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/all-products" className="hover:text-blue-600 transition">
                Shop
              </NavLink>
            </li>

            <li>
              <NavLink to="/orders" className="hover:text-blue-600 transition">
                My Orders
              </NavLink>
            </li>

            <li>
              <NavLink to="/contact" className="hover:text-blue-600 transition">
                Contact
              </NavLink>
            </li>

          </ul>

        </div>

        {/* Support */}
        <div>

          <h3 className="font-semibold text-gray-800 mb-4">
            Support
          </h3>

          <ul className="space-y-3 text-gray-500 text-sm">

            <li>
              <a href="#" className="hover:text-blue-600 transition">
                FAQ
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-blue-600 transition">
                Shipping Policy
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-blue-600 transition">
                Return Policy
              </a>
            </li>

          </ul>

        </div>

        {/* Contact */}
        <div>

          <h3 className="font-semibold text-gray-800 mb-4">
            Contact
          </h3>

          <ul className="space-y-3 text-gray-500 text-sm">

            <li>📍 India</li>
            <li>✉ support@urbankicks.com</li>

          </ul>

        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t">

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-500">

          <p>
            © {new Date().getFullYear()} UrbanKicks. All rights reserved.
          </p>

          <div className="flex gap-6">

            <a href="#" className="hover:text-blue-600">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-blue-600">
              Terms
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Fotter;