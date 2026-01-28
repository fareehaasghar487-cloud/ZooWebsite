// import React from "react";
// import { FaLeaf, FaUsers, FaShieldAlt, FaHandsHelping, FaSeedling, FaHeart } from "react-icons/fa";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// const CoreValues = () => {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.1,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 30, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 12,
//       },
//     },
//   };

//   const cardHoverVariants = {
//     hover: {
//       y: -15,
//       scale: 1.03,
//       rotateX: 5,
//       transition: {
//         type: "spring",
//         stiffness: 400,
//         damping: 25,
//       },
//     },
//   };

//   const values = [
//     {
//       icon: FaLeaf,
//       title: "Conservation First",
//       description: "We safeguard endangered species through cutting-edge research and comprehensive habitat restoration.",
//       color: "green",
//       features: ["Species Protection", "Habitat Restoration", "Scientific Research", "Ecosystem Balance"],
//       gradient: "from-emerald-500 to-green-600",
//       bgGradient: "from-emerald-50 to-green-100",
//     },
//     {
//       icon: FaUsers,
//       title: "Education & Community",
//       description: "Transformative hands-on learning, school partnerships, and inclusive experiences for all ages.",
//       color: "yellow",
//       features: ["School Programs", "Public Workshops", "Volunteer Engagement", "Digital Learning"],
//       gradient: "from-amber-500 to-yellow-600",
//       bgGradient: "from-amber-50 to-yellow-100",
//     },
//     {
//       icon: FaShieldAlt,
//       title: "Ethical Care",
//       description: "World-class veterinary standards and welfare-first approach guide everything we do.",
//       color: "blue",
//       features: ["Veterinary Excellence", "Animal Welfare", "Sustainable Practices", "Transparency"],
//       gradient: "from-blue-500 to-cyan-600",
//       bgGradient: "from-blue-50 to-cyan-100",
//     },
//     {
//       icon: FaHandsHelping,
//       title: "Collaborative Impact",
//       description: "Building partnerships with communities, governments, and organizations for lasting change.",
//       color: "purple",
//       features: ["Global Partnerships", "Community Outreach", "Policy Advocacy", "Shared Resources"],
//       gradient: "from-purple-500 to-violet-600",
//       bgGradient: "from-purple-50 to-violet-100",
//     },
//     {
//       icon: FaSeedling,
//       title: "Sustainable Future",
//       description: "Implementing eco-friendly practices and long-term conservation strategies for generations.",
//       color: "teal",
//       features: ["Eco-Initiatives", "Carbon Neutrality", "Future Planning", "Legacy Building"],
//       gradient: "from-teal-500 to-emerald-600",
//       bgGradient: "from-teal-50 to-emerald-100",
//     },
//     {
//       icon: FaHeart,
//       title: "Compassion Driven",
//       description: "Every action rooted in empathy, respect, and love for all living beings.",
//       color: "pink",
//       features: ["Empathy First", "Respect for Life", "Compassionate Action", "Emotional Intelligence"],
//       gradient: "from-pink-500 to-rose-600",
//       bgGradient: "from-pink-50 to-rose-100",
//     },
//   ];

//   return (
//     <section className="relative bg-gradient-to-b from-white via-emerald-50/30 to-amber-50/30 py-24 px-4 overflow-hidden">
//       {/* Animated background elements */}
//       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
//         {[...Array(20)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-2 h-2 bg-green-400 rounded-full"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//             }}
//             animate={{
//               y: [0, -20, 0],
//               opacity: [0.3, 0.8, 0.3],
//             }}
//             transition={{
//               duration: 3 + Math.random() * 2,
//               repeat: Infinity,
//               delay: Math.random() * 2,
//             }}
//           />
//         ))}
//       </div>

//       <div className="max-w-7xl mx-auto relative">
//         <motion.div
//           ref={ref}
//           initial="hidden"
//           animate={inView ? "visible" : "hidden"}
//           variants={containerVariants}
//           className="text-center"
//         >
//           {/* Header Section */}
//           <motion.div variants={itemVariants} className="inline-block mb-6">
//             <span className="text-sm font-semibold text-green-800 bg-green-100/80 px-5 py-2 rounded-full border border-green-200 shadow-sm inline-flex items-center gap-2">
//               <FaLeaf className="text-green-600" />
//               GUIDING PRINCIPLES
//             </span>
//           </motion.div>

//           <motion.h2 
//             variants={itemVariants}
//             className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-green-800 via-yellow-600 to-blue-600 bg-clip-text text-transparent"
//           >
//             Our <span className="relative">
//               Core
//               <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full"></span>
//             </span>{" "}
//             <span className="relative">
//               Values
//               <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-yellow-500 to-amber-400 rounded-full"></span>
//             </span>
//           </motion.h2>

