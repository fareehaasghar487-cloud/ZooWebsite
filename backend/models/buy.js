
import mongoose from "mongoose";
const buySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  animalId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Animal", 
    required: true,
  },
  quantity: Number,
  
  
});

const Buy = mongoose.model("Buy", buySchema);
export default Buy;
