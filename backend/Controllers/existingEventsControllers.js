  import Event from "../models/existingEvents.js";

  //  Add new event
  export const addEvent = async (req, res) => {
    try {
      const { title, category, description, date, duration, price } = req.body;
      const eventImage = req.file;
      console.log("req.body =>", req.body);
      console.log("req.file =>", eventImage);

      if (
        !title ||
        !category ||
        !description ||
        !date ||
        !duration ||
        !price ||
        !eventImage
      ) {
        return res.status(400).json({ message: "All fields required" });
      }

      const imageURL = req.file?.path;
      console.log("Cloudinary URL =>", imageURL);

      const newEvent = await Event.create({
        title,
        category,
        description,
        date,
        duration,
        price,
        eventImage: imageURL,
      });

      res.status(201).json({ message: "Event added successfully", newEvent });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error", error });
    }
  };

  //  Get all events
  export const getEvents = async (req, res) => {
    try {
      const events = await Event.find();
      return res.status(200).json(events);
    } catch (error) {
      return res.status(500).json({ message: "Error fetching events", error });
    }
  };

  //  Get event by ID
  export const getEventById = async (req, res) => {
    try {
      const event = await Event.findById(req.params.id);
      if (!event) return res.status(404).json({ message: "Event not found" });
      return res.status(200).json(event);
    } catch (error) {
      return res.status(500).json({ message: "Error fetching event", error });
    }
  };

  //  Update event
  export const updateEvent = async (req, res) => {
    try {
      const updatedEvent = await Event.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      return res
        .status(200)
        .json({ message: "Event updated successfully", updatedEvent });
    } catch (error) {
      return res.status(500).json({ message: "Error updating event", error });
    }
  };

  //  Delete event
  export const deleteEvent = async (req, res) => {
    try {
      await Event.findByIdAndDelete(req.params.id);
      return res.status(200).json({ message: "Event deleted successfully" });
    } catch (error) {
      return res.status(500).json({ message: "Error deleting event", error });
    }
  };


  //Event Count API

  export const getEventsCount = async (req, res) => {
  try {
    const count = await Event.countDocuments();
    return res.status(200).json({ count });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

