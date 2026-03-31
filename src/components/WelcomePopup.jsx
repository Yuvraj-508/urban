import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function WelcomePopup() {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 500);

    const hideTimer = setTimeout(() => {
      setShowPopup(false);
    }, 3500);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4 animate-fadeIn">
      <div
        className="relative w-full max-w-md rounded-3xl bg-white p-6 sm:p-8 shadow-2xl overflow-hidden
        animate-[popup_0.5s_ease-out]"
      >
        {/* Background Glow */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>

        {/* Close Button */}
        <button
          onClick={() => setShowPopup(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-black text-xl"
        >
          ×
        </button>

        {/* Content */}
        <div className="relative z-10 text-center">
          <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white text-2xl shadow-lg">
            👟
          </div>

          <h2 className="mt-5 text-2xl sm:text-3xl font-bold text-gray-800">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              UrbanKicks
            </span>
          </h2>

          <p className="mt-3 text-sm sm:text-base text-gray-500 leading-relaxed">
            Discover premium sneakers with unmatched style, comfort, and
            streetwear vibes.
          </p>

          <button
            onClick={() => {
              navigate("/");
              setShowPopup(false);
            }}
            className="mt-6 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium shadow-lg hover:scale-105 transition duration-300"
          >
            Explore All
          </button>
        </div>
      </div>
    </div>
  );
}

export default WelcomePopup;
