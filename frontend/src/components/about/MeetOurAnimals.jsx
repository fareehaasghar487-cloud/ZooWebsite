import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { 
  FaMapMarkerAlt, 
  FaUtensils, 
  FaHeart, 
  FaInfoCircle, 
  FaPaw, 
  FaSearch,
  FaTimes,
  FaGlobeAsia,
  FaWater,
  FaMountain,
  FaTree,
  FaCat,
  FaHippo,
  FaDove,
  FaFish,
  FaDragon,
  FaHorse
} from "react-icons/fa";

const animals = [
  {
    name: "African Lion",
    description: "The majestic king of the savannah, known for its impressive mane and powerful roar that can be heard up to 8 km away. Lions are social cats living in prides.",
    habitat: "Savannahs and grasslands",
    diet: "Carnivore",
    status: "Vulnerable",
    statusColor: "from-yellow-400 to-amber-500",
    icon: FaCat,
    conservation: "Habitat loss and human conflict",
    funFact: "A lion's roar can reach 114 decibels",
    image: "animal1.jpeg",
  },
  {
    name: "Asian Elephant",
    description: "Highly intelligent and social creatures with strong family bonds and excellent memory. They use infrasound to communicate over long distances.",
    habitat: "Forests and grasslands",
    diet: "Herbivore",
    status: "Endangered",
    statusColor: "from-red-500 to-pink-600",
    icon: FaHippo,
    conservation: "Habitat fragmentation and poaching",
    funFact: "Can consume up to 150 kg of food daily",
    image: "animal2.jpeg",
  },
  {
    name: "Macaw Parrot",
    description: "Vibrantly colored birds known for their intelligence and ability to mimic human speech. They mate for life and can live up to 60 years in captivity.",
    habitat: "Rainforests",
    diet: "Omnivore",
    status: "Least Concern",
    statusColor: "from-green-400 to-emerald-500",
    icon: FaDove,
    conservation: "Deforestation and illegal pet trade",
    funFact: "Have zygodactyl feet (two toes forward, two back)",
    image: "animal3.jpeg",
  },
  {
    name: "Gentoo Penguin",
    description: "The fastest swimming penguins, capable of reaching speeds up to 36 km/h underwater. They build nests from stones and pebbles.",
    habitat: "Antarctic regions",
    diet: "Carnivore",
    status: "Near Threatened",
    statusColor: "from-blue-400 to-cyan-500",
    icon: FaFish,
    conservation: "Climate change affecting food sources",
    funFact: "Can dive up to 200 meters deep",
    image: "animal4.jpg",
  },
  {
    name: "Giant Panda",
    description: "Known for their distinctive black-and-white fur and bamboo diet. Despite being classified as carnivores, 99% of their diet is bamboo.",
    habitat: "Temperate forests in China",
    diet: "Herbivore",
    status: "Vulnerable",
    statusColor: "from-yellow-400 to-amber-500",
    icon: FaPaw,
    conservation: "Habitat loss and low birth rate",
    funFact: "Spend 10-16 hours eating bamboo daily",
    image: "animal5.jpeg",
  },
  {
    name: "Komodo Dragon",
    description: "The world's largest lizard, capable of hunting large prey with venomous bites. They have excellent sense of smell and can detect carrion from miles away.",
    habitat: "Indonesian islands",
    diet: "Carnivore",
    status: "Endangered",
    statusColor: "from-red-500 to-pink-600",
    icon: FaDragon,
    conservation: "Habitat loss and prey depletion",
    funFact: "Can eat up to 80% of body weight in one meal",
    image: "animal6.jpeg",
  },
  {
    name: "Blue Whale",
    description: "The largest animal ever known to have lived on Earth. Their heart is the size of a small car and their tongue weighs as much as an elephant.",
    habitat: "Oceans worldwide",
    diet: "Carnivore (krill)",
    status: "Endangered",
    statusColor: "from-red-500 to-pink-600",
    icon: FaWater,
    conservation: "Ship strikes and climate change",
    funFact: "Can be heard across entire ocean basins",
    image: "img7.jpg",
  },
  {
    name: "Red Kangaroo",
    description: "The largest marsupial, known for its powerful hind legs and ability to leap great distances. They use hopping as an energy-efficient way to travel.",
    habitat: "Australian deserts and grasslands",
    diet: "Herbivore",
    status: "Least Concern",
    statusColor: "from-green-400 to-emerald-500",
    icon: FaHorse,
    conservation: "Drought and habitat modification",
    funFact: "Can jump over 9 meters in a single bound",
    image: "animal8.jpg",
  },
];

