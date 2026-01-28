// EventPage.jsx
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";
import { BackendUrl } from "../../BaseUrl";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EventPage = () => {
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    description: "",
    category: "",
    duration: "",
    price: "",
    eventImage: null, // must match backend multer field
  });

  useEffect(() => {
    getEvents();
  }, []);

  const getEvents = async () => {
    try {
      const res = await axios.get(`${BackendUrl}/get-Events`,{ withCredentials: true });
      setEvents(res?.data || []);
    } catch (error) {
      console.error("Error fetching events", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const handleFileChange = (e) => {
    setNewEvent({ ...newEvent, eventImage: e.target.files[0] }); // must match multer field
  };

  const handleAddEvent = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("title", newEvent.title);
      formData.append("date", newEvent.date);
      formData.append("description", newEvent.description);
      formData.append("category", newEvent.category);
      formData.append("duration", newEvent.duration);
      formData.append("price", newEvent.price);
      if (newEvent.eventImage) formData.append("eventImage", newEvent.eventImage); // correct key

      const res = await axios.post(`${BackendUrl}/add-Event`, formData, {
         withCredentials: true ,
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success(res?.data?.message || "Event added successfully!");
      setShowModal(false);
      setNewEvent({
        title: "",
        date: "",
        description: "",
        category: "",
        duration: "",
        price: "",
        eventImage: null,
      });
      getEvents();
    } catch (error) {
      console.error(error);
      toast.error("Failed to add event!");
    }
  };

  const handleDeleteEvent = async (id) => {
    

    try {
      const token = localStorage.getItem("token");
      const res = await axios.delete(`${BackendUrl}/delete-Event/${id}`,{withCredentials: true});
      toast.success(res?.data?.message || "Event deleted successfully!");
      setEvents(events.filter((event) => event._id !== id));
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete event!");
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Events ({events.length})
        </h2>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
        >
          <FaPlus className="mr-2" /> Add Event
        </button>
      </div>

      <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
        <table className="min-w-full text-left text-gray-800">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="px-6 py-3">Title</th>
              <th className="px-6 py-3">Date</th>
              <th className="px-6 py-3">Description</th>
              <th className="px-6 py-3">Category</th>
              <th className="px-6 py-3">Duration</th>
              <th className="px-6 py-3">Price</th>
              <th className="px-6 py-3">Image</th>
              <th className="px-6 py-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event._id} className="border-b hover:bg-gray-50 transition-all">
                <td className="px-6 py-3">{event.title}</td>
                <td className="px-6 py-3">{new Date(event.date).toLocaleDateString()}</td>
                <td className="px-6 py-3">{event.description}</td>
                <td className="px-6 py-3">{event.category}</td>
                <td className="px-6 py-3">{event.duration}</td>
                <td className="px-6 py-3">{event.price}</td>
                <td className="px-6 py-3">
                  {event.eventImage ? (
                    <img
                      src={event.eventImage}
                      alt={event.title}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                  ) : (
                    <span className="text-gray-400 italic">No Image</span>
                  )}
                </td>
                <td className="px-6 py-3 text-center">
                  <button
                    onClick={() => handleDeleteEvent(event._id)}
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {events.length === 0 && (
          <p className="text-center py-4 text-gray-500">No events found.</p>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-center text-green-700">
              Add New Event
            </h3>
            <form onSubmit={handleAddEvent} className="space-y-3">
              <input type="text" name="title" placeholder="Event title" value={newEvent.title} onChange={handleChange} className="w-full border px-3 py-2 rounded" required />
              <input type="date" name="date" value={newEvent.date} onChange={handleChange} className="w-full border px-3 py-2 rounded" required />
              <textarea name="description" placeholder="Description" value={newEvent.description} onChange={handleChange} className="w-full border px-3 py-2 rounded" required />
              <input type="text" name="category" placeholder="Category" value={newEvent.category} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
              <input type="text" name="duration" placeholder="Duration" value={newEvent.duration} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
              <input type="number" name="price" placeholder="Price" value={newEvent.price} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
              <input type="file" onChange={handleFileChange} className="w-full border px-3 py-2 rounded" />
              <div className="flex justify-end space-x-2 mt-4">
                <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Add</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <ToastContainer />
    </div>
  );
};

export default EventPage;
