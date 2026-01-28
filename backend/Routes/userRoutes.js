import express from "express";
import {
  changePassword,
  deleteUser,
  forgetPassword,
  getAllUsers,
  getUsersCount,
  login,
  logout,
  myProfile,
  restPassword,
  signup,
  updateProfile,
  updateUserRole,
  verifyUser,
} from "../Controllers/UserControllers.js";
import { LoginRequired } from "../Auth/LoginRequired.js";
import upload from "../middleWare/multer.js";
import { AdminAccess } from "../Auth/AdminAccess.js";

const router = express.Router();

router.get("/get-all-users", LoginRequired, AdminAccess, getAllUsers);
router.delete("/delete-user/:id", LoginRequired, AdminAccess, deleteUser);
router.patch("/role/:id", LoginRequired, AdminAccess, updateUserRole);
router.get("/count/users", LoginRequired, AdminAccess, getUsersCount);

// Routes that anyone can access (login or signup)
router.post("/create-user", signup);
router.post("/login", login);
router.post("/verify-user", verifyUser);
router.post("/forget-Password", forgetPassword);
router.post("/reset-password", restPassword);

// Routes that require login (but not admin)
router.post("/logout", LoginRequired, logout);
router.get("/myProfile", LoginRequired, upload.single("profileImage"), myProfile);
router.put("/changePassword", LoginRequired, changePassword);
router.put("/update-profile", LoginRequired, upload.single("profileImage"), updateProfile);


export default router;
