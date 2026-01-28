// import React from "react";
// import { FaBullseye, FaEye, FaLeaf, FaHandsHelping } from "react-icons/fa";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// const MissionVision = () => {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.3,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
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
//       y: -10,
//       scale: 1.02,
//       transition: {
//         type: "spring",
//         stiffness: 300,
//         damping: 15,
//       },
//     },
//   };

//   return (
//     <section className="relative bg-gradient-to-br from-emerald-50 via-white to-amber-50 py-20 px-6 overflow-hidden">
//       {/* Decorative background elements */}
//       <div className="absolute top-10 left-10 opacity-10">
//         <FaLeaf className="text-green-800" size={60} />
//       </div>
//       <div className="absolute bottom-10 right-10 opacity-10">
//         <FaHandsHelping className="text-yellow-600" size={60} />
//       </div>
      
//       {/* Animated floating dots */}
//       <div className="absolute top-1/4 left-5 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
//       <div className="absolute bottom-1/3 right-8 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
//       <div className="absolute top-1/2 left-12 w-4 h-4 bg-emerald-300 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>

//       <div className="max-w-6xl mx-auto">
//         <motion.div
//           ref={ref}
//           initial="hidden"
//           animate={inView ? "visible" : "hidden"}
//           variants={containerVariants}
//           className="text-center"
//         >
//           {/* Header with animated underline */}
//           <motion.div variants={itemVariants} className="inline-block mb-4">
//             <span className="text-sm font-semibold text-green-700 bg-green-100 px-4 py-1.5 rounded-full mb-2 inline-block">
//               OUR PURPOSE
//             </span>
//           </motion.div>
          
//           <motion.h2 
//             variants={itemVariants}
//             className="text-4xl md:text-5xl font-bold mb-6 relative inline-block"
//           >
//             Our <span className="text-green-700 relative">
//               Mission
//               <span className="absolute -bottom-2 left-0 w-full h-1 bg-green-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
//             </span> &{" "}
//             <span className="text-yellow-600 relative">
//               Vision
//               <span className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
//             </span>
//           </motion.h2>

//           <motion.p 
//             variants={itemVariants}
//             className="text-lg text-gray-700 max-w-3xl mx-auto mb-16 leading-relaxed"
//           >
//             We are passionately dedicated to wildlife conservation, environmental education, 
//             and ethical animal care—building a sustainable future for all living beings.
//           </motion.p>

//           {/* Cards Container */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
//             {/* Mission Card */}
//             <motion.div
//               variants={itemVariants}
//               whileHover="hover"
//               className="relative group"
//             >
//               <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400 to-emerald-300 rounded-3xl blur opacity-30 group-hover:opacity-70 transition duration-500"></div>
//               <motion.div
//                 variants={cardHoverVariants}
//                 className="relative bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-green-100"
//               >
//                 <div className="flex items-start mb-6">
//                   <div className="bg-gradient-to-br from-green-700 to-emerald-600 text-white p-4 rounded-2xl shadow-lg mr-4 transform group-hover:rotate-6 transition-transform duration-300">
//                     <FaBullseye size={28} />
//                   </div>
//                   <div>
//                     <h3 className="text-2xl font-bold text-gray-900 group-hover:text-green-700 transition-colors duration-300 flex items-center">
//                       Our Mission
//                       <span className="ml-2 text-sm font-normal text-green-600 bg-green-50 px-3 py-1 rounded-full">
//                         Core Purpose
//                       </span>
//                     </h3>
//                   </div>
//                 </div>
//                 <p className="text-gray-700 text-lg leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
//                   To protect endangered species through advanced scientific research, 
//                   inspire global communities with transformative educational experiences, 
//                   and drive active participation in conservation efforts that make a 
//                   measurable difference.
//                 </p>
                
