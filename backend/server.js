import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";

// ROUTES IMPORTS (Move these to the top too!)
import userRoutes from "./Routes/userRoutes.js";
import EventRoutes from "./Routes/existingEventsRoutes.js";
import AnimalRoutes from "./Routes/AnimalRoutes.js";
import ticketRoutes from "./Routes/ticketRoutes.js";
import buyRoutes from "./Routes/buyRoutes.js";

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// Database connection
mongoose
  .connect("mongodb://127.0.0.1:27017/backend")
  .then(() => console.log("✅ Database is connected successfully"))
  .catch((err) => console.log("❌ Error in connecting database", err));

// Test route
app.get("/hello", (req, res) => {
  res.send("Backend is running....");
});

// Use routes
app.use(userRoutes);
app.use(EventRoutes);
app.use(AnimalRoutes);
app.use(ticketRoutes);
app.use(buyRoutes);

// Start server
app.listen(PORT, () => console.log(`🚀 Server is running on port ${PORT}`));
