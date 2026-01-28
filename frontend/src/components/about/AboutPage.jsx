// import React, { useState, useEffect } from "react";
// import { 
//   FaUsers, FaStar, FaHeart, FaTicketAlt, FaLeaf, FaPaw, FaTree, FaSeedling, FaChevronDown, FaDog, FaDove 
// } from "react-icons/fa";
// import { GiLion, GiElephant, GiMonkey } from "react-icons/gi";
// import { IoMdRainy } from "react-icons/io";
// import { BsTreeFill } from "react-icons/bs";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import BuyTicket from "../buyticketModel/BuyTicket"; 
// import { useNavigate } from "react-router-dom";
// import CountUp from "react-countup"; // For animated stats

// const AboutPage = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const navigate = useNavigate();

//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true, offset: 100 });
//     return () => AOS.refresh();
//   }, []);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       const x = (window.innerWidth / 2 - e.clientX) / 25;
//       const y = (window.innerHeight / 2 - e.clientY) / 25;
//       setMousePosition({ x, y });
//     };
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   const handleAdoptAnimal = () => navigate("/service");
//   const handleBuyTicket = () => setShowModal(true);

//   const stats = [
//     { icon: <FaUsers />, number: 200, label: "Animal Species", color: "from-blue-400 to-cyan-300", delay: 100 },
//     { icon: <FaStar />, number: 37, label: "Years of Care", color: "from-yellow-400 to-orange-300", delay: 200 },
//     { icon: <FaHeart />, number: 98, label: "Visitor Satisfaction", color: "from-pink-400 to-rose-300", delay: 300 },
//     { icon: <FaTree />, number: 50, label: "Conservation Programs", color: "from-emerald-400 to-green-300", delay: 400 },
//     { icon: <IoMdRainy />, number: 100, label: "Rescued Animals", color: "from-purple-400 to-indigo-300", delay: 500 },
//     { icon: <FaLeaf />, number: 75, label: "Green Energy", color: "from-lime-400 to-green-400", delay: 600 },
//   ];

//   const animalHighlights = [
//     { icon: <GiLion />, name: "African Lions", habitat: "Savanna Zone", color: "bg-orange-500/20" },
//     { icon: <GiElephant />, name: "Asian Elephants", habitat: "Elephant Sanctuary", color: "bg-gray-500/20" },
//     { icon: <FaPaw />, name: "Bengal Tigers", habitat: "Tiger Trail", color: "bg-amber-500/20" },
//     { icon: <FaDog />, name: "African Wild Dogs", habitat: "Canine Corridor", color: "bg-yellow-500/20" },
//     { icon: <GiMonkey />, name: "Colobus Monkeys", habitat: "Primate Paradise", color: "bg-red-500/20" },
//     { icon: <FaDove />, name: "Bald Eagles", habitat: "Aviary", color: "bg-blue-500/20" },
//   ];

//   const experiences = [
//     "🐘 Elephant Feeding Sessions",
//     "🦁 Lion Roar Demonstrations",
//     "🦜 Tropical Bird Shows",
//     "🌳 Tree Top Walkways",
//     "📸 Wildlife Photography",
//     "🎨 Kids Art & Craft Zone",
//     "🔍 Nature Treasure Hunts",
//     "🌙 Night Safari Tours"
//   ];

//   const floatingIcons = [
//     { icon: <FaLeaf />, class: "top-10 left-5", delay: "0s" },
//     { icon: <FaSeedling />, class: "top-20 right-10", delay: "1s" },
//     { icon: <FaPaw />, class: "bottom-20 left-10", delay: "2s" },
//     { icon: <FaTree />, class: "bottom-10 right-20", delay: "1.5s" },
//     { icon: <FaHeart />, class: "top-1/3 left-1/4", delay: "2.5s" },
//   ];

//   return (
//     <div className="relative min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-amber-900 overflow-hidden">
//       {/* Animated Floating Icons */}
//       <div className="absolute inset-0 overflow-hidden">
//         {floatingIcons.map((item, index) => (
//           <div key={index} className={`absolute ${item.class} animate-float`} style={{ animationDelay: item.delay }}>
//             <span className="text-4xl opacity-20 text-green-300">{item.icon}</span>
//           </div>
//         ))}
//         <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-yellow-500/10 to-green-500/10 rounded-full blur-3xl animate-pulse" style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }} />
//         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-amber-500/5 to-green-700/5 rounded-full blur-3xl animate-pulse animation-delay-2000" style={{ transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)` }} />
//       </div>