//                 {/* Mission Features */}
//                 <div className="mt-8 pt-8 border-t border-green-50 grid grid-cols-2 gap-4">
//                   <div className="flex items-center text-sm">
//                     <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
//                     <span className="text-green-800">Species Protection</span>
//                   </div>
//                   <div className="flex items-center text-sm">
//                     <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
//                     <span className="text-green-800">Research & Innovation</span>
//                   </div>
//                   <div className="flex items-center text-sm">
//                     <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
//                     <span className="text-green-800">Community Engagement</span>
//                   </div>
//                   <div className="flex items-center text-sm">
//                     <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
//                     <span className="text-green-800">Education First</span>
//                   </div>
//                 </div>
//               </motion.div>
//             </motion.div>

//             {/* Vision Card */}
//             <motion.div
//               variants={itemVariants}
//               whileHover="hover"
//               className="relative group"
//             >
//               <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 to-amber-300 rounded-3xl blur opacity-30 group-hover:opacity-70 transition duration-500"></div>
//               <motion.div
//                 variants={cardHoverVariants}
//                 className="relative bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-amber-100"
//               >
//                 <div className="flex items-start mb-6">
//                   <div className="bg-gradient-to-br from-yellow-600 to-amber-500 text-white p-4 rounded-2xl shadow-lg mr-4 transform group-hover:-rotate-6 transition-transform duration-300">
//                     <FaEye size={28} />
//                   </div>
//                   <div>
//                     <h3 className="text-2xl font-bold text-gray-900 group-hover:text-yellow-600 transition-colors duration-300 flex items-center">
//                       Our Vision
//                       <span className="ml-2 text-sm font-normal text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
//                         Future Goal
//                       </span>
//                     </h3>
//                   </div>
//                 </div>
//                 <p className="text-gray-700 text-lg leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
//                   We envision a future where wildlife flourishes in restored habitats, 
//                   where human societies coexist in harmony with nature, and biodiversity 
//                   is universally recognized as the foundation of our planet's health 
//                   and humanity's prosperity.
//                 </p>
                
//                 {/* Vision Features */}
//                 <div className="mt-8 pt-8 border-t border-amber-50">
//                   <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-4 rounded-xl">
//                     <h4 className="font-semibold text-amber-800 mb-2">Key Aspirations:</h4>
//                     <ul className="text-sm text-amber-900 space-y-2">
//                       <li className="flex items-center">
//                         <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2"></span>
//                         Thriving ecosystems worldwide
//                       </li>
//                       <li className="flex items-center">
//                         <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2"></span>
//                         Human-nature harmony
//                       </li>
//                       <li className="flex items-center">
//                         <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2"></span>
//                         Global biodiversity appreciation
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </motion.div>
//             </motion.div>
//           </div>

//           {/* Bottom CTA */}
//           <motion.div 
//             variants={itemVariants}
//             className="mt-16 pt-8 border-t border-gray-200"
//           >
//             <p className="text-gray-600 mb-4">
//               Together, we can make this vision a reality.
//             </p>
//             <button className="bg-gradient-to-r from-green-700 to-emerald-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transform transition-all duration-300 hover:from-green-800 hover:to-emerald-700">
//               Join Our Conservation Journey
//             </button>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default MissionVision;

import React, { useEffect } from "react";
import { FaBullseye, FaEye, FaLeaf, FaHandsHelping } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AOS from "aos";
import "aos/dist/aos.css";

