import React from "react";
import { FaBolt } from "react-icons/fa";

const HeroBanner = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-white text-center py-20 sm:pb-52 px-6 overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-white opacity-10 rounded-full blur-3xl animate-pulse"></div>

      <h1 className="text-5xl font-extrabold drop-shadow-lg">
        Welcome to <span className="text-yellow-300">TechStore</span>
      </h1>

      <p className="mt-4 text-lg md:text-xl font-medium text-white/90">
        Premium Mobile Accessories & Cutting-edge Gadgets
      </p>

      <div className="mt-6 flex justify-center">
        <a
          href="#products"
          className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-yellow-300 hover:text-black transition-all font-semibold px-6 py-3 rounded-full shadow-lg"
        >
          <FaBolt className="animate-pulse" />
          Explore Products
        </a>
      </div>

      {/* Wave bottom */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,224L60,192C120,160,240,96,360,90.7C480,85,600,139,720,154.7C840,171,960,149,1080,144C1200,139,1320,149,1380,154.7L1440,160V320H1380C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320H0Z"
        ></path>
      </svg>
    </div>
  );
};

export default HeroBanner;