//           <motion.p 
//             variants={itemVariants}
//             className="text-xl text-gray-700 max-w-3xl mx-auto mb-16 leading-relaxed"
//           >
//             These fundamental principles shape our actions, guide our decisions, and define our commitment to 
//             creating a sustainable future for wildlife and humanity alike.
//           </motion.p>

//           {/* Values Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {values.map((value, index) => (
//               <motion.div
//                 key={index}
//                 variants={itemVariants}
//                 whileHover="hover"
//                 className="relative group"
//                 custom={index}
//               >
//                 {/* Glow Effect */}
//                 <div className={`absolute -inset-1 bg-gradient-to-r ${value.gradient} rounded-3xl blur opacity-0 group-hover:opacity-40 transition-opacity duration-500`}></div>
                
//                 {/* Main Card */}
//                 <motion.div
//                   variants={cardHoverVariants}
//                   className={`relative bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200/50 hover:border-transparent`}
//                 >
//                   {/* Icon Container */}
//                   <motion.div 
//                     className={`relative w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${value.gradient} p-4 text-white shadow-lg group-hover:shadow-xl transform group-hover:rotate-6 transition-transform duration-500`}
//                     whileHover={{ scale: 1.1, rotate: 360 }}
//                     transition={{ type: "spring", stiffness: 300 }}
//                   >
//                     <div className="absolute -top-2 -right-2 w-8 h-8 bg-white/20 rounded-full backdrop-blur-sm flex items-center justify-center">
//                       <span className="text-xs font-bold">{index + 1}</span>
//                     </div>
//                     <value.icon size={32} className="mx-auto" />
//                   </motion.div>

//                   {/* Content */}
//                   <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
//                     {value.title}
//                   </h3>
                  
//                   <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
//                     {value.description}
//                   </p>

//                   {/* Features */}
//                   <div className={`mt-6 pt-6 border-t border-gray-100`}>
//                     <div className="flex flex-wrap gap-2 justify-center">
//                       {value.features.map((feature, idx) => (
//                         <span 
//                           key={idx}
//                           className={`px-3 py-1.5 text-xs font-medium rounded-full bg-gradient-to-r ${value.bgGradient} text-${value.color}-800 border border-${value.color}-200/50`}
//                         >
//                           {feature}
//                         </span>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Animated Indicator */}
//                   <motion.div 
//                     className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-12 h-2 bg-gradient-to-r ${value.gradient} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
//                     animate={{ width: ["0%", "100%", "0%"] }}
//                     transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
//                   />
//                 </motion.div>

//                 {/* Connecting Lines (Desktop only) */}
//                 {index < values.length - 1 && (
//                   <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-300 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
//                 )}
//               </motion.div>
//             ))}
//           </div> 
//           {/* CTA Section */}
//           <motion.div 
//             variants={itemVariants}
//             className="mt-16"
//           >
//             <div className="flex flex-wrap gap-4 justify-center">
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Bottom decorative curve */}
//       <div className="absolute bottom-0 left-0 right-0">
//         <svg className="w-full h-16 text-white" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path d="M0 60L60 55C120 50 240 40 360 35C480 30 600 30 720 40C840 50 960 70 1080 75C1200 80 1320 70 1380 65L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V60Z" fill="currentColor"/>
//         </svg>
//       </div>
//     </section>
//   );
// };

// export default CoreValues;

