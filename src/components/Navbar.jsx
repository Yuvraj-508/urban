import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { assets } from "../assets/asstes";
import { Menu, X, Search } from "lucide-react";
import { useAppContext } from "../context/AppContext";

function Navbar() {

  const navigate = useNavigate();
  const { getCartCount } = useAppContext();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white ">

      <div className="flex items-center justify-between px-4 md:px-12 lg:px-20 py-3">

        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img
            src="/logourban.png"
            alt="logo"
            className="h-12 md:h-14 object-contain"
          />
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">

          <NavLink
            to="/"
            className={({ isActive }) =>
              `transition ${
                isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/all-products"
            className={({ isActive }) =>
              `transition ${
                isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
              }`
            }
          >
            All Products
          </NavLink>

          <NavLink
            to="/orders"
            className={({ isActive }) =>
              `transition ${
                isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
              }`
            }
          >
            My Orders
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `transition ${
                isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
              }`
            }
          >
            Contact
          </NavLink>

        </div>

        {/* Right Section */}
        <div className="flex items-center gap-5">

          {/* Search */}
          <Search
            size={20}
            className="cursor-pointer text-gray-600 hover:text-blue-600 transition"
          />

          {/* Cart */}
          <div
            onClick={() => navigate("/cart")}
            className="relative cursor-pointer"
          >
            <img
              src={assets.nav_cart_icon}
              alt="cart"
              className="w-6 opacity-80"
            />

            {getCartCount() > 0 && (
              <span className="absolute -top-2 -right-2 text-[10px] text-white bg-blue-600 w-5 h-5 flex items-center justify-center rounded-full">
                {getCartCount()}
              </span>
            )}
          </div>

          {/* Login Button */}
          <button
            onClick={() => navigate("/login")}
            className="hidden sm:block px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-full transition"
          >
            Login
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-6 text-sm font-medium bg-white border-t">

          <NavLink to="/" onClick={()=>setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/all-products" onClick={()=>setMenuOpen(false)}>All Products</NavLink>
          <NavLink to="/orders" onClick={()=>setMenuOpen(false)}>My Orders</NavLink>
          <NavLink to="/contact" onClick={()=>setMenuOpen(false)}>Contact</NavLink>

          <button
            onClick={() => {
              navigate("/login");
              setMenuOpen(false);
            }}
            className="mt-2 px-6 py-2 bg-blue-600 text-white rounded-full"
          >
            Login
          </button>

        </div>
      )}

    </nav>
  );
}

export default Navbar;