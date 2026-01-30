import React, { useEffect, useContext } from "react";
import "./App.css";
import "aos/dist/aos.css"; // ✅ Import AOS CSS
import AOS from "aos";      // ✅ Import AOS

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

import { AuthContext } from "./context/userProfile";
import { BackendUrl } from "./BaseUrl";
import AdminRoute from "./components/protectedRoute";

// Components
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Sidebar from "./components/dashboard/common/SideBar";
import DashboardNavbaar from "./components/dashboard/common/Navbar";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import LoginPage from "./pages/LoginPage";
import Overview from "./pages/dashboard/Overview";
import Users from "./pages/dashboard/Users";
import AnimalsPage from "./pages/dashboard/AnimalPage";
import EventPage from "./pages/dashboard/EventPage";
import Profile from "./pages/ProfilePage/Profile";
import EditProfile from "./pages/ProfilePage/editProfile";
import VerifyOtp from "./pages/VerifyOtp";
import ForgotPassword from "./pages/forgetPassword";
import ResetPassword from "./pages/ResetPassword";

// ---------------- Layouts ----------------
const MainLayout = () => (
  <div>
    <Navbar />
    <Outlet />
    <Footer />
  </div>
);

const AdminLayout = () => (
  <div className="flex flex-col h-screen">
    <div className="fixed top-0 left-0 right-0 z-50">
      <DashboardNavbaar />
    </div>
    <div className="flex flex-1 pt-16">
      <div className="w-64 fixed top-16 left-0 bottom-0 bg-green-800 text-white overflow-hidden">
        <Sidebar />
      </div>
      <div className="flex-1 ml-64 p-6 overflow-y-auto bg-gray-50">
        <Outlet />
      </div>
    </div>
  </div>
);

// ---------------- App Component ----------------
function App() {
  const { login } = useContext(AuthContext);

  useEffect(() => {
    // ---------------- AOS Initialization ----------------
    AOS.init({
      duration: 800, // Animation duration in ms
      easing: "ease-in-out", // Animation easing
      once: true, // Whether animation should happen only once
    });

    // ---------------- Fetch User Profile ----------------
    const fetchProfile = async () => {
      try {
        const res = await axios.get(`${BackendUrl}/myProfile`, { withCredentials: true });
        await login(res?.data?.user);
      } catch (err) {
        console.error("Error fetching profile:", err.response || err);
        toast.error(err?.response?.data?.message);
      }
    };

    fetchProfile();
  }, []);

  // ---------------- Routes ----------------
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/service", element: <Service /> },
        { path: "/events", element: <Events /> },
        { path: "/contact", element: <Contact /> },
        { path: "/profile", element: <Profile /> },
        { path: "/edit-profile", element: <EditProfile /> },
      ],
    },
    {
      path: "/dashboard",
      element: <AdminRoute />,
      children: [
        {
          element: <AdminLayout />,
          children: [
            { index: true, element: <Overview /> },
            { path: "users", element: <Users /> },
            { path: "animals", element: <AnimalsPage /> },
            { path: "events", element: <EventPage /> },
          ],
        },
      ],
    },
    { path: "/login", element: <LoginPage /> },
    { path: "/signup", element: <Signup /> },
    { path: "/verify-otp", element: <VerifyOtp /> },
    { path: "/forget-password", element: <ForgotPassword /> },
    { path: "/reset-password", element: <ResetPassword /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
