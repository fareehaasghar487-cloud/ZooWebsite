import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { BackendUrl } from "../BaseUrl";

const ResetPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { email, otp } = location.state || {};

  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!newPassword.trim()) return toast.error("Enter new password");

    try {
      setLoading(true);
      const res = await axios.post(`${BackendUrl}/reset-password`, {
        email,
        otp,
        newPassword,
      });
      toast.success(res.data.message);
      navigate("/login");
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-green-50">
      <div className="bg-white p-8 rounded-xl shadow w-full max-w-sm">
        <h2 className="text-center text-2xl font-bold mb-4">Reset Password</h2>
        <form onSubmit={handleResetPassword}>
          <input
            type="password"
            placeholder="Enter new password"
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)}
            className="w-full mb-3 px-3 py-2 border rounded"
            required
          />
          <button className="w-full bg-green-600 text-white py-2 rounded">
            {loading ? "Resetting..." : "Reset Password"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
