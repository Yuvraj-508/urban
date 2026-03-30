import { Link } from "react-router";

function ComingSoon() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-6">

      <div className="text-center">

        {/* Floating Shoe */}
        <div className="text-6xl mb-6 animate-bounce">
          👟
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800">
          Coming Soon
        </h1>

        {/* Animated underline */}
        <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mt-4 rounded-full animate-pulse"></div>

        {/* Description */}
        <p className="text-gray-500 mt-6 text-lg max-w-md mx-auto">
          This category is under development.  
          New sneaker collections will be available soon at <span className="font-semibold text-indigo-600">UrbanKicks</span>.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="inline-block mt-8 px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition shadow-md"
        >
          Back to Home
        </Link>

      </div>

    </div>
  );
}

export default ComingSoon;