import React, { useEffect } from "react";
import { FaLeaf, FaUsers, FaShieldAlt, FaHandsHelping, FaSeedling, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AOS from "aos";
import "aos/dist/aos.css";

const CoreValues = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 100 });
    return () => AOS.refresh();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const cardHoverVariants = {
    hover: {
      y: -15,
      scale: 1.03,
      rotateX: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
      },
    },
  };

  const values = [
    {
      icon: FaLeaf,
      title: "Conservation First",
      description: "We safeguard endangered species through cutting-edge research and comprehensive habitat restoration.",
      color: "green",
      features: ["Species Protection", "Habitat Restoration", "Scientific Research", "Ecosystem Balance"],
      gradient: "from-emerald-500 to-green-600",
      bgGradient: "from-emerald-50 to-green-100",
    },
    {
      icon: FaUsers,
      title: "Education & Community",
      description: "Transformative hands-on learning, school partnerships, and inclusive experiences for all ages.",
      color: "yellow",
      features: ["School Programs", "Public Workshops", "Volunteer Engagement", "Digital Learning"],
      gradient: "from-amber-500 to-yellow-600",
      bgGradient: "from-amber-50 to-yellow-100",
    },
    {
      icon: FaShieldAlt,
      title: "Ethical Care",
      description: "World-class veterinary standards and welfare-first approach guide everything we do.",
      color: "blue",
      features: ["Veterinary Excellence", "Animal Welfare", "Sustainable Practices", "Transparency"],
      gradient: "from-blue-500 to-cyan-600",
      bgGradient: "from-blue-50 to-cyan-100",
    },
    {
      icon: FaHandsHelping,
      title: "Collaborative Impact",
      description: "Building partnerships with communities, governments, and organizations for lasting change.",
      color: "purple",
      features: ["Global Partnerships", "Community Outreach", "Policy Advocacy", "Shared Resources"],
      gradient: "from-purple-500 to-violet-600",
      bgGradient: "from-purple-50 to-violet-100",
    },
    {
      icon: FaSeedling,
      title: "Sustainable Future",
      description: "Implementing eco-friendly practices and long-term conservation strategies for generations.",
      color: "teal",
      features: ["Eco-Initiatives", "Carbon Neutrality", "Future Planning", "Legacy Building"],
      gradient: "from-teal-500 to-emerald-600",
      bgGradient: "from-teal-50 to-emerald-100",
    },
    {
      icon: FaHeart,
      title: "Compassion Driven",
      description: "Every action rooted in empathy, respect, and love for all living beings.",
      color: "pink",
      features: ["Empathy First", "Respect for Life", "Compassionate Action", "Emotional Intelligence"],
      gradient: "from-pink-500 to-rose-600",
      bgGradient: "from-pink-50 to-rose-100",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-white via-emerald-50/30 to-amber-50/30 py-24 px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-green-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center"
        >
          {/* Header Section */}
          <motion.div variants={itemVariants} className="inline-block mb-6" data-aos="fade-down" data-aos-delay="100">
            <span className="text-sm font-semibold text-green-800 bg-green-100/80 px-5 py-2 rounded-full border border-green-200 shadow-sm inline-flex items-center gap-2">
              <FaLeaf className="text-green-600" />
              GUIDING PRINCIPLES
            </span>
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-green-800 via-yellow-600 to-blue-600 bg-clip-text text-transparent"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Our <span className="relative">
              Core
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-400 rounded-full"></span>
            </span>{" "}
            <span className="relative">
              Values
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-yellow-500 to-amber-400 rounded-full"></span>
            </span>
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-700 max-w-3xl mx-auto mb-16 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            These fundamental principles shape our actions, guide our decisions, and define our commitment to 
            creating a sustainable future for wildlife and humanity alike.
          </motion.p>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover="hover"
                className="relative group"
                custom={index}
                data-aos="fade-up"
                data-aos-delay={100 + index * 100}
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${value.gradient} rounded-3xl blur opacity-0 group-hover:opacity-40 transition-opacity duration-500`}></div>
                
                {/* Main Card */}
                <motion.div
                  variants={cardHoverVariants}
                  className={`relative bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200/50 hover:border-transparent`}
                >
                  {/* Icon Container */}
                  <motion.div 
                    className={`relative w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${value.gradient} p-4 text-white shadow-lg group-hover:shadow-xl transform group-hover:rotate-6 transition-transform duration-500`}
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white/20 rounded-full backdrop-blur-sm flex items-center justify-center">
                      <span className="text-xs font-bold">{index + 1}</span>
                    </div>
                    <value.icon size={32} className="mx-auto" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                    {value.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                    {value.description}
                  </p>

                  {/* Features */}
                  <div className={`mt-6 pt-6 border-t border-gray-100`}>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {value.features.map((feature, idx) => (
                        <span 
                          key={idx}
                          className={`px-3 py-1.5 text-xs font-medium rounded-full bg-gradient-to-r ${value.bgGradient} text-${value.color}-800 border border-${value.color}-200/50`}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Animated Indicator */}
                  <motion.div 
                    className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-12 h-2 bg-gradient-to-r ${value.gradient} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    animate={{ width: ["0%", "100%", "0%"] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  />
                </motion.div>

                {/* Connecting Lines (Desktop only) */}
                {index < values.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-300 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                )}
              </motion.div>
            ))}
          </div> 
        </motion.div>
      </div>

      {/* Bottom decorative curve */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-16 text-white" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60L60 55C120 50 240 40 360 35C480 30 600 30 720 40C840 50 960 70 1080 75C1200 80 1320 70 1380 65L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V60Z" fill="currentColor"/>
        </svg>
      </div>
    </section>
  );
};

export default CoreValues;
