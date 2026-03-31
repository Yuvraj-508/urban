import React from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import Fotter from "./components/Fotter";
import TopBanner from "./components/TopBanner";
import AllProducts from "./pages/AllProducts";
import Orders from "./pages/Orders";
// import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import ComingSoon from "./components/ComingSoon";
import ProductDetails from "./components/ProductDetails";
import ContactUs from "./pages/ConatctUs";
import AuthForm from "./pages/AuthForm";
import Cart from "./pages/Cart";
import AddAddress from "./pages/AddAddress";
import WelcomePopup from "./components/WelcomePopup";

function App() {
  return (
    <div className="flex flex-col min-h-screen text-default text-gray-700 bg-white">
      <Toaster />
      <TopBanner />
      <Navbar />

      <WelcomePopup/>

      {/* Page Content */}
      <main className="flex flex-col px-4 md:px-16 lg:px-14 xl:px-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/all-products" element={<AllProducts />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/products/:category/:id" element={<ProductDetails />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="/login" element={<AuthForm />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/address" element={<AddAddress />} />
        </Routes>
      </main>

      <Fotter />

    </div>
  );
}

export default App;
