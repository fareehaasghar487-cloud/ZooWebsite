import React, { useState, useMemo, useEffect } from "react"; // ✅ added useEffect
import {
  FaTicketAlt,
  FaLeaf,
  FaStar,
  FaCalendarAlt,
  FaUsers,
  FaMapMarkedAlt,
  FaShieldAlt,
  FaPlayCircle,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import BuyTicket from "../buyticketModel/BuyTicket";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// ✅ AOS imports
import AOS from "aos";
import "aos/dist/aos.css";

const slides = [
  {
    image: "/bg-1.jpg",
    title: "Wildlife Sanctuary Experience",
    subtitle: "Journey Into Nature's Heart",
    description:
      "Immerse yourself in untouched wilderness and encounter rare species in their natural habitats.",
    features: ["Guided Tours", "Wildlife Photography", "Conservation Talks"],
    season: "Year Round",
    duration: "4-6 Hours",
    rating: 4.9,
  },
  {
    image: "/bg-2.jpg",
    title: "Rainforest Exploration",
    subtitle: "Discover Hidden Ecosystems",
    description:
      "Walk through ancient rainforests, listen to exotic birds, and witness nature’s biodiversity.",
    features: ["Canopy Walks", "Bird Watching", "Botanical Studies"],
    season: "March - October",
    duration: "Full Day",
    rating: 4.8,
  },
  {
    image: "/bg-3.jpg",
    title: "Safari Adventure",
    subtitle: "Experience the Wild Safari",
    description:
      "Embark on an unforgettable safari spotting majestic animals in natural reserves.",
    features: ["Safari Rides", "Animal Tracking", "Sunset Views"],
    season: "All Seasons",
    duration: "3-5 Hours",
    rating: 4.9,
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const currentSlide = useMemo(() => slides[current], [current]);

  // ✅ Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 to-emerald-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:40px_40px]" />

      <div className="container mx-auto px-6 min-h-screen flex flex-col lg:flex-row items-center">
        {/* LEFT CONTENT */}
        <div className="lg:w-1/2 z-20">
          <div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-full mb-6"
            data-aos="fade-down"
          >
            <FaLeaf className="animate-pulse" />
            <span className="text-sm font-semibold">
              #1 Wildlife Experience 2024
            </span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.6 }}
              data-aos="fade-up"
            >
              <h1 className="text-5xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-emerald-300 via-yellow-300 to-teal-300 bg-clip-text text-transparent">
                  {currentSlide.title}
                </span>
              </h1>

              <h2 className="text-2xl text-gray-200 mb-6">
                {currentSlide.subtitle}
              </h2>

              <p className="text-gray-300 text-lg mb-8 max-w-xl">
                {currentSlide.description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* INFO CARDS */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {[
              { icon: <FaCalendarAlt />, label: "Season", value: currentSlide.season },
              { icon: <FaUsers />, label: "Duration", value: currentSlide.duration },
              { icon: <FaStar />, label: "Rating", value: `${currentSlide.rating}/5` },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/10 border border-white/20 rounded-xl p-4 backdrop-blur-sm hover:scale-105 transition"
                data-aos="zoom-in"
                data-aos-delay={i * 100}
              >
                <div className="flex items-center gap-2 text-white font-semibold">
                  {item.icon}
                  {item.label}
                </div>
                <p className="text-gray-300 mt-1">{item.value}</p>
              </div>
            ))}
          </div>

          {/* FEATURES */}
          <div className="flex flex-wrap gap-3 mb-10" data-aos="fade-up">
            {currentSlide.features.map((f, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-emerald-500/20 border border-emerald-400/30 rounded-full text-sm text-emerald-100"
              >
                {f}
              </span>
            ))}
          </div>

          {/* BUTTONS */}
          <div className="flex gap-4" data-aos="fade-up" data-aos-delay="100">
            <button
              onClick={() => setShowModal(true)}
              className="flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold hover:scale-105 transition shadow-lg"
            >
              <FaTicketAlt />
              Book Adventure
            </button>

            <button
              onClick={() => navigate("/about")}
              className="flex items-center gap-3 bg-white/10 border border-white/30 text-white px-8 py-4 rounded-xl hover:bg-white/20 transition"
            >
              Virtual Tour
              <FaPlayCircle />
            </button>
          </div>

          {/* TRUST */}
          <div className="flex gap-6 text-sm text-gray-400 mt-8" data-aos="fade-up" data-aos-delay="200">
            <span className="flex items-center gap-2">
              <FaShieldAlt className="text-green-400" />
              Certified Eco-Tourism
            </span>
            <span className="flex items-center gap-2">
              <FaMapMarkedAlt className="text-blue-400" />
              Guaranteed Sightings
            </span>
          </div>
        </div>

        {/* RIGHT SLIDER */}
        <div className="lg:w-1/2 mt-16 lg:mt-0 relative" data-aos="fade-left">
          <Swiper
            modules={[Autoplay, Navigation, Pagination, EffectFade]}
            effect="fade"
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation
            onSlideChange={(swiper) => setCurrent(swiper.activeIndex)}
            className="rounded-3xl overflow-hidden shadow-2xl"
          >
            {slides.map((slide, i) => (
              <SwiperSlide key={i}>
                <motion.img
                  src={slide.image}
                  alt={slide.title}
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 10 }}
                  className="w-full h-[600px] object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* MODAL */}
      {showModal && <BuyTicket onClose={() => setShowModal(false)} />}
    </section>
  );
};

export default HeroSection;
