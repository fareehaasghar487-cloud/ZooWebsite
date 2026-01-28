import Buy from "../models/buy.js";

export const buyNow = async (req, res) => {
  try {
    const { quantity } = req.body;
    const userId = req.user?.id;
    const { animalId } = req.params;

    if (!quantity || !userId || !animalId) {
      return res.status(400).json({ message: "Missing required fields" });
    }
    const newPurchase = new Buy({ animalId, userId, quantity });
    await newPurchase.save();

    res.status(200).json({ message: "Purchase successful", data: newPurchase });
  } catch (error) {
    console.error("Error in buyNow:", error);
    res.status(500).json({ message: "Server error", error });
  }
};
