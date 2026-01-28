import React from "react";
import bg from "../assets/bg.jpg"

const HomeSection = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <img 
          src={bg}
          alt="College Campus"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        {/* Animated Welcome Text */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-down">
          Welcome to <span className="text-blue-400">FMUN</span>
        </h1>

        {/* Tagline with animation delay */}
        <p className="text-xl md:text-2xl text-white max-w-2xl mb-8 animate-fade-in-down animate-delay-300">
          Fazaia Model United Nations - Shaping bright futures.
        </p>

        {/* Animated Button */}
        <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transform hover:scale-105 transition-all duration-300 animate-bounce animate-delay-500 shadow-lg">
          Apply Now
        </button>

        {/* Floating elements for visual interest */}
        <div className="absolute top-20 left-20 w-16 h-16 rounded-full bg-blue-400 opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full bg-yellow-400 opacity-20 animate-float-delay"></div>
      </div>
    </div>
  );
};

export default HomeSection;