const MissionVision = () => {
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
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
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
      y: -10,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
      },
    },
  };

  return (
    <section className="relative bg-gradient-to-br from-emerald-50 via-white to-amber-50 py-20 px-6 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-10 left-10 opacity-10" data-aos="fade-down">
        <FaLeaf className="text-green-800" size={60} />
      </div>
      <div className="absolute bottom-10 right-10 opacity-10" data-aos="fade-up">
        <FaHandsHelping className="text-yellow-600" size={60} />
      </div>

      {/* Animated floating dots */}
      <div className="absolute top-1/4 left-5 w-3 h-3 bg-green-400 rounded-full animate-pulse" data-aos="fade-right"></div>
      <div className="absolute bottom-1/3 right-8 w-2 h-2 bg-yellow-400 rounded-full animate-pulse" data-aos="fade-left"></div>
      <div className="absolute top-1/2 left-12 w-4 h-4 bg-emerald-300 rounded-full animate-pulse" style={{animationDelay: '0.5s'}} data-aos="fade-up"></div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center"
        >
          {/* Header with animated underline */}
          <motion.div variants={itemVariants} className="inline-block mb-4" data-aos="fade-down" data-aos-delay="100">
            <span className="text-sm font-semibold text-green-700 bg-green-100 px-4 py-1.5 rounded-full mb-2 inline-block">
              OUR PURPOSE
            </span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6 relative inline-block"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            Our <span className="text-green-700 relative">
              Mission
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-green-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </span> &{" "}
            <span className="text-yellow-600 relative">
              Vision
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </span>
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-700 max-w-3xl mx-auto mb-16 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            We are passionately dedicated to wildlife conservation, environmental education, 
            and ethical animal care—building a sustainable future for all living beings.
          </motion.p>

          {/* Cards Container */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Mission Card */}
            <motion.div
              variants={itemVariants}
              whileHover="hover"
              className="relative group"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400 to-emerald-300 rounded-3xl blur opacity-30 group-hover:opacity-70 transition duration-500"></div>
              <motion.div
                variants={cardHoverVariants}
                className="relative bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-green-100"
              >
                {/* Mission card content */}
                <div className="flex items-start mb-6">
                  <div className="bg-gradient-to-br from-green-700 to-emerald-600 text-white p-4 rounded-2xl shadow-lg mr-4 transform group-hover:rotate-6 transition-transform duration-300">
                    <FaBullseye size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-green-700 transition-colors duration-300 flex items-center">
                      Our Mission
                      <span className="ml-2 text-sm font-normal text-green-600 bg-green-50 px-3 py-1 rounded-full">
                        Core Purpose
                      </span>
                    </h3>
                  </div>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                  To protect endangered species through advanced scientific research, 
                  inspire global communities with transformative educational experiences, 
                  and drive active participation in conservation efforts that make a 
                  measurable difference.
                </p>
                
                {/* Mission Features */}
                <div className="mt-8 pt-8 border-t border-green-50 grid grid-cols-2 gap-4">
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-green-800">Species Protection</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-green-800">Research & Innovation</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-green-800">Community Engagement</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-green-800">Education First</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              variants={itemVariants}
              whileHover="hover"
              className="relative group"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 to-amber-300 rounded-3xl blur opacity-30 group-hover:opacity-70 transition duration-500"></div>
              <motion.div
                variants={cardHoverVariants}
                className="relative bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-amber-100"
              >
                {/* Vision card content */}
                <div className="flex items-start mb-6">
                  <div className="bg-gradient-to-br from-yellow-600 to-amber-500 text-white p-4 rounded-2xl shadow-lg mr-4 transform group-hover:-rotate-6 transition-transform duration-300">
                    <FaEye size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-yellow-600 transition-colors duration-300 flex items-center">
                      Our Vision
                      <span className="ml-2 text-sm font-normal text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
                        Future Goal
                      </span>
                    </h3>
                  </div>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                  We envision a future where wildlife flourishes in restored habitats, 
                  where human societies coexist in harmony with nature, and biodiversity 
                  is universally recognized as the foundation of our planet's health 
                  and humanity's prosperity.
                </p>
                
                {/* Vision Features */}
                <div className="mt-8 pt-8 border-t border-amber-50">
                  <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-4 rounded-xl">
                    <h4 className="font-semibold text-amber-800 mb-2">Key Aspirations:</h4>
                    <ul className="text-sm text-amber-900 space-y-2">
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2"></span>
                        Thriving ecosystems worldwide
                      </li>
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2"></span>
                        Human-nature harmony
                      </li>
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2"></span>
                        Global biodiversity appreciation
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 pt-8 border-t border-gray-200"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <p className="text-gray-600 mb-4">
              Together, we can make this vision a reality.
            </p>
            <button className="bg-gradient-to-r from-green-700 to-emerald-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transform transition-all duration-300 hover:from-green-800 hover:to-emerald-700">
              Join Our Conservation Journey
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionVision;
