import React, { useEffect, useState } from "react";
import axios from "axios";
import { BackendUrl } from "../../BaseUrl"; 
import BuyTicket from "../buyticketModel/BuyTicket";
import { ToastContainer } from "react-toastify";
const GetTickets = () => {
  
  const [visible, setVisible] = useState(false);
  const [ticketData, setTicketData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  
    const handleBuyTicket = () => {
      setShowModal(true);
    };

  
  const getTickets = async () => {
    try {
      const res = await axios.get(`${BackendUrl}/get-ticket`);
      console.log(res.data);
      setTicketData(res.data || []);
    } catch (error) {
      console.error("Error fetching tickets:", error);
    }
  };

  useEffect(() => {
    getTickets(); 

    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-[80vh] bg-gradient-to-b from-green-800 to-yellow-400 overflow-hidden px-6">
      <div
        className={`transition-all duration-1000 ease-out transform ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
      
        <div className="mb-4">
          <span className="bg-yellow-400 text-green-900 font-semibold px-4 py-1 rounded-full text-sm uppercase">
            Upcoming Event
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-3">
          Zoo Funfair & Carnival{" "}
          <span className="text-yellow-300">2025</span>
        </h1>

        <p className="text-white text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Join us for a full day of fun rides, animal shows, food stalls, and live performances!
        </p>

    
        <div className="flex justify-center space-x-4 mb-8">
          {["DAYS", "HOURS", "MINUTES", "SECONDS"].map((label, idx) => (
            <div
              key={idx}
              className="bg-green-700 text-white px-5 py-3 rounded-lg shadow-md"
            >
              <p className="text-2xl font-bold">0</p>
              <p className="text-xs tracking-wide">{label}</p>
            </div>
          ))}
        </div>

        <button
        type="button"
        onClick={handleBuyTicket}
        className="bg-yellow-400 text-green-900 font-semibold px-8 py-3 rounded-full shadow-md hover:bg-yellow-500 transition">
          Get Tickets Now
        </button>

    
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {ticketData.map((ticket, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-2xl transition"
            >
              <h3 className="text-xl font-bold text-green-800 mb-2">
                {ticket.eventName}
              </h3>
              <p className="text-gray-700 mb-1">📅 Date: {ticket.date}</p>
              <p className="text-gray-700 mb-1">🎟 Price: Rs. {ticket.price}</p>
              <p className="text-gray-600 text-sm">{ticket.description}</p>
            </div>
          ))}
        </div>
         {showModal && (
        <BuyTicket
          key={showModal ? "open" : "closed"}
          onClose={() => setShowModal(false)}
        />
        
      )}
      <ToastContainer/>
      </div>
    </section>
    
  );
};

export default GetTickets;
