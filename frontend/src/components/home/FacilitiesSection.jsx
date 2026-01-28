import React, { useState, useEffect } from "react";
import {
  FaParking,
  FaShoppingBag,
  FaCamera,
  FaWifi,
  FaChild,
  FaUtensils,
  FaBed,
  FaArrowRight,
  FaCheckCircle,
  FaUsers,
  FaTicketAlt,
  FaMapMarkedAlt
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const FeatureCard = ({ image, icon, title, desc, features, color, hovered }) => {
  return (
    <div className={`relative group cursor-pointer z-0`}>
      <div className={`bg-white rounded-2xl shadow-lg p-6 h-full transform transition-all duration-500
                        ${hovered ? '-translate-y-4 shadow-2xl scale-[1.02]' : 'hover:shadow-xl'} border border-emerald-100 overflow-hidden`}>
        {/* Gradient Top Bar */}
        <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${color}`}></div>

        {/* Icon */}
        <div className={`mb-5 p-4 rounded-xl bg-gradient-to-br ${color} w-16 h-16 flex items-center justify-center text-white text-2xl transition-transform duration-300 ${hovered ? 'rotate-12 scale-110' : ''}`}>
          {icon}
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{desc}</p>

        {/* Features */}
        <div className="space-y-2">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center text-sm text-gray-700">
              <FaCheckCircle className="text-emerald-500 mr-2 text-xs" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* Hover Arrow */}
        <div className={`absolute bottom-4 right-4 p-2 rounded-full bg-gradient-to-r ${color} text-white transform transition-all duration-300 ${hovered ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`}>
          <FaArrowRight />
        </div>
      </div>

      {/* Floating Animal Image */}
      {hovered && image && (
        <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-xl z-20 animate-float">
          <img src={image} alt={`${title} animal`} className="w-full h-full object-cover" />
        </div>
      )}
    </div>
  );
};

const FacilitiesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  const facilities = [
    {
      image: "ampleParking.jpg",
      icon: <FaParking />,
      title: "Ample Parking",
      desc: "Secure, spacious parking with EV charging stations",
      color: "from-blue-500 to-cyan-500",
      features: ["24/7 Security", "EV Charging", "Covered Parking"]
    },
    {
      image: "Zoo Boutique.jpg",
      icon: <FaShoppingBag />,
      title: "Zoo Boutique",
      desc: "Unique souvenirs, toys, and wildlife merchandise",
      color: "from-purple-500 to-pink-500",
      features: ["Local Crafts", "Eco-friendly", "Gift Wrapping"]
    },
    {
      image: "PhotoExperenice.jpg",
      icon: <FaCamera />,
      title: "Photo Experiences",
      desc: "Professional photography with animals",
      color: "from-amber-500 to-orange-500",
      features: ["Family Photos", "Animal Encounters", "Digital Copies"]
    },
    {
      image: "Free Hi-Speed WiFi.jpg",
      icon: <FaWifi />,
      title: "Free Hi-Speed WiFi",
      desc: "Stay connected throughout your visit",
      color: "from-green-500 to-emerald-500",
      features: ["Unlimited Data", "Multiple Zones", "Family Sharing"]
    },
    {
      image: "Expert Guided Tours.jpg",
      icon: <FaUsers />,
      title: "Expert Guided Tours",
      desc: "Knowledgeable guides for educational tours",
      color: "from-red-500 to-rose-500",
      features: ["Multiple Languages", "Private Tours", "Educational"]
    },
    {
      image: "Kids Play Zone.jpg",
      icon: <FaChild />,
      title: "Kids Play Zone",
      desc: "Safe and fun playground for children",
      color: "from-yellow-500 to-amber-500",
      features: ["Age Groups", "Supervised", "Indoor/Outdoor"]
    },
    {
      image: "Dining Options.jpg",
      icon: <FaUtensils />,
      title: "Dining Options",
      desc: "Variety of cuisines and refreshments",
      color: "from-orange-500 to-red-500",
      features: ["Kid-Friendly", "Vegetarian", "Outdoor Seating"]
    },
    {
      image: "Rest & Relaxation.jpg",
      icon: <FaBed />,
      title: "Rest & Relaxation",
      desc: "Comfortable rest areas and facilities",
      color: "from-teal-500 to-blue-500",
      features: ["Air Conditioned", "Family Rooms", "Nursing Areas"]
    },
  ];

  const featuredFacilities = [
    { icon: <FaTicketAlt />, title: "Online Booking", desc: "Skip the line with digital tickets", stats: "90% faster entry" },
    { icon: <FaMapMarkedAlt />, title: "Digital Guide", desc: "Interactive map on your phone", stats: "Free App Available" },
    { icon: <FaChild />, title: "Family Friendly", desc: "Stroller rentals & baby care", stats: "5 Star Rated" },
  ];

  return (
    <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-green-50 to-emerald-50 overflow-hidden relative">
      {/* Header */}
      <div className="text-center mb-12 relative">
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-emerald-200 rounded-full blur-3xl opacity-60"></div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 relative" data-aos="fade-down">
          <span className="bg-gradient-to-r from-emerald-700 to-green-600 bg-clip-text text-transparent">
            World-Class Facilities
          </span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8" data-aos="fade-up">
          Experience premium amenities designed to make your zoo visit comfortable, memorable, and joyful.
        </p>
        <div className="flex justify-center items-center space-x-4" data-aos="fade-up">
          <div className="w-12 h-1 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full"></div>
          <span className="text-emerald-600 font-semibold">★★★★★ Rated 4.8/5</span>
          <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
        </div>
      </div>

      {/* Featured Facilities */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredFacilities.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-xl p-6 transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl border border-emerald-100"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-emerald-100 to-green-100 rounded-xl">
                  <div className="text-2xl text-emerald-600">{item.icon}</div>
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-800">{item.title}</h3>
                  <p className="text-emerald-500 font-semibold text-sm">{item.stats}</p>
                </div>
              </div>
              <p className="text-gray-600">{item.desc}</p>
              <button className="mt-4 text-emerald-600 font-semibold flex items-center space-x-2 hover:text-emerald-700 transition-colors">
                <span>Learn More</span>
                <FaArrowRight className="text-sm" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Main Facilities */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {facilities.map((item, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <FeatureCard {...item} hovered={hoveredIndex === index} />
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-16 max-w-3xl mx-auto" data-aos="fade-up">
        <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-8 md:p-10 text-center text-white flex flex-col md:flex-row items-center justify-between">
            <div className="text-left mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Plan Your Perfect Visit</h3>
              <p className="text-emerald-100">
                All facilities included with your zoo admission ticket
              </p>
            </div>
            <div className="flex space-x-4">
              <button className="bg-white text-emerald-700 hover:bg-emerald-50 font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg flex items-center space-x-2">
                <FaTicketAlt />
                <span>Book Tickets Now</span>
              </button>
              <button className="bg-emerald-800/50 hover:bg-emerald-800 text-white font-bold py-3 px-6 rounded-xl border border-emerald-400 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                View All Amenities
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Blurs */}
      <div className="absolute left-10 top-1/4 w-40 h-40 bg-emerald-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute right-10 bottom-1/4 w-60 h-60 bg-green-200 rounded-full blur-3xl opacity-20"></div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default FacilitiesSection;
