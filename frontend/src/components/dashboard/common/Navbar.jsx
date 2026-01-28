import React, { useState, useRef, useEffect } from "react";
import { FaPaw, FaUser, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom"; 
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-green-800 text-white px-6 py-3 flex items-center justify-between shadow-md fixed top-0 left-0 right-0 z-[999]">
      
      
      <Link to="/" className="flex items-center space-x-2 cursor-pointer">
        <FaPaw className="text-3xl text-white bg-yellow-500 rounded-lg p-1" />
        <h1 className="text-xl font-bold text-yellow-400">City Zoo</h1>
      </Link>

      
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 bg-green-700 px-3 py-2 rounded-full hover:bg-green-600 transition-all"
        >
          <div className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-500 font-bold text-green-900">
            A
          </div>
          <span className="hidden sm:block font-semibold">Admin</span>
        </button>

        {open && (
          <div className="absolute right-0 mt-3 w-64 bg-white rounded-lg shadow-lg p-4 text-gray-800">
            <div className="border-b pb-3 mb-3">
              <h2 className="font-semibold text-lg text-gray-900">Admin Panel</h2>
              <p className="text-sm text-gray-500">admin@cityzoo.com</p>
            </div>

            <ul className="space-y-2">
              <li>
                <button className="flex items-center gap-3 w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 transition">
                  <FaUser className="text-gray-600" />
                  <span>My Profile</span>
                </button>
              </li>
              <li>
                <button className="flex items-center gap-3 w-full text-left px-3 py-2 rounded-lg hover:bg-red-100 text-red-600 transition">
                  <FaSignOutAlt />
                  <span>Logout</span>
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
