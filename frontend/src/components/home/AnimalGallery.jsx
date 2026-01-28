import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search, ZoomIn, ChevronRight, Sparkles } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const animals = [
  { name: "Crowned Crane", image: "/g1.jpg", category: "Birds", description: "Graceful bird with a golden crown", region: "Africa" },
  { name: "Rhinoceros", image: "/g2.jpg", category: "Mammals", description: "Majestic giant with armored skin", region: "Africa & Asia" },
  { name: "Flamingo", image: "/g3.jpg", category: "Birds", description: "Pink-feathered wading bird", region: "Americas & Africa" },
  { name: "Crocodile", image: "/g4.jpg", category: "Reptiles", description: "Ancient aquatic predator", region: "Worldwide" },
  { name: "Lemur", image: "/g5.jpg", category: "Mammals", description: "Playful primate from Madagascar", region: "Madagascar" },
  { name: "Fox", image: "/g6.jpg", category: "Mammals", description: "Clever and adaptable canine", region: "Worldwide" },
  { name: "Hornbill", image: "/g7.jpg", category: "Birds", description: "Colorful bird with a unique beak", region: "Asia & Africa" },
  { name: "Meerkats", image: "/g8.jpg", category: "Mammals", description: "Social and alert desert dwellers", region: "Southern Africa" },
];

const categories = ["All", "Mammals", "Birds", "Reptiles"];

const AnimalGallery = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  const handleLoadMore = () => {
    navigate("/service");
  };

  const filteredAnimals = animals.filter(animal => {
    const matchesCategory = selectedCategory === "All" || animal.category === selectedCategory;
    const matchesSearch = animal.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          animal.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAnimalClick = (animal) => setSelectedAnimal(animal);
  const closeModal = () => setSelectedAnimal(null);

  return (
    <section className="px-4 py-16 max-w-7xl mx-auto relative">
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12" data-aos="fade-down">
          <div className="inline-flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="w-5 h-5 text-green-500" />
            <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-1.5 rounded-full text-sm font-bold tracking-widest uppercase">
              Gallery
            </span>
            <Sparkles className="w-5 h-5 text-emerald-500" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Discover <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-700">Nature's Wonders</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-8">
            Step into the wild and discover the beauty of nature's most fascinating creatures. Our gallery showcases animals from across the world, each captured in stunning detail.
          </p>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg" data-aos="fade-up">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search animals..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-full focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100 transition-all duration-300"
            />
          </div>
        </div>

        {/* Animal Count */}
        <div className="mb-8 text-center" data-aos="fade-up" data-aos-delay="100">
          <span className="text-lg font-medium text-gray-600">
            Showing <span className="font-bold text-green-600">{filteredAnimals.length}</span> of {animals.length} animals
          </span>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {filteredAnimals.map((animal, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer transform transition-all duration-500 hover:scale-[1.02]"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => handleAnimalClick(animal)}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={animal.image}
                  alt={animal.name}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-green-700 text-xs font-bold px-3 py-1.5 rounded-full">
                    {animal.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <ZoomIn className="w-5 h-5 text-gray-700" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">{animal.name}</h3>
                  <p className="text-gray-200 text-sm mb-3 line-clamp-2">{animal.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-green-300 text-sm font-medium bg-black/30 px-3 py-1 rounded-full">{animal.region}</span>
                    <span className="text-white text-sm font-medium flex items-center">
                      View Details <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
              <div className={`absolute inset-0 border-2 border-transparent group-hover:border-green-400/50 rounded-2xl transition-all duration-500 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}></div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center" data-aos="fade-up" data-aos-delay="200">
          <button
            onClick={handleLoadMore}
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white rounded-full overflow-hidden bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            <span className="relative z-10">Explore More Animals</span>
            <span className="relative z-10 ml-3 group-hover:translate-x-2 transition-transform duration-300">
              <ChevronRight className="w-5 h-5" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          <p className="text-gray-500 mt-4 text-sm">Discover hundreds more fascinating creatures in our complete collection</p>
        </div>
      </div>

      {/* Animal Modal */}
      {selectedAnimal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-modal-in">
            <div className="relative">
              <img src={selectedAnimal.image} alt={selectedAnimal.name} className="w-full h-80 object-cover" />
              <button onClick={closeModal} className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center hover:bg-white transition-colors">✕</button>
            </div>
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-4xl font-bold text-gray-900">{selectedAnimal.name}</h2>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">{selectedAnimal.category}</span>
                    <span className="text-gray-600"><strong>Region:</strong> {selectedAnimal.region}</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">{selectedAnimal.description} Lorem ipsum dolor sit amet...</p>
              <div className="flex gap-4">
                <button className="flex-1 bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors">Adopt {selectedAnimal.name}</button>
                <button className="flex-1 border-2 border-green-500 text-green-600 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom animations */}
      <style jsx>{`
        @keyframes blob { 0% { transform: translate(0,0) scale(1); } 33% { transform: translate(30px,-50px) scale(1.1); } 66% { transform: translate(-20px,20px) scale(0.9); } 100% { transform: translate(0,0) scale(1); } }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        @keyframes modal-in { from { opacity:0; transform:scale(0.9) translateY(20px); } to { opacity:1; transform:scale(1) translateY(0); } }
        .animate-modal-in { animation: modal-in 0.3s ease-out; }
        .line-clamp-2 { display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; }
      `}</style>
    </section>
  );
};

export default AnimalGallery;
