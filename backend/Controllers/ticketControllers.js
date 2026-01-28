import ticket from "../models/ticket.js";

export const bookTicket = async (req, res) => {
  try {
    const { name, email, tickets } = req.body;

    if (!name || !email || !tickets) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    const newTicket = new ticket({ name, email, tickets });
    await newTicket.save();

    res.status(200).json({ message: "Ticket booked successfully!", ticket: newTicket });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};
