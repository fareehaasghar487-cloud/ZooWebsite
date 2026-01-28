import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { BackendUrl } from "../BaseUrl";


const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);

  // Send OTP
  const handleSendOtp = async (e) => {
    e.preventDefault();
    if (!email.trim()) return toast.error("Enter your email");

    try {
      setLoading(true);
      const res = await axios.post(`${BackendUrl}/forget-Password`, { email });
      toast.success(res.data.message);
      setOtpSent(true);
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // Verify OTP
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    if (!otp.trim()) return toast.error("Enter OTP");

    try {
      setLoading(true);
      const res = await axios.post(`${BackendUrl}/verify-user`, { email, otp });
      toast.success(res.data.message);
      navigate("/reset-password", { state: { email, otp } });
    } catch (err) {
      toast.error(err.response?.data?.message || "Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-green-50">
      <div className="bg-white p-8 rounded-xl shadow w-full max-w-sm">
        {!otpSent ? (
          <>
            <h2 className="text-center text-2xl font-bold mb-4">Forgot Password</h2>
            <form onSubmit={handleSendOtp}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full mb-3 px-3 py-2 border rounded"
                required
              />
              <button className="w-full bg-green-600 text-white py-2 rounded">
                {loading ? "Sending OTP..." : "Send OTP"}
              </button>
            </form>
          </>
        ) : (
          <>
            <h2 className="text-center text-2xl font-bold mb-4">Verify OTP</h2>
            <form onSubmit={handleVerifyOtp}>
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={e => setOtp(e.target.value)}
                className="w-full mb-3 px-3 py-2 border rounded"
                required
              />
              <button className="w-full bg-green-600 text-white py-2 rounded">
                {loading ? "Verifying..." : "Verify OTP"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
