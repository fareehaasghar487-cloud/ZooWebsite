import React from "react";
import { FaUsers, FaChartBar, FaCog } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white h-screen w-64 p-5">
      <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>
      <ul className="space-y-4">
        <Link to="/dashboard">
          <li className="hover:bg-gray-700 p-2 rounded">OverView</li>
        </Link>
        <Link to="users">
          <li className="hover:bg-gray-700 p-2 rounded">
            Users <FaUsers className="inline ml-2" />
          </li>
        </Link>
        <Link to="animals">
          <li className="hover:bg-gray-700 p-2 rounded">
            Animals <FaChartBar className="inline ml-2" />
          </li>
        </Link>
        <Link to="events">
          <li className="hover:bg-gray-700 p-2 rounded">
            Events
            <FaCog className="inline ml-2" />
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
