import React, { useContext, useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaPaw, FaSignInAlt, FaSignOutAlt, FaUser, FaUserCog } from "react-icons/fa";
import { AuthContext } from "../../context/UserProfile";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };
   const goToDashboard = () => {
  
    navigate("/dashboard"); 
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-green-800 text-white px-6 py-3 flex items-center justify-between shadow-md sticky top-0 z-50">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <FaPaw className="text-3xl text-white bg-yellow-500 rounded p-1" />
        <h1 className="text-xl font-bold text-yellow-400">City Zoo</h1>
      </Link>

      {/* Menu */}
      <ul className="hidden md:flex space-x-6 font-medium">
        <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
        <li><Link to="/about" className="hover:text-yellow-400">About</Link></li>
        <li><Link to="/service" className="hover:text-yellow-400">Services</Link></li>
        <li><Link to="/events" className="hover:text-yellow-400">Events</Link></li>
        <li><Link to="/contact" className="hover:text-yellow-400">Contact</Link></li>
      </ul>

      {/* User actions */}
      {user ? (
        <div className="relative" ref={dropdownRef}>
          {/* Profile Circle Button */}
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center hover:bg-yellow-400 transition-all shadow-md"
          >
            {user.profileImage ? (
              <img
                src={user.profileImage}
                alt={user.name}
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              <FaUser className="text-green-900 text-xl" />
            )}
          </button>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-lg py-2 z-50">
              <div className="px-4 py-2 border-b border-gray-200">
                <p className="font-semibold">{user.name}</p>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>

              {/* Admin Dashboard link only for Admin */}
              {user.role === "Admin" && (
                <Link
                  to="/dashboard"
                  className="block px-4 py-2 hover:bg-gray-100 flex items-center gap-2"
                  onClick={() => setDropdownOpen(false)}
                >
                  <FaUserCog /> Admin Dashboard
                </Link>
              )}

              {/* Profile link */}
              <Link
                to="/profile"
                className="block px-4 py-2 hover:bg-gray-100 flex items-center gap-2"
                onClick={goToDashboard}
              >
                <FaUser /> Profile
              </Link>

              {/* Logout */}
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2"
              >
                <FaSignOutAlt /> Logout
              </button>
            </div>
          )}
        </div>
      ) : (
        <Link to="/login">
          <button className="bg-white text-green-800 px-4 py-2 rounded flex items-center gap-2 hover:bg-gray-100 transition-all">
            <FaSignInAlt /> Login
          </button>
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
