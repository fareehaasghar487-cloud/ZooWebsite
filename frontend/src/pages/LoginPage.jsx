import axios from "axios";
import React, { useState, useContext } from "react";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { BackendUrl } from "../BaseUrl";
import { toast } from "react-toastify";
import { AuthContext } from "../context/userProfile";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
 
  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BackendUrl}/login`, formData, {
        withCredentials: true,
      });

      toast.success(res?.data?.message || "Login Successfully");
      
      login(res?.data?.user);

      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-green-800">
      <div className="bg-white rounded-md shadow-md w-full max-w-md">
        <div className="bg-green-100 text-center py-4 rounded-t-md">
          <h2 className="text-2xl font-semibold text-green-900">
            Join The Movement
          </h2>
        </div>

        <form
          onSubmit={handleSubmit}
          className="p-6 space-y-5"
          autoComplete="off"
        >
          
          <input
            type="text"
            name="fakeUsername"
            autoComplete="username"
            style={{ display: "none" }}
          />
          <input
            type="password"
            name="fakePassword"
            autoComplete="new-password"
            style={{ display: "none" }}
          />

         
          <div>
            <label className="block text-sm font-medium mb-1">
              Email Address
            </label>
            <div className="flex items-center border border-gray-300 rounded px-2">
              <FaEnvelope className="text-gray-500" />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="new-email"
                className="w-full px-2 py-2 outline-none"
              />
            </div>
          </div>

          
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <div className="flex items-center border border-gray-300 rounded px-2">
              <FaLock className="text-gray-500" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
                autoComplete="new-password"
                className="w-full px-2 py-2 outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-green-700"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

         
          <div className="text-right text-sm">
            <Link to="/forget-password" className="text-green-700 hover:underline">
              Forgot Password?
            </Link>
          </div>

          
          <button
            type="submit"
            className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800 transition-all"
          >
            Login
          </button>

   
          <div className="text-center text-sm">
            Don’t have a Zoo Pass?{" "}
            <Link
              to="/signup"
              className="text-green-700 hover:underline font-semibold"
            >
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
