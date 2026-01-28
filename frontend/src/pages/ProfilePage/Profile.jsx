import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/userProfile";
import { useNavigate } from "react-router-dom";
import { BackendUrl } from "../../BaseUrl";

const ProfileCard = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [profileUser, setProfileUser] = useState(user);

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch(`${BackendUrl}/myProfile`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // include token
          },
        });
        const data = await res.json();

        // set correct data
        if (data?.user) setProfileUser(data.user);
      } catch (err) {
        console.error("Failed to fetch user:", err);
      }
    }

    if (user) fetchUser();
  }, [user]);

  if (!profileUser) {
    return (
      <div className="flex justify-center items-center h-screen text-xl font-semibold">
        No user data found.
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md text-center">
        {/* Profile Image */}
        <img
          src={
            profileUser.profileImage
              ? `${BackendUrl}/${profileUser.profileImage}` // show latest image
              : "/g1.jpg" // fallback
          }
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-blue-500"
        />

        {/* User Info */}
        <h2 className="text-2xl font-bold mt-4">{profileUser.name}</h2>
        <p className="text-gray-600">{profileUser.email}</p>
        <p className="mt-2 font-semibold text-blue-600">
          {profileUser.role === "Admin" ? "Admin" : "User"}
        </p>

        {/* Contact Info */}
        <div className="mt-4 text-left space-y-2">
          <p><strong>📞 Phone:</strong> {profileUser.phone}</p>
          <p><strong>🏠 Address:</strong> {profileUser.address}</p>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex gap-3 justify-center">
          <button
            onClick={() => navigate("/edit-profile")}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Edit Profile
          </button>
          <button
            onClick={logout}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