const MeetOurAnimals = () => {
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [favorites, setFavorites] = useState([]);

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const filteredAnimals = animals.filter(animal => {
    const matchesSearch = animal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         animal.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === "all" || animal.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const statusOptions = ["all", "Least Concern", "Near Threatened", "Vulnerable", "Endangered"];

  const toggleFavorite = (animalName) => {
    setFavorites(prev => 
      prev.includes(animalName) 
        ? prev.filter(name => name !== animalName)
        : [...prev, animalName]
    );
  };

  const habitatIcons = {
    "Savannahs and grasslands": FaMountain,
    "Forests and grasslands": FaTree,
    "Rainforests": FaTree,
    "Antarctic regions": FaWater,
    "Temperate forests in China": FaTree,
    "Indonesian islands": FaGlobeAsia,
    "Oceans worldwide": FaWater,
    "Australian deserts and grasslands": FaMountain,
  };

  return (
    <div className="py-20 bg-gradient-to-b from-white via-emerald-50/30 to-amber-50/30">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          data-aos="fade-down"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="relative">
              <FaPaw className="text-4xl text-green-600 animate-pulse" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-2 border-2 border-green-200 rounded-full"
              />
            </div>
            <span className="text-green-800 font-semibold tracking-wider">WILDLIFE SANCTUARY</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-800 via-amber-700 to-yellow-600 bg-clip-text text-transparent">
            Meet Our Animal Family
          </h2>
          
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-10">
            Discover the incredible biodiversity we protect. Each resident has a unique story 
            and plays a vital role in our conservation mission.
          </p>

          {/* Filters and Search */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12 max-w-4xl mx-auto">
            <div className="relative w-full md:w-96" data-aos="fade-right">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search animals by name or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-2xl border-2 border-green-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all bg-white/80 backdrop-blur-sm"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <FaTimes />
                </button>
              )}
            </div>

            <div className="flex flex-wrap gap-2" data-aos="fade-left">
              {statusOptions.map((status) => {
                const Icon = status === "all" ? FaGlobeAsia : 
                            status === "Endangered" ? FaHeart : FaInfoCircle;
                return (
                  <button
                    key={status}
                    onClick={() => setFilterStatus(status)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all ${
                      filterStatus === status
                        ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg"
                        : "bg-white/80 text-gray-700 hover:bg-green-50 border border-green-200"
                    }`}
                  >
                    <Icon className="text-sm" />
                    {status === "all" ? "All Animals" : status}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[ 
              { label: "Total Species", value: animals.length, icon: FaPaw, color: "text-green-600" },
              { label: "Endangered", value: animals.filter(a => a.status === "Endangered").length, icon: FaHeart, color: "text-red-500" },
              { label: "Conserved", value: "8", icon: FaTree, color: "text-emerald-600" },
              { label: "Your Favorites", value: favorites.length, icon: FaHeart, color: "text-pink-500" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                data-aos="zoom-in"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-green-100"
              >
                <stat.icon className={`text-3xl mb-2 mx-auto ${stat.color}`} />
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Animal Cards */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <AnimatePresence>
            {filteredAnimals.map((animal, index) => {
              const HabitatIcon = habitatIcons[animal.habitat];
              const isFavorite = favorites.includes(animal.name);
              
              return (
                <motion.div
                  key={animal.name}
                  layout
                  data-aos="fade-up"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ y: -10 }}
                  className="group relative cursor-pointer"
                  onClick={() => setSelectedAnimal(animal)}
                >
                  {/* Card Glow Effect */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${animal.statusColor} rounded-3xl blur opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />

                  {/* Main Card */}
                  <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200/50">
                    {/* Image Container */}
                    <div className="relative h-64 overflow-hidden">
                      <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        src={animal.image}
                        alt={animal.name}
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Status Badge */}
                      <div className="absolute top-4 right-4">
                        <div className={`bg-gradient-to-r ${animal.statusColor} text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg`}>
                          {animal.status}
                        </div>
                      </div>

                      {/* Favorite Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFavorite(animal.name);
                        }}
                        className="absolute top-4 left-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110"
                      >
                        <FaHeart
                          className={`${isFavorite ? "text-red-500 fill-red-500" : "text-gray-400"}`}
                        />
                      </button>

                      {/* Habitat Icon Overlay */}
                      <div className="absolute bottom-4 left-4">
                        <div className="bg-white/90 backdrop-blur-sm p-2 rounded-xl shadow-lg">
                          {HabitatIcon && <HabitatIcon className="text-green-600" />}
                        </div>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-800 transition-colors duration-300">
                            {animal.name}
                          </h3>
                          <div className="flex items-center gap-2 mt-1">
                            <animal.icon className="text-green-600" />
                            <span className="text-sm text-gray-500">{animal.diet}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                        {animal.description}
                      </p>

                      <div className="space-y-3">
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <FaMapMarkerAlt className="text-green-500 flex-shrink-0" />
                          <span className="truncate">{animal.habitat}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <FaUtensils className="text-amber-500 flex-shrink-0" />
                          <span>Diet: {animal.diet}</span>
                        </div>
                      </div>

                      {/* Quick Facts */}
                      <div className="mt-6 pt-6 border-t border-gray-100">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-medium text-gray-500">Fun Fact</span>
                          <span className="text-xs text-green-600 font-medium">👈 Click to learn more</span>
                        </div>
                        <p className="text-sm text-gray-700 mt-2 line-clamp-2">
                          {animal.funFact}
                        </p>
                      </div>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <motion.button
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="w-full bg-white text-green-700 font-bold py-3 rounded-xl hover:bg-green-50 transition-all"
                      >
                        Learn More
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* No Results */}
        {filteredAnimals.length === 0 && (
          <motion.div
            data-aos="fade-up"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🐾</div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">No animals found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </motion.div>
        )}
      </div>
      {/* Animal Detail Modal */}
      <AnimatePresence>
        {selectedAnimal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedAnimal(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedAnimal.image}
                  alt={selectedAnimal.name}
                  className="w-full h-96 object-cover"
                />
                <button
                  onClick={() => setSelectedAnimal(null)}
                  className="absolute top-6 right-6 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
                >
                  <FaTimes className="text-gray-700" />
                </button>
              </div>

              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-2">
                      {selectedAnimal.name}
                    </h2>
                    <div className="flex items-center gap-4">
                      <div className={`bg-gradient-to-r ${selectedAnimal.statusColor} text-white px-4 py-1 rounded-full`}>
                        {selectedAnimal.status}
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <selectedAnimal.icon />
                        <span>{selectedAnimal.diet}</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleFavorite(selectedAnimal.name)}
                    className="text-2xl hover:scale-110 transition-transform"
                  >
                    <FaHeart className={`${favorites.includes(selectedAnimal.name) ? "text-red-500 fill-red-500" : "text-gray-300"}`} />
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">About</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {selectedAnimal.description}
                    </p>
                    
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Conservation Status</h4>
                    <p className="text-gray-600 mb-6">{selectedAnimal.conservation}</p>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Quick Facts</h4>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-3">
                          <FaMapMarkerAlt className="text-green-600" />
                          <span><strong>Habitat:</strong> {selectedAnimal.habitat}</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <FaUtensils className="text-amber-600" />
                          <span><strong>Diet:</strong> {selectedAnimal.diet}</span>
                        </li>
                        <li>
                          <strong>Fun Fact:</strong> {selectedAnimal.funFact}
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">How You Can Help</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Adopt this species through our program</li>
                        <li>• Support habitat conservation efforts</li>
                        <li>• Spread awareness about their plight</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MeetOurAnimals;
