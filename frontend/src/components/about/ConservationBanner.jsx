import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaTicketAlt, FaLeaf, FaUsers, FaHandHoldingHeart } from "react-icons/fa";
import BuyTicket from "../buyticketModel/BuyTicket";

const ConservationBanner = () => {
  const [showModal, setShowModal] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hoveredButton, setHoveredButton] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const bannerHeight = 400;
      const progress = Math.min((scrollPosition / bannerHeight) * 100, 100);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAdoptAnimal = () => {
    navigate("/service");
  };

  const handleBuyTicket = () => {
    setShowModal(true);
  };

  // Floating particles
  const particles = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 3 + 2,
  }));

  return (
    <>
      <div className="relative rounded-3xl overflow-hidden shadow-2xl my-16 mx-4 lg:mx-8">
        {/* Background Image with Parallax */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1529243856184-fd5465488984?q=80&w=2069&auto=format&fit=crop')",
              transform: `translateY(${scrollProgress * 0.3}px)`,
              transition: "transform 0.1s ease-out",
            }}
          />
          
          {/* Animated Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/90 via-emerald-800/85 to-yellow-600/80">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(72,187,120,0.2),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(234,179,8,0.15),transparent_50%)]" />
          </div>

          {/* Floating Particles */}
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full bg-yellow-300/30"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: particle.size,
                height: particle.size,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 20 - 10, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-20 py-24 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                className="inline-block mb-6"
              >
                <div className="relative">
                  <FaHeart className="text-red-400 text-6xl drop-shadow-lg" />
                  <motion.div
                    className="absolute -top-2 -right-2"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <FaLeaf className="text-green-400 text-2xl" />
                  </motion.div>
                </div>
              </motion.div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white via-yellow-100 to-green-100 bg-clip-text text-transparent">
                  Join Our Conservation
                </span>
                <br />
                <span className="bg-gradient-to-r from-green-300 via-yellow-300 to-amber-300 bg-clip-text text-transparent">
                  Revolution
                </span>
              </h2>

              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
                Every contribution fuels our mission to protect endangered species,
                restore habitats, and educate future generations about wildlife conservation.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
            >
              {[
                { value: "500+", label: "Animals Rescued", icon: FaHeart, color: "text-red-400" },
                { value: "150+", label: "Species Protected", icon: FaLeaf, color: "text-green-400" },
                { value: "10K+", label: "Visitors Educated", icon: FaUsers, color: "text-blue-400" },
                { value: "98%", label: "Success Rate", icon: FaHandHoldingHeart, color: "text-yellow-400" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                  >
                    <stat.icon className={`text-3xl mb-3 mx-auto ${stat.color}`} />
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-white/80">{stat.label}</div>
                  </motion.div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              {/* Adopt Button */}
              <motion.button
                onMouseEnter={() => setHoveredButton("adopt")}
                onMouseLeave={() => setHoveredButton(null)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleAdoptAnimal}
                className="group relative overflow-hidden px-8 py-4 rounded-2xl font-bold text-lg min-w-[220px]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-500" />
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex items-center justify-center gap-3">
                  <motion.div
                    animate={hoveredButton === "adopt" ? { rotate: 360 } : { rotate: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <FaHeart className="text-white" />
                  </motion.div>
                  <span className="text-white">Adopt an Animal</span>
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={hoveredButton === "adopt" ? { x: 0, opacity: 1 } : {}}
                    className="text-white"
                  >
                    →
                  </motion.div>
                </div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  animate={hoveredButton === "adopt" ? { x: "100%" } : {}}
                  transition={{ duration: 0.6 }}
                />
              </motion.button>

              {/* Ticket Button */}
              <motion.button
                onMouseEnter={() => setHoveredButton("ticket")}
                onMouseLeave={() => setHoveredButton(null)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleBuyTicket}
                className="group relative overflow-hidden px-8 py-4 rounded-2xl font-bold text-lg min-w-[220px] border-2 border-white/50 backdrop-blur-sm"
              >
                <div className="absolute inset-0 bg-white/10" />
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex items-center justify-center gap-3">
                  <motion.div
                    animate={hoveredButton === "ticket" ? { rotate: [0, 20, -20, 0] } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    <FaTicketAlt className="text-white" />
                  </motion.div>
                  <span className="text-white">Buy Tickets</span>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={hoveredButton === "ticket" ? { scale: 1 } : {}}
                    className="text-yellow-300"
                  >
                    ✨
                  </motion.div>
                </div>
                <motion.div
                  className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-300 to-transparent"
                  initial={{ scaleX: 0 }}
                  animate={hoveredButton === "ticket" ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <p className="text-white/70 text-sm md:text-base">
                🐾 100% of proceeds go directly to conservation efforts • Tax-deductible donations • 
                Monthly impact reports • Certificate of adoption included
              </p>
            </motion.div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 via-yellow-400 to-amber-400" />
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-amber-400 via-yellow-400 to-green-400" />
        
        {/* Floating wildlife icons */}
        <motion.div
          className="absolute top-8 left-8 text-4xl opacity-30"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          🐾
        </motion.div>
        <motion.div
          className="absolute bottom-8 right-8 text-4xl opacity-30"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        >
          🌿
        </motion.div>
      </div>

      {/* Ticket Modal */}
      <AnimatePresence>
        {showModal && (
          <BuyTicket
            key="ticket-modal"
            onClose={() => setShowModal(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default ConservationBanner;