import React, { useState } from "react";
import axios from "axios";
import { BackendUrl } from "../../BaseUrl";
import { FaPaw } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BuyTicket = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tickets: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "tickets" ? Number(value) : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${BackendUrl}/book-ticket`, formData);
      toast.success("🎟️ Ticket booked successfully!");
      onClose();
    } catch (error) {
      console.error(error);
      toast.error("❌ Failed to book ticket.");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
      <div className="bg-white rounded-2xl shadow-xl w-[420px] p-8 relative">

     
        <button
          className="absolute top-3 right-4 text-gray-500 hover:text-black text-2xl"
          onClick={onClose}
        >
          ×
        </button>

      
        <div className="flex justify-center mb-4">
          <div className="bg-green-700 p-3 rounded-full">
            <FaPaw className="text-white text-2xl" />
          </div>
        </div>

       
        <h2 className="text-3xl font-bold text-center text-green-800">
          Book Your Tickets
        </h2>
        <p className="text-gray-500 text-center mb-6 text-sm">
          Experience a day full of adventure and wildlife at City Zoo
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">

          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none text-black">
                </input>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none text-black"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">
              Tickets
            </label>
            <input
              type="number"
              name="tickets"
              min="1"
              placeholder="e.g. 2"
              value={formData.tickets}
              onChange={handleChange}
              required
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-green-500 outline-none text-black"
            />
          </div>

         
          <button
            type="submit"
            className="w-full bg-green-700 text-white py-3 rounded-lg mt-3 font-semibold hover:bg-green-800 transition"
          >
            Confirm Purchase
          </button>
      
          
        </form>
      
      </div>
    
    </div>
  );
};

export default BuyTicket;
