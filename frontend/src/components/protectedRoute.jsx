import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/userProfile";

const AdminRoute = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/login" replace />; // not logged in
  }

  if (user.role !== "Admin") {
    return <Navigate to="/" replace />; // not admin
  }

  return <Outlet />; // admin allowed
};

export default AdminRoute;
