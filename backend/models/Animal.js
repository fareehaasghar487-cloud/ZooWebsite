import mongoose from "mongoose";

const AnimalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  ScientificName: {
    type: String,
    required: true,
  },
  diet: {
    type: String,
    required: true,
  },
  habitat: {
    type: String,
    required: true,
  },
   price: { 
    type: Number,
    required: true },
  image: {
    type: String,
    required:true,
  },
});

const Animal = mongoose.model("animal", AnimalSchema);
export default Animal;
