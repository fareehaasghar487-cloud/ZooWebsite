import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ServiceFile = () => {

  /* ✅ AOS Init (ADDED) */
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div
      className="relative h-screen bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: "url('PIC-1.jpg')",
      }}
    >
      {/* 🌑 Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>

      {/* 🌿 Hero Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
        
        <h1
          className="text-4xl md:text-6xl font-extrabold text-white leading-tight"
          data-aos="fade-up"
        >
          Welcome to{" "}
          <span className="text-green-400 drop-shadow-lg">
            Wild Zoo
          </span>
        </h1>

        <p
          className="text-lg md:text-2xl text-gray-200 mt-6 max-w-2xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Explore, discover, and shop unforgettable wildlife adventures in a
          world where nature meets excitement.
        </p>

        {/* 🔘 Call-to-Action Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 mt-8"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:scale-105 transition-all duration-300">
            Explore Now
          </button>

          <button className="border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceFile;
