import React, { useState, useEffect } from "react";
import BuyTicket from "../buyticketModel/BuyTicket";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    image: "giraffe.jpg",
    title: "Giraffe Meet & Greet",
    subtitle: "Family Fun",
    date: "Sep 25, 2025",
    description:
      "Feed and interact with our friendly giraffes. A perfect photo opportunity!",
  },
  {
    image: "/elephant.jpg",
    title: "Elephant Encounter",
    subtitle: "Wild Adventure",
    date: "Oct 10, 2025",
    description:
      "Get up close with elephants and learn about their amazing behavior.",
  },
  {
    image: "/lion.jpg",
    title: "Lion Feeding Time",
    subtitle: "Safari Thrill",
    date: "Nov 1, 2025",
    description:
      "Experience the thrill of feeding lions safely under supervision!",
  },
  {
    image: "funfair.jpg",
    title: "Zoo Fanfair",
    subtitle: "Cool Family Time",
    date: "Dec 5, 2025",
    description:
      "Zoo Fanfair & Carnival Stalls, Rides And Games. A full day of festival stalls, rides, live music and clowns",
  },
];

const EventSection = () => {
  
  const [current, setCurrent] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const handleContactUs = ()=>{
    navigate("/contact");
  }

  const handleBuyTicket = () => {
    setShowModal(true);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[90vh] overflow-hidden">

      
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out"
        style={{ backgroundImage: `url(${slides[current].image})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

   
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-4">
        <h1 className="text-4xl md:text-6xl font-bold">
          {slides[current].title}{" "}
          <span className="text-green-500">{slides[current].subtitle}</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl">
          {slides[current].description}
        </p>
        <p className="mt-2 text-yellow-400 font-semibold">
          {slides[current].date}
        </p>

        <div className="flex gap-4 mt-6">
          <button
            type="button"
            onClick={handleBuyTicket}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full font-semibold transition"
          >
            Get Tickets
          </button>
          <button
          type="button"
          onClick={handleContactUs}
            className="border border-white hover:bg-white hover:text-black px-6 py-2 rounded-full font-semibold transition">
            Contact Us
          </button>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              current === index
                ? "bg-green-500 scale-110"
                : "bg-gray-400 hover:bg-green-400"
            }`}
          ></button>
        ))}
      </div>

      {/* ✅ Modal */}
      {showModal && (
        <BuyTicket
          key={showModal ? "open" : "closed"}
          onClose={() => setShowModal(false)}
        />
    
      )}
     
    </div>
    
  );
};

export default EventSection;


