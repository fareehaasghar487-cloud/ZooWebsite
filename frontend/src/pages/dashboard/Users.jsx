import React, { useEffect, useState } from "react";
import { FaTrash, FaSearch } from "react-icons/fa";
import { BackendUrl } from "../../BaseUrl";
import axios from "axios";
import { toast } from "react-toastify";

const Users = () => {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);

  // Fetch all users from backend
  const getUsers = async () => {
    try {
      const res = await axios.get(`${BackendUrl}/get-all-users`, {
        withCredentials: true,
      });
      setUsers(res.data);
    } catch (error) {
      console.log("Error in fetching users", error);
      toast.error("Failed to fetch users");
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  // Delete user
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${BackendUrl}/delete-user/${id}`);
      setUsers(users.filter((user) => user._id !== id));
      toast.success("User deleted successfully!");
    } catch (error) {
      console.log("Error deleting user", error);
      toast.error("Failed to delete user");
    }
  };

  // Update user role
  const handleRoleChange = async (userId, newRole) => {
    try {
      const updatedUsers = users.map((user) =>
        user._id === userId ? { ...user, role: newRole } : user
      );
      setUsers(updatedUsers);

      axios.patch(
        `${BackendUrl}/role/${userId}`,
        { role: newRole },
        { withCredentials: true }
      );

      toast.success("Role updated successfully!");
    } catch (error) {
      console.log("Error updating role", error);
      toast.error("Failed to update role");
    }
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">Users Management</h2>

        <div className="relative">
          <input
            type="text"
            placeholder="Search users..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 rounded-md py-2 px-10 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          <FaSearch className="absolute left-3 top-3 text-gray-500" />
        </div>
      </div>

      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full text-left text-sm text-gray-700">
          <thead className="bg-gray-100 border-b text-gray-700">
            <tr>
              <th className="px-6 py-3 font-semibold">Name</th>
              <th className="px-6 py-3 font-semibold">Email</th>
              <th className="px-6 py-3 font-semibold">Role</th>
              <th className="px-6 py-3 font-semibold text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <tr
                key={user._id || index}
                className="border-b hover:bg-gray-50 transition-colors"
              >
                <td className="px-6 py-3">{user.name}</td>
                <td className="px-6 py-3">{user.email}</td>
                <td className="px-6 py-3">
                  <select
                    value={user.role}
                    onChange={(e) => handleRoleChange(user._id, e.target.value)}
                    className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none"
                  >
                    <option value="Admin">Admin</option>
                    <option value="User">User</option>
                  </select>
                </td>
                <td className="px-6 py-3 text-center">
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};[]

export default Users;


