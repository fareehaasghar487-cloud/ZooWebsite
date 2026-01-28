import  { useEffect, useState } from "react";
import axios from "axios";
import { BackendUrl } from "../../BaseUrl";
import BuyTicket from "../buyticketModel/BuyTicket";
import { ToastContainer } from "react-toastify";

const Card = ({ event, handleBuyTicket }) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform duration-300">
    <div className="relative">
      <img src={event.eventImage} alt={event.title} className="w-full h-56 object-cover" />
      <span className="absolute top-3 right-3 bg-green-700 text-white px-2 py-1 text-xs rounded">{event.category}</span>
      <span className="absolute bottom-3 left-3 bg-yellow-500 text-white px-2 py-1 text-xs rounded">
        {new Date(event.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
      </span>
    </div>
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-1">{event.title}</h3>
      <p className="text-gray-600 mb-3 line-clamp-2">{event.description}</p>
      <div className="flex justify-between items-center">
        <button 
          type="button"
          onClick={() => handleBuyTicket(event)}
          className="bg-gradient-to-r from-green-600 to-yellow-500 text-white px-4 py-2 rounded">
          Get Tickets →
        </button>
        <span className="text-gray-400 text-sm">{event.duration}</span>
      </div>
    </div>
  </div>
);

const EventsGallery = () => {
  const [showModal, setShowModal] = useState(false);
  const [events, setEvents] = useState([]);
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleBuyTicket = (event) => {
    setSelectedEvent(event);
    setShowModal(true);
  };

  const fetchEvents = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${BackendUrl}/get-Events`);
      setEvents(res.data || []);
    } catch (err) {
      console.error("Fetch events error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchEvents(); }, []);

  const categories = ["All", "Shows", "Animal Encounters", "Carnivals"];
  const filtered = filter === "All" ? events : events.filter((e) => e.category === filter);

  return (
    <div className="py-12 px-6 bg-green-50">
      <div className="text-center mb-8">
        <div className="flex justify-center gap-4 mb-4">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full border ${filter === cat ? "bg-green-600 text-white" : "bg-white text-green-600"}`}>
              {cat}
            </button>
          ))}
        </div>
        <h2 className="text-3xl font-bold">Our <span className="text-orange-500">Exciting Events</span></h2>
      </div>

      {loading ? <div>Loading...</div> : (
        <div className="grid gap-6 md:grid-cols-3">
          {filtered.map((event) => (
            <Card key={event._id} event={event} handleBuyTicket={handleBuyTicket} />
          ))}
        </div>
      )}

      {showModal && (
        <BuyTicket
          event={selectedEvent}
          onClose={() => setShowModal(false)}
        />
      )}
      <ToastContainer/>
    </div>
  );
};

export default EventsGallery;

