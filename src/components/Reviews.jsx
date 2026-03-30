import React, { useState } from "react";
import Re1 from "../assets/re1.jpeg";
import Re2 from "../assets/re3.jpeg";
import Re3 from "../assets/re4.jpeg";
import Re4 from "../assets/re5.jpeg";
import Re5 from "../assets/re6.jpeg";
import Re6 from "../assets/re7.jpeg";

function Reviews() {

  const [pause, setPause] = useState(false);

  const cardData = [
    { title: "Amazing quality shoes, looks just like original!", image: Re1 },
    { title: "Very comfortable and perfect for daily wear.", image: Re2 },
    { title: "Best UA+ shoes I have purchased.", image: Re3 },
    { title: "Great style and premium finishing.", image: Re4 },
    { title: "Highly recommend for anyone looking for quality.", image: Re5 },
    { title: "Exceptional comfort and support.", image: Re6 },
  ];

  return (
    <>
      <style>
        {`
        .marquee {
          animation: scroll 25s linear infinite;
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        `}
      </style>

      <div className="w-full py-20 mt-20 px-4">

        {/* Heading */}
        <div className="text-center mb-12">

          <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">
            Customer Reviews
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3">
            What Our Customers Say
          </h2>

          <div className="w-20 h-1 bg-blue-500 mx-auto mt-3 rounded-full"></div>

        </div>

        {/* Slider */}
        <div
          className="overflow-hidden max-w-7xl mx-auto relative"
          onMouseEnter={() => setPause(true)}
          onMouseLeave={() => setPause(false)}
        >

          {/* Left Fade */}
          <div className="absolute left-0 top-0 h-full w-16 md:w-24 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />

          {/* Cards */}
          <div
            className="flex marquee"
            style={{ animationPlayState: pause ? "paused" : "running" }}
          >

            {[...cardData, ...cardData].map((card, index) => (

              <div
                key={index}
                className="min-w-[200px] sm:min-w-[220px] md:min-w-[250px] mx-3 h-[260px] md:h-[300px] relative rounded-xl overflow-hidden group cursor-pointer"
              >

                <img
                  src={card.image}
                  alt="review"
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-4 text-center opacity-0 group-hover:opacity-100 transition duration-300">

                  <p className="text-white text-sm md:text-lg font-semibold">
                    {card.title}
                  </p>

                </div>

              </div>

            ))}

          </div>

          {/* Right Fade */}
          <div className="absolute right-0 top-0 h-full w-16 md:w-24 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />

        </div>

      </div>
    </>
  );
}

export default Reviews;