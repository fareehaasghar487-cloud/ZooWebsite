import React, { useEffect } from "react";
import { FaLeaf, FaHeartbeat, FaBolt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const timelineData = [
  {
    year: 1987,
    title: "My Zoo Opens",
    description: "Founded with 40 species and a bold vision for urban conservation.",
    icon: <FaLeaf className="text-green-600" />,
    color: "border-green-600",
  },
  {
    year: 2016,
    title: "Wildlife Rescue Program",
    description: "Expanded rehabilitation facilities for injured native animals.",
    icon: <FaHeartbeat className="text-yellow-600" />,
    color: "border-yellow-600",
  },
  {
    year: 2024,
    title: "Net-Zero Initiative",
    description: "Committed to renewable energy and zero-waste operations by 2030.",
    icon: <FaBolt className="text-yellow-700" />,
    color: "border-yellow-700",
  },
];

const Timeline = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 100 });
    return () => AOS.refresh();
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12" data-aos="fade-down">
          <h2 className="text-4xl font-bold text-green-800 mb-2">Our Story</h2>
          <p className="text-gray-600">
            A journey of care, curiosity, and conservation spanning decades.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300"></div>

          {/* Timeline Items */}
          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`mb-12 flex flex-col md:flex-row items-center w-full ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              {/* Card */}
              <div className="bg-white shadow-lg rounded-lg p-6 md:w-1/2 border-l-4 border-t-0 border-r-0 border-b-0 relative z-10">
                <div className="flex items-center mb-2">
                  <span className="text-xl mr-2">{item.icon}</span>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
                <p className="text-gray-600">{item.description}</p>
                <button className="mt-3 text-green-600 font-semibold hover:underline">
                  Learn More &rarr;
                </button>
              </div>

              {/* Circle & Year */}
              <div className="flex flex-col items-center mx-4">
                <div className={`w-6 h-6 rounded-full bg-white border-4 ${item.color} z-10`}></div>
                <span className="text-gray-600 mt-2 font-semibold">{item.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