//       <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-16">
//         <div className="text-center max-w-6xl mx-auto" data-aos="fade-up" data-aos-delay="200">
//           <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 py-2 rounded-full mb-8" data-aos="zoom-in" data-aos-delay="100">
//             <FaSeedling /> Certified Conservation Partner
//           </div>

//           <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
//             <span className="bg-gradient-to-r from-yellow-300 via-green-300 to-amber-400 bg-clip-text text-transparent animate-gradient-x">
//               Wildlife
//             </span>
//             <span className="relative inline-block mx-2">
//               <span className="text-white">Zoo</span>
//               <FaHeart className="absolute -top-4 -right-4 text-red-400 text-2xl animate-pulse" />
//             </span>
//           </h1>

//           <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-12 px-4 leading-relaxed" data-aos="fade-up" data-aos-delay="400">
//             Discover the magic of wildlife through immersive experiences and conservation education.
//           </p>

//           {/* Stats */}
//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16" data-aos="fade-up" data-aos-delay="600">
//             {stats.map((stat, index) => (
//               <div key={index} className={`group relative p-4 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110`} data-aos="zoom-in" data-aos-delay={stat.delay}>
//                 <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300`} />
//                 <div className="relative z-10 text-center">
//                   <div className="text-3xl mb-2 flex justify-center text-white/80 group-hover:scale-125 transition-transform duration-300">{stat.icon}</div>
//                   <div className="text-3xl font-bold text-white">
//                     <CountUp end={stat.number} duration={2} suffix={stat.label === "Visitor Satisfaction" ? "%" : "+"} />
//                   </div>
//                   <div className="text-sm text-gray-300 mt-1">{stat.label}</div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {showModal && <BuyTicket onClose={() => setShowModal(false)} />}

//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-20px); }
//         }
//         .animate-float { animation: float 6s ease-in-out infinite; }
//         .animation-delay-2000 { animation-delay: 2s; }
//         @keyframes gradient-x {
//           0%,100%{background-position:0% 50%}
//           50%{background-position:100% 50%}
//         }
//         .animate-gradient-x { background-size: 200% 200%; animation: gradient-x 5s ease infinite; }
//       `}</style>
//     </div>
//   );
// };

// export default AboutPage;


import React, { useState, useEffect } from "react";
import { 
  FaUsers, FaStar, FaHeart, FaTicketAlt, FaLeaf, FaPaw, FaTree, FaSeedling, FaChevronDown, FaDog, FaDove 
} from "react-icons/fa";
import { GiLion, GiElephant, GiMonkey } from "react-icons/gi";
import { IoMdRainy } from "react-icons/io";
import { BsTreeFill } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
import BuyTicket from "../buyticketModel/BuyTicket"; 
import { useNavigate } from "react-router-dom";
import CountUp from "react-countup"; // For animated stats

const AboutPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 100 });
    return () => AOS.refresh();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (window.innerWidth / 2 - e.clientX) / 25;
      const y = (window.innerHeight / 2 - e.clientY) / 25;
      setMousePosition({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleAdoptAnimal = () => navigate("/service");
  const handleBuyTicket = () => setShowModal(true);

  const stats = [
    { icon: <FaUsers />, number: 200, label: "Animal Species", color: "from-blue-400 to-cyan-300", delay: 100 },
    { icon: <FaStar />, number: 37, label: "Years of Care", color: "from-yellow-400 to-orange-300", delay: 200 },
    { icon: <FaHeart />, number: 98, label: "Visitor Satisfaction", color: "from-pink-400 to-rose-300", delay: 300 },
    { icon: <FaTree />, number: 50, label: "Conservation Programs", color: "from-emerald-400 to-green-300", delay: 400 },
    { icon: <IoMdRainy />, number: 100, label: "Rescued Animals", color: "from-purple-400 to-indigo-300", delay: 500 },
    { icon: <FaLeaf />, number: 75, label: "Green Energy", color: "from-lime-400 to-green-400", delay: 600 },
  ];

  const animalHighlights = [
    { icon: <GiLion />, name: "African Lions", habitat: "Savanna Zone", color: "bg-orange-500/20" },
    { icon: <GiElephant />, name: "Asian Elephants", habitat: "Elephant Sanctuary", color: "bg-gray-500/20" },
    { icon: <FaPaw />, name: "Bengal Tigers", habitat: "Tiger Trail", color: "bg-amber-500/20" },
    { icon: <FaDog />, name: "African Wild Dogs", habitat: "Canine Corridor", color: "bg-yellow-500/20" },
    { icon: <GiMonkey />, name: "Colobus Monkeys", habitat: "Primate Paradise", color: "bg-red-500/20" },
    { icon: <FaDove />, name: "Bald Eagles", habitat: "Aviary", color: "bg-blue-500/20" },
  ];

  const experiences = [
    "🐘 Elephant Feeding Sessions",
    "🦁 Lion Roar Demonstrations",
    "🦜 Tropical Bird Shows",
    "🌳 Tree Top Walkways",
    "📸 Wildlife Photography",
    "🎨 Kids Art & Craft Zone",
    "🔍 Nature Treasure Hunts",
    "🌙 Night Safari Tours"
  ];

  const floatingIcons = [
    { icon: <FaLeaf />, class: "top-10 left-5", delay: "0s" },
    { icon: <FaSeedling />, class: "top-20 right-10", delay: "1s" },
    { icon: <FaPaw />, class: "bottom-20 left-10", delay: "2s" },
    { icon: <FaTree />, class: "bottom-10 right-20", delay: "1.5s" },
    { icon: <FaHeart />, class: "top-1/3 left-1/4", delay: "2.5s" },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-amber-900 overflow-hidden">
      {/* Animated Floating Icons */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingIcons.map((item, index) => (
          <div key={index} className={`absolute ${item.class} animate-float`} style={{ animationDelay: item.delay }}>
            <span className="text-4xl opacity-20 text-green-300">{item.icon}</span>
          </div>
        ))}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-yellow-500/10 to-green-500/10 rounded-full blur-3xl animate-pulse" style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-amber-500/5 to-green-700/5 rounded-full blur-3xl animate-pulse animation-delay-2000" style={{ transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)` }} />
      </div>

      {/* Main Section */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-16">
        <div className="text-center max-w-6xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 py-2 rounded-full mb-8" data-aos="zoom-in" data-aos-delay="100">
            <FaSeedling /> Certified Conservation Partner
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight" data-aos="zoom-in" data-aos-delay="300">
            <span className="bg-gradient-to-r from-yellow-300 via-green-300 to-amber-400 bg-clip-text text-transparent animate-gradient-x">
              Wildlife
            </span>
            <span className="relative inline-block mx-2">
              <span className="text-white">Zoo</span>
              <FaHeart className="absolute -top-4 -right-4 text-red-400 text-2xl animate-pulse" />
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-12 px-4 leading-relaxed" data-aos="fade-up" data-aos-delay="400">
            Discover the magic of wildlife through immersive experiences and conservation education.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className={`group relative p-4 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110`} data-aos="fade-up" data-aos-delay={stat.delay}>
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300`} />
                <div className="relative z-10 text-center">
                  <div className="text-3xl mb-2 flex justify-center text-white/80 group-hover:scale-125 transition-transform duration-300">{stat.icon}</div>
                  <div className="text-3xl font-bold text-white">
                    <CountUp end={stat.number} duration={2} suffix={stat.label === "Visitor Satisfaction" ? "%" : "+"} />
                  </div>
                  <div className="text-sm text-gray-300 mt-1">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Animal Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
            {animalHighlights.map((animal, index) => (
              <div key={index} className={`p-6 rounded-2xl text-center text-white ${animal.color} hover:scale-105 transition-transform duration-300`} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="text-5xl mb-4 flex justify-center">{animal.icon}</div>
                <h3 className="text-xl font-bold">{animal.name}</h3>
                <p className="text-sm mt-1">{animal.habitat}</p>
              </div>
            ))}
          </div>

          {/* Experiences */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 text-white text-center hover:scale-105 transition-transform duration-300" data-aos="fade-up" data-aos-delay={index * 100}>
                {exp}
              </div>
            ))}
          </div>
        </div>
      </section>

      {showModal && <BuyTicket onClose={() => setShowModal(false)} />}

      {/* Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        @keyframes gradient-x {
          0%,100%{background-position:0% 50%}
          50%{background-position:100% 50%}
        }
        .animate-gradient-x { background-size: 200% 200%; animation: gradient-x 5s ease infinite; }
      `}</style>
    </div>
  );
};

export default AboutPage;
