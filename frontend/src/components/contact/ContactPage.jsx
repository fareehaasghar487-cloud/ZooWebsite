import { useNavigate } from "react-router-dom";


const ContactPage = () => {
  const navigate = useNavigate();
  const handleExploreAnimal = () =>{
      navigate("/service");
  }
  return (
    <section
      className="relative bg-cover bg-center h-screen flex flex-col justify-center items-center text-center text-white"
      style={{
        backgroundImage:
          "url('c-1.jpeg')",
      }}
    >
    
      <div className="absolute inset-0 "></div>

   
      <div className="relative z-10 max-w-3xl px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to <span className="text-yellow-400">Wildlife Zoo</span>
        </h1>

        <div className="w-16 h-1 bg-green-600 mx-auto mb-4 rounded"></div>

        <p className="text-lg md:text-xl text-gray-200 mb-6">
          Discover exotic animals, learn about conservation, and experience the
          beauty of wildlife up close.
        </p>

        <p className="text-green-300 font-semibold text-lg mb-8">
          Adventure awaits you! 🐾
        </p>

     
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <button
          type="button"
          onClick={handleExploreAnimal}
           className="bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-lg font-medium flex items-center gap-2 transition duration-300">
            🦁 Explore Animal
          </button>
          <button className="border border-white hover:bg-white hover:text-green-800 px-5 py-2 rounded-lg font-medium transition duration-300">
            📅 Plan Your Visit
          </button>
        </div>

      
        <div className="flex justify-center flex-wrap gap-6">
          <div className="bg-green-900/70 backdrop-blur-sm px-8 py-6 rounded-xl shadow-lg hover:scale-105 transition duration-300">
            <div className="text-yellow-400 text-2xl mb-1">🐾</div>
            <h3 className="text-2xl font-bold text-yellow-400">200+</h3>
            <p className="text-sm text-gray-200 mt-1">Animal Species</p>
          </div>

          <div className="bg-green-900/70 backdrop-blur-sm px-8 py-6 rounded-xl shadow-lg hover:scale-105 transition duration-300">
            <div className="text-yellow-400 text-2xl mb-1">🌿</div>
            <h3 className="text-2xl font-bold text-yellow-400">50+</h3>
            <p className="text-sm text-gray-200 mt-1">Conservation Programs</p>
          </div>

          <div className="bg-green-900/70 backdrop-blur-sm px-8 py-6 rounded-xl shadow-lg hover:scale-105 transition duration-300">
            <div className="text-yellow-400 text-2xl mb-1">👥</div>
            <h3 className="text-2xl font-bold text-yellow-400">1M+</h3>
            <p className="text-sm text-gray-200 mt-1">Visitors Yearly</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
