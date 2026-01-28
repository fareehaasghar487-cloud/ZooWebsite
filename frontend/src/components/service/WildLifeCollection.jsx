import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { BackendUrl } from "../../BaseUrl";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../../context/UserProfile";
import { useNavigate } from "react-router-dom";
import { FaEye, FaShoppingCart, FaTag, FaLeaf, FaPaw, FaTimes, FaPlus, FaMinus, FaShieldAlt, FaTruck, FaCertificate } from "react-icons/fa";

const WildlifeCollection = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [animals, setAnimals] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [formData, setFormData] = useState({ quantity: 1 });
  const [viewMode, setViewMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAnimals();
  }, []);

  const getAnimals = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(`${BackendUrl}/get-Animal`);
      setAnimals(res?.data || []);
    } catch (error) {
      console.log("Error fetching animals:", error);
      toast.error("Failed to load wildlife collection");
    } finally {
      setIsLoading(false);
    }
  };

  const handleViewDetails = (animal) => {
    setSelectedAnimal(animal);
    setViewMode(true);
    setShowModal(true);
  };

  const handleBuyNow = (animal) => {
    if (!user) {
      toast.error("Please login first to buy an animal!");
      navigate("/login");
      return;
    }

    setSelectedAnimal(animal);
    setFormData({ quantity: 1 });
    setViewMode(false);
    setShowModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `${BackendUrl}/buy/${selectedAnimal._id}`,
        formData,
        { withCredentials: true }
      );
      toast.success("🎉 Purchase successful! You'll receive a confirmation email shortly.");
      setShowModal(false);
    } catch (error) {
      console.log("Error buying animal:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  // Function to get animal type color
  const getAnimalTypeColor = (type) => {
    const colors = {
      mammal: "bg-blue-100 text-blue-800",
      bird: "bg-purple-100 text-purple-800",
      reptile: "bg-green-100 text-green-800",
      amphibian: "bg-teal-100 text-teal-800",
      fish: "bg-indigo-100 text-indigo-800",
      insect: "bg-amber-100 text-amber-800",
    };
    return colors[type?.toLowerCase()] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="px-4 py-12 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Hero Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-green-50 to-emerald-50 rounded-full border border-green-100">
          <FaLeaf className="text-green-600" />
          <span className="text-green-700 font-medium">Premium Wildlife Collection</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-green-800 to-emerald-900 bg-clip-text text-transparent">
          Curated <span className="text-green-600">Wildlife</span> Collection
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-8">
          World-class animals for exhibitions, sanctuaries, and premium displays. 
          Pricing listed as estimates — permits & transport extra.
        </p>
        
        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          <div className="flex items-center gap-2">
            <FaShieldAlt className="text-green-600" />
            <span className="text-gray-700">All animals ethically sourced</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCertificate className="text-green-600" />
            <span className="text-gray-700">Health certified</span>
          </div>
          <div className="flex items-center gap-2">
            <FaTruck className="text-green-600" />
            <span className="text-gray-700">Global shipping available</span>
          </div>
        </div>
      </div>

      {/* Loading State */}
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-green-200 rounded-full"></div>
            <div className="w-16 h-16 border-4 border-green-600 rounded-full absolute top-0 left-0 animate-spin border-t-transparent"></div>
          </div>
        </div>
      ) : animals.length === 0 ? (
        <div className="text-center py-20">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center">
            <FaPaw className="text-4xl text-green-400" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-700 mb-2">No Animals Available</h3>
          <p className="text-gray-500">Check back soon for new arrivals!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {animals.map((animal) => (
            <div
              key={animal._id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:border-green-200 transition-all duration-500 hover:shadow-2xl hover:shadow-green-100/50 hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-56">
                <img
                  src={animal.image}
                  alt={animal.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                {/* Price Tag */}
                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-green-600 to-emerald-700 text-white rounded-full shadow-lg">
                    <FaTag className="text-xs" />
                    <span className="font-bold">${animal.price}</span>
                  </div>
                </div>
                {/* Type Badge */}
                {animal.type && (
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getAnimalTypeColor(animal.type)}`}>
                      {animal.type}
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-green-700 transition-colors">
                      {animal.name}
                    </h2>
                    <p className="text-sm text-gray-500 italic">
                      {animal.ScientificName || "Scientific name not specified"}
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 line-clamp-2">
                  {animal.description}
                </p>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={() => handleViewDetails(animal)}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 text-gray-700 rounded-xl font-medium transition-all duration-300 group/btn hover:shadow-md"
                  >
                    <FaEye className="group-hover/btn:scale-110 transition-transform" />
                    <span>Details</span>
                  </button>

                  <button
                    onClick={() => handleBuyNow(animal)}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-xl font-medium transition-all duration-300 group/btn hover:shadow-lg hover:shadow-green-500/30"
                  >
                    <FaShoppingCart className="group-hover/btn:scale-110 transition-transform" />
                    <span>Buy Now</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {showModal && selectedAnimal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          />

          {/* Modal Content */}
          <div className="relative w-full max-w-md bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl border border-gray-200 overflow-hidden animate-scale-in">
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-white/80 hover:bg-white rounded-full shadow-lg hover:scale-110 transition-transform"
            >
              <FaTimes className="text-gray-600" />
            </button>

            {/* Image */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={selectedAnimal.image}
                alt={selectedAnimal.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-gray-800">
                  {selectedAnimal.type || "Wildlife"}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Header */}
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-1">
                  {viewMode ? "🦁 " : "🛒 "}{selectedAnimal.name}
                </h2>
                <p className="text-gray-500 italic">{selectedAnimal.ScientificName}</p>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-500 mb-2">ABOUT</h3>
                <p className="text-gray-700 leading-relaxed">
                  {selectedAnimal.description}
                </p>
              </div>

              {!viewMode && (
                <>
                  {/* Quantity Selector */}
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-gray-700 font-medium">Quantity</span>
                      <div className="flex items-center gap-4">
                        <button
                          type="button"
                          onClick={() =>
                            setFormData(prev => ({
                              ...prev,
                              quantity: Math.max(1, prev.quantity - 1),
                            }))
                          }
                          className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900 transition-colors"
                        >
                          <FaMinus />
                        </button>
                        <span className="text-2xl font-bold text-gray-900 w-8 text-center">
                          {formData.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            setFormData(prev => ({
                              ...prev,
                              quantity: prev.quantity + 1,
                            }))
                          }
                          className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900 transition-colors"
                        >
                          <FaPlus />
                        </button>
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="space-y-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Unit Price</span>
                        <span className="text-lg font-semibold text-gray-900">
                          ${selectedAnimal.price}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Quantity</span>
                        <span className="text-lg font-semibold text-gray-900">
                          × {formData.quantity}
                        </span>
                      </div>
                      <div className="pt-3 border-t border-green-200">
                        <div className="flex justify-between items-center">
                          <span className="text-lg font-bold text-gray-900">Total Amount</span>
                          <span className="text-2xl font-bold text-green-700">
                            ${(selectedAnimal.price * formData.quantity).toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Purchase Button */}
                  <button
                    onClick={handleSubmit}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold text-lg shadow-lg hover:shadow-xl hover:shadow-green-500/30 transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <FaShoppingCart />
                      Confirm Purchase
                    </span>
                  </button>
                </>
              )}

              {/* Additional Info for View Mode */}
              {viewMode && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <span className="block text-sm text-blue-600 mb-1">Category</span>
                      <span className="font-semibold text-gray-900">
                        {selectedAnimal.category || "Not specified"}
                      </span>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg">
                      <span className="block text-sm text-green-600 mb-1">Conservation</span>
                      <span className="font-semibold text-gray-900">
                        {selectedAnimal.status || "Healthy"}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setViewMode(false);
                      handleBuyNow(selectedAnimal);
                    }}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold transition-colors"
                  >
                    Purchase This Animal
                  </button>
                </div>
              )}

              {/* Disclaimer */}
              <p className="text-xs text-gray-400 text-center mt-6">
                *Permits and transportation fees apply. All purchases are subject to approval.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Empty space for footer */}
      <div className="mt-16 text-center">
        <p className="text-gray-500 text-sm">
          Can't find what you're looking for?{" "}
          <button className="text-green-600 hover:text-green-700 font-semibold">
            Contact our wildlife specialists →
          </button>
        </p>
      </div>

      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default WildlifeCollection;

// Add this CSS animation to your styles
const styles = `
@keyframes scale-in {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-scale-in {
  animation: scale-in 0.3s ease-out;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
`;

// Add styles to document head
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}