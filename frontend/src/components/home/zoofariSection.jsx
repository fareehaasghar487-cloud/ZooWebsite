import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// ✅ AOS imports
import AOS from "aos";
import "aos/dist/aos.css";

const ZoofariSection = () => {
  const navigate = useNavigate();

  // ✅ Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration
      easing: "ease-in-out",
      once: true, // animate only once on scroll
    });
  }, []);

  return (
    <section className="w-full bg-gradient-to-br from-green-50 to-white py-16 px-6 md:px-20">
      
      {/* Welcome Badge */}
      <div className="mb-8" data-aos="fade-down">
        <span className="inline-block bg-green-100 text-green-900 font-semibold px-6 py-2 rounded-full shadow-md tracking-wide">
          🦁 WELCOME TO CITY ZOO
        </span>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-10">

        {/* Image Section */}
        <div className="w-full md:w-1/2 relative group" data-aos="fade-right">
          <img
            src="/PIC-1.jpg"
            alt="Zoo Animals"
            className="rounded-3xl shadow-xl object-cover w-full h-[420px] md:h-[520px]
                       transform group-hover:scale-105 transition duration-500"
          />

          {/* Image Overlay */}
          <div className="absolute inset-0 bg-black/30 rounded-3xl opacity-0 
                          group-hover:opacity-100 transition duration-500 flex items-center justify-center">
            <p className="text-white text-xl font-semibold tracking-wide">
              Explore Wildlife Wonders 🦓
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div
          className="w-full md:w-1/2 bg-green-900 text-white rounded-3xl 
                     border-4 border-yellow-400 p-10 shadow-xl"
          data-aos="fade-left"
          data-aos-delay="100"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
            Why Visit <span className="text-yellow-400">Zoofari Park</span>?
          </h2>

          <p className="text-gray-200 mb-6 leading-relaxed">
            At <strong>CityZoo</strong>, we bring people closer to nature through
            unforgettable wildlife experiences. From conservation awareness
            to family-friendly attractions, every visit is designed to educate,
            inspire, and entertain.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-green-800 p-4 rounded-xl text-center shadow-md" data-aos="zoom-in">
              <p className="text-2xl font-bold text-yellow-400">180+</p>
              <p className="text-sm text-gray-200">Acres Covered</p>
            </div>

            <div className="bg-green-800 p-4 rounded-xl text-center shadow-md" data-aos="zoom-in" data-aos-delay="100">
              <p className="text-2xl font-bold text-yellow-400">100+</p>
              <p className="text-sm text-gray-200">Animal Species</p>
            </div>

            <div className="bg-green-800 p-4 rounded-xl text-center shadow-md" data-aos="zoom-in" data-aos-delay="200">
              <p className="text-2xl font-bold text-yellow-400">24/7</p>
              <p className="text-sm text-gray-200">Animal Security</p>
            </div>
          </div>

          {/* Button */}
          <button
            onClick={() => navigate("/about")}
            className="bg-yellow-400 text-green-900 px-8 py-3 rounded-full 
                       font-bold tracking-wide shadow-lg
                       hover:bg-yellow-300 hover:scale-105 transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Read More →
          </button>
        </div>
      </div>
    </section>
  );
};

export default ZoofariSection;
