import React, { useEffect } from "react"; // added useEffect
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import AOS from "aos"; // import AOS
import "aos/dist/aos.css"; // import AOS styles

const Footer = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <footer className="bg-green-800 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-green-600 pb-10">
        
        <div data-aos="fade-up">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <span className="bg-yellow-400 text-green-800 px-2 py-1 rounded-md">🐾</span>
            City Zoo
          </h2>
          <p className="mt-4 text-gray-200 leading-relaxed">
            Explore wildlife like never before. Join us in our mission to protect endangered species and provide education about the animal kingdom.
          </p>

          <div className="flex gap-4 mt-5">
            <a href="https://www.facebook.com/share/14Kdpjwqzbc/" className="bg-green-700 hover:bg-green-600 p-3 rounded-full">
              <FaFacebookF />
            </a>
            <a href="https://x.com/FareehaAsghar12" className="bg-green-700 hover:bg-green-600 p-3 rounded-full">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/itx_me_farri_?igsh=c3cyN3o0YWV5Ym9p" className="bg-green-700 hover:bg-green-600 p-3 rounded-full">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/fareeha-asghar-247b7935a" className="bg-green-700 hover:bg-green-600 p-3 rounded-full">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-delay="100">
          <h3 className="text-xl font-semibold mb-4 border-b-2 border-yellow-400 inline-block pb-1">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-200">
            <li><a href="#" className="hover:text-yellow-400">Home</a></li>
            <li><a href="#" className="hover:text-yellow-400">About</a></li>
            <li><a href="#" className="hover:text-yellow-400">Services</a></li>
            <li><a href="#" className="hover:text-yellow-400">Events</a></li>
          </ul>
        </div>

        <div data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-xl font-semibold mb-4 border-b-2 border-yellow-400 inline-block pb-1">
            Resources
          </h3>
          <ul className="space-y-2 text-gray-200">
            <li><a href="#" className="hover:text-yellow-400">FAQ</a></li>
            <li><a href="#" className="hover:text-yellow-400">Blog & News</a></li>
            <li><a href="#" className="hover:text-yellow-400">Volunteer</a></li>
            <li><a href="#" className="hover:text-yellow-400">Support Center</a></li>
          </ul>
        </div>

        <div data-aos="fade-up" data-aos-delay="300">
          <h3 className="text-xl font-semibold mb-4 border-b-2 border-yellow-400 inline-block pb-1">
            Contact Us
          </h3>
          <ul className="space-y-3 text-gray-200">
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-yellow-400" /> 123 Safari Lane, Animal City
            </li>
            <li className="flex items-center gap-3">
              <FaPhone className="text-yellow-400" /> +123 456 7890
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-yellow-400" /> info@zooworld.org
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-6 flex flex-col md:flex-row items-center justify-between text-gray-300 text-sm" data-aos="fade-up" data-aos-delay="400">
        <p>© 2025 Zoo City. All rights reserved.</p>
        <div className="flex gap-6 mt-3 md:mt-0">
          <a href="#" className="hover:text-yellow-400">Privacy Policy</a>
          <a href="#" className="hover:text-yellow-400">Terms of Service</a>
          <a href="#" className="hover:text-yellow-400">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
