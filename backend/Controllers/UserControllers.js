import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { setUser } from "../Auth/jwt.js";
import sendMail from "../middleWare/sendMail.js";
import { generateotp } from "../middleWare/generateotp.js";

// Signup API
export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "This email is already registered, please try another email",
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const otp = generateotp();
    const otpExpires = Date.now() + 10 * 60 * 1000;; 

   
    const newUser = await User.create({
      name,
      email,
      password: hashPassword,
      otp,
      otpExpires,
      isVerified: false,
    });

    
    const subject = "Welcome to Our Website 🎉";
    const html = `
      <h1>Welcome, ${name}!</h1>
      <p>We're excited to have you join us.</p>
      <p><strong>Your OTP is: ${otp}</strong></p>
      <p>This OTP will expire in 10 minutes.</p>
      <br>
      <p>Best Regards,<br>Your Website Team</p>
    `;

    await sendMail(email, subject, html);

    return res.status(200).json({
      message: "User created successfully. Check your email to verify your account.",
    });
    
  } catch (error) {
    console.error("Signup Error:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

//verified OTP API
export const verifyUser = async (req, res) => {
  try {
    const { email, otp } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    if (user.otp !== otp) {
      return res.status(400).json({ message: "Invalid or expired otp" });
    }
    if (user.otpExpires < Date.now()) {
      return res.status(400).json({ message: "Otp has expired" });
    }
    user.isVerified = true;
    await user.save();
    return res
      .status(200)
      .json({ message: "Your account verified successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

//Login API
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ message: "User with this email not found" });
    }
    const comparePassword = await bcrypt.compare(password, user.password);
    if (!comparePassword) {
      return res
        .status(400)
        .json({ message: "Email or password is incorrect" });
    }
    if (!user.isVerified) {
      return res.status(401).json({ message: "Your accout is not verified" });
    }
    const token = await setUser(user);
    await res.cookie("token", token);
    return res.status(200).json({ message: "Login successfull", user });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};
// forget Password
export const forgetPassword = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const otp = generateotp();
    user.otp = otp;
    user.otpExpires = Date.now() + 10 * 60 * 1000; 
    await user.save();

    const html = `
      <h3>Reset your password</h3>
      <p>Your OTP is: <b>${otp}</b></p>
      <p>It will expire in 10 minutes.</p>
    `;

    await sendMail(email, "Reset Password OTP", html);
    return res.status(200).json({ message: "OTP sent to your email" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};
//Reset Password API

export const restPassword  = async(req , res) =>{
  try {
    const {email , otp , newPassword} = req.body;
    const user = await User.findOne({email});
    if(!user){
      return res.status(404).json({message:"User not found"});
    }

    if (user.otp !== otp || user.otpExpires < new Date()) {
      return res.status(400).json({ message: "Invalid or expired OTP" });
    }
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
     user.otp = null;
    user.otpExpires = null;
    await user.save();

    res.status(200).json({ message: "Password reset successfully" });
  } catch (error) {

    return res.status(500).json({message:"Server error", error})
  }
}
//get-all-users

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});

    return res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching users" });
  }
};
//Delete USer
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};

//Logout API
export const logout = async (req, res) => {
  try {
    res.clearCookie("token");
    res.json({ message: "Logged out successfully" });
  } catch (error) {
    console.log(error);
  }
};

//myProfile
export const myProfile = async (req, res) => {
  try {
    const user = req.user;
    return res.status(200).json({ user });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

//Change Password

export const changePassword = async (req, res) => {
  try {
    const { email, oldPassword, newPassword } = req.body;

    // Find user
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    // Compare old password
    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Old password is incorrect" });

    // Hash new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update password
    user.password = hashedPassword;
    await user.save();

    return res.status(200).json({ message: "Password changed successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

//update profile

export const updateProfile = async (req, res) => {
  try {
    const { name, phone, address} = req.body;
     const profileImage = req.file?.path;
    console.log(req.user);
    const updatedUser = await User.findByIdAndUpdate(
      req.user.id,

      { name, phone, address, profileImage },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({
      message: "Profile updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

// Update user role
export const updateUserRole = async (req, res) => {
  try {
    const { id } = req.params;
    const { role } = req.body;

    if (!["Admin", "User"].includes(role)) {
      return res.status(400).json({ message: "Invalid role" });
    }

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { role },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({
      message: "Role updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

//user Count API
export const getUsersCount = async (req, res) => {
  try {
    const count = await User.countDocuments();
    return res.status(200).json({ count });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};
