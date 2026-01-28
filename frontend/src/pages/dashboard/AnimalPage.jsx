
import { useEffect, useState } from "react";
import axios from "axios";
import { FaTrash, FaPlus, FaTimes } from "react-icons/fa";
import { BackendUrl } from "../../BaseUrl";
import { toast, ToastContainer } from "react-toastify";

const AnimalsPage = () => {
  const [animals, setAnimals] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [deleteAnimalId, setDeleteAnimalId] = useState(null); // For delete modal
  const [newAnimal, setNewAnimal] = useState({
    name: "",
    ScientificName: "",
    diet: "",
    description: "",
    habitat: "",
    price: "",
    image: "",
  });

  // Fetch animals
  const getAnimals = async () => {
    try {
      const res = await axios.get(`${BackendUrl}/get-Animal`,{ withCredentials: true });
      setAnimals(res?.data || []);
    } catch (error) {
      console.log("Error fetching animals", error);
    }
  };

  useEffect(() => {
    getAnimals();
  }, []);

  // Add animal
  const handleAdd = async () => {
    if (
      !newAnimal.name ||
      !newAnimal.ScientificName ||
      !newAnimal.diet ||
      !newAnimal.description ||
      !newAnimal.habitat ||
      !newAnimal.price ||
      !newAnimal.image
    ) {
      toast.error("Please fill all fields!");
      return;
    }

    try {
      const formData = new FormData();
      Object.keys(newAnimal).forEach((key) =>
        formData.append(key === "image" ? "animalImage" : key, newAnimal[key])
      );

      const res = await axios.post(`${BackendUrl}/add-Animal`, formData, {
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success(res?.data?.message || "Animal added successfully!");
      setShowModal(false);
      setNewAnimal({
        name: "",
        ScientificName: "",
        diet: "",
        description: "",
        habitat: "",
        price: "",
        image: "",
      });
      getAnimals();
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to add animal!");
    }
  };

  // Confirm delete
  const confirmDelete = (id) => {
    setDeleteAnimalId(id); // open modal with this animal id
  };

  // Delete API
  const handleDelete = async () => {
    if (!deleteAnimalId) return;

    try {
      const res = await axios.delete(`${BackendUrl}/delete-Animal/${deleteAnimalId}`,{ withCredentials: true });
      toast.success(res?.data?.message || "Animal deleted successfully!");
      setAnimals((prev) => prev.filter((animal) => animal._id !== deleteAnimalId));
      setDeleteAnimalId(null); // close modal
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to delete animal!");
      setDeleteAnimalId(null);
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <ToastContainer position="top-right" autoClose={2000} />

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">
          Animals Management ({animals.length})
        </h2>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
        >
          <FaPlus /> Add Animal
        </button>
      </div>

      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full text-left text-sm text-gray-700">
          <thead className="bg-gray-100 border-b text-gray-700">
            <tr>
              <th className="px-6 py-3 font-semibold">Name</th>
              <th className="px-6 py-3 font-semibold">Scientific Name</th>
              <th className="px-6 py-3 font-semibold">Diet</th>
              <th className="px-6 py-3 font-semibold">Description</th>
              <th className="px-6 py-3 font-semibold">Habitat</th>
              <th className="px-6 py-3 font-semibold">Price</th>
              <th className="px-6 py-3 font-semibold">Image</th>
              <th className="px-6 py-3 font-semibold text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {animals.length > 0 ? (
              animals.map((animal) => (
                <tr key={animal._id} className="border-b hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-3">{animal.name}</td>
                  <td className="px-6 py-3">{animal.ScientificName}</td>
                  <td className="px-6 py-3">{animal.diet}</td>
                  <td className="px-6 py-3">{animal.description}</td>
                  <td className="px-6 py-3">{animal.habitat}</td>
                  <td className="px-6 py-3">{animal.price}</td>
                  <td className="px-6 py-3">
                    {animal.image ? (
                      <img
                        src={animal.image}
                        alt={animal.name}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                    ) : (
                      <span className="text-gray-400 italic">No Image</span>
                    )}
                  </td>
                  <td className="px-6 py-3 text-center">
                    <button
                      onClick={() => confirmDelete(animal._id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="text-center py-6 text-gray-500">
                  No animals added yet
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Add Animal Modal */}
      {showModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg w-96 p-6 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-red-600"
            >
              <FaTimes />
            </button>

            <h3 className="text-lg font-bold mb-4 text-gray-800">Add New Animal</h3>

            {["name", "ScientificName", "diet", "description", "habitat", "price"].map((field) => (
              <input
                key={field}
                type="text"
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                value={newAnimal[field]}
                onChange={(e) => setNewAnimal({ ...newAnimal, [field]: e.target.value })}
                className="w-full border rounded-md px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            ))}

            <input
              type="file"
              onChange={(e) => setNewAnimal({ ...newAnimal, image: e.target.files[0] })}
              className="w-full border rounded-md px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-green-600"
            />

            <button
              onClick={handleAdd}
              className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
            >
              Add Animal
            </button>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteAnimalId && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-30 backdrop-blur-sm z-50">

          <div className="bg-white rounded-lg shadow-lg w-80 p-6 text-center">
            <h2 className="text-lg font-bold mb-4">Are you sure?</h2>
            <p className="mb-4">Do you really want to delete this animal?</p>
            <div className="flex justify-around">
              <button
                onClick={handleDelete}
                className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700"
              >
                Yes
              </button>
              <button
                onClick={() => setDeleteAnimalId(null)}
                className="bg-gray-400 text-white px-4 py-1 rounded hover:bg-gray-500"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnimalsPage;
