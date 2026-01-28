import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const stats = [
  {
    icon: "🐾",
    number: "12,345",
    label: "Total Animals",
    suffix: "+",
    color: "from-green-400 to-emerald-600",
  },
  {
    icon: "👥",
    number: "6,789",
    label: "Daily Visitors",
    suffix: "+",
    color: "from-blue-400 to-cyan-600",
  },
  {
    icon: "🏅",
    number: "2,345",
    label: "Total Memberships",
    suffix: "+",
    color: "from-amber-400 to-orange-500",
  },
  {
    icon: "🛡️",
    number: "4,567",
    label: "Animals Saved",
    suffix: "+",
    color: "from-purple-400 to-violet-600",
  },
];

const StatsSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true,     // animate only once
      offset: 100,    // offset to trigger animation
    });
  }, []);

  return (
    <section
      className="relative bg-cover bg-center text-white py-20 overflow-hidden"
      style={{ backgroundImage: "url('/bg-1.jpg')" }}
    >
      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-emerald-900/60 mix-blend-multiply"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500 rounded-full mix-blend-overlay opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-overlay opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-down">
          <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold text-emerald-200 mb-4 backdrop-blur-sm">
            Making a Difference
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Impact in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-cyan-300">
              Numbers
            </span>
          </h2>
          <p className="text-lg text-emerald-100 max-w-2xl mx-auto">
            Together, we're creating a better world for wildlife conservation and animal welfare
          </p>
        </div>

        {/* Stats Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center bg-white/10 backdrop-blur-md rounded-2xl p-8 transition-all duration-500 hover:bg-white/20 hover:scale-[1.03] hover:shadow-2xl hover:shadow-emerald-900/30 cursor-pointer border border-white/20"
              data-aos="zoom-in"
              data-aos-delay={index * 150} // stagger animation
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-2xl blur-xl"
                   style={{background: stat.color.replace('from-', '').replace('to-', '').split(' ').join(', ')}}></div>
              
              {/* Animated background circle */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${stat.color} rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-500 -translate-y-4 translate-x-4`}></div>
              
              {/* Icon Container */}
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-white/20 rounded-full blur-md group-hover:blur-xl transition-all duration-500"></div>
                <div className={`relative w-20 h-20 flex items-center justify-center bg-gradient-to-br ${stat.color} rounded-2xl text-3xl transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg`}>
                  {stat.icon}
                </div>
              </div>
              
              {/* Number with suffix */}
              <div className="relative mb-3">
                <h3 className="text-5xl font-bold tracking-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-emerald-100 group-hover:scale-110 inline-block transition-transform duration-500">
                    {stat.number}
                  </span>
                  <span className={`text-3xl font-bold bg-gradient-to-br ${stat.color} bg-clip-text text-transparent ml-2`}>
                    {stat.suffix}
                  </span>
                </h3>
              </div>
              
              {/* Label */}
              <p className="text-lg font-medium text-emerald-50 group-hover:text-white transition-colors duration-300 text-center">
                {stat.label}
              </p>
              
              {/* Animated underline */}
              <div className={`w-0 group-hover:w-12 h-1 bg-gradient-to-r ${stat.color} rounded-full mt-4 transition-all duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-16" data-aos="fade-up">
          <p className="text-emerald-200/80 text-sm font-medium">
            * Numbers updated in real-time. Last updated: Today
          </p>
          <div className="inline-flex items-center justify-center space-x-2 mt-6 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors duration-300 cursor-pointer group">
            <span className="text-emerald-100 group-hover:text-white">Explore Our Impact Report</span>
            <span className="text-emerald-300 group-hover:translate-x-2 transition-transform duration-300">→</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 1s ease-out forwards; }
      `}</style>
    </section>
  );
};

export default StatsSection;
