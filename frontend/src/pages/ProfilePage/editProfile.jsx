import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../context/UserProfile";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BackendUrl } from "../../BaseUrl";

const EditProfile = () => {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });
  const [file, setFile] = useState(null);

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        phone: user.phone || "",
        address: user.address || "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("phone", formData.phone);
      data.append("address", formData.address);
      if (file) data.append("profileImage", file);

      const res = await axios.put(`${BackendUrl}/update-profile`, data, {
        withCredentials: true,
       
      });

      toast.success(res.data.message);
      setUser(res.data.user);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      navigate("/profile");
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-md p-5 mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Edit Profile</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <textarea
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="w-full"
        />

        {file && (
          <img
            src={URL.createObjectURL(file)}
            alt="preview"
            className="w-24 h-24 object-cover rounded-full mx-auto"
          />
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
