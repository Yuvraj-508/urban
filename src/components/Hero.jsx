import { useEffect, useState } from "react";

function Hero() {

  const slides = [
    {
      title: "New Arrivals",
      subtitle: "Discover the latest sneaker drops",
      image:
        "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=1600",
    },
    {
      title: "Hot Deals",
      subtitle: "Grab exclusive sneaker discounts",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1600",
    },
    {
      title: "Coming Soon",
      subtitle: "Sneakers launching very soon",
      image:
        "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1600",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(slider);
  }, []);

  return (
    <div className="relative w-full h-[320px] sm:h-[400px] md:h-[500px] lg:h-[550px] overflow-hidden rounded-xl">

      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-all duration-1000 ${
            current === index ? "opacity-100 scale-100" : "opacity-0 scale-110"
          }`}
        >

          {/* Image */}
          <img
            src={slide.image}
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent flex items-center">

            <div className="max-w-7xl mx-auto px-6 md:px-12 text-white">

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {slide.title}
              </h1>

              <p className="mt-3 md:mt-4 text-sm sm:text-base md:text-lg text-gray-200 max-w-md">
                {slide.subtitle}
              </p>

              <button className="mt-5 px-6 py-2.5 md:px-8 md:py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:scale-105 hover:shadow-lg rounded-lg transition">
                Shop Now
              </button>

            </div>

          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-3">

        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2.5 w-2.5 md:h-3 md:w-3 rounded-full transition ${
              current === index
                ? "bg-white scale-125"
                : "bg-white/40"
            }`}
          />
        ))}

      </div>

    </div>
  );
}

export default Hero;