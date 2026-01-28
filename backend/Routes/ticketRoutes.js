
import express from "express";
const router = express.Router();

router.post("/book-ticket", async (req, res) => {
  const { name, email, tickets} = req.body;
  console.log("🎟️ Ticket Booked:", { name, email, tickets });
  res.status(200).json({ message: "Ticket booked successfully!" });
});

export default router;
