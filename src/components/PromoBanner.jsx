import React from "react";
import bannerImg from "../assets/banner.png"; // Ensure correct image path

const PromoBanner = () => {
  return (
    <div className="flex justify-center mt-10 px-4">
      <div className="relative w-full max-w-6xl h-52 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl group transition-all duration-300">
        {/* Banner Image */}
        <img
          src={bannerImg}
          alt="Promo Banner"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent flex items-center px-6 sm:px-10">
          <div className="text-white z-10 max-w-xl space-y-3 animate-fadeInUp">
            <h2 className="text-2xl sm:text-4xl font-extrabold drop-shadow-md">
              Upgrade Your Mobile Experience
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-md leading-relaxed">
              Explore premium accessories that blend sleek design, durability & style.
            </p>
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-md shadow-lg hover:scale-105 transition-all">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
