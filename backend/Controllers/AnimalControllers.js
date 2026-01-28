import Animal from "../models/Animal.js";


export const addAnimal = async (req, res) => {
  try {
    const { name, description, ScientificName, diet, habitat, price } = req.body;
    const imageFile = req.file?.path;

    console.log("📦 req.body =>", req.body);
    console.log("🖼️ req.file =>", imageFile);

    if (!name || !description || !ScientificName || !diet || !habitat || !price || !imageFile) {
      return res.status(400).json({ message: "All fields required" });
    }

    // ✅ Store Cloudinary image URL
    
    const imageURL = req.file?.path;
    console.log("Cloudinary URL =>", imageURL);

  


    const newAnimal = await Animal.create({
      name,
      description,
      ScientificName,
      diet,
      habitat,
      price,
       image:imageURL,
    });
      

    res.status(201).json({ message: "Animal added successfully", newAnimal });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error. Please try again later" });
  }
};


//get All Animals

export const getAnimals = async (req, res) => {
  try {
    const animals = await Animal.find();
    return res.status(200).json(animals);
  } catch (error) {
    return res.status(500).json({ message: "Error fetching animals", error });
  }
};


//  Get One animal by ID
export const getAnimalById = async (req, res) => {
  try {
    const animal = await Animal.findById(req.params.id);
    if (!animal) return res.status(404).json({ message: "Animal not found" });
   return res.status(200).json(animal);
  } catch (error) {
    return res.status(500).json({ message: "Error fetching animal", error });
  }
};

// Update animal
export const updateAnimal = async (req, res) => {
  try {
    const updated = await Animal.findByIdAndUpdate(req.params.id, req.body, { new: true });
   return res.status(200).json({ message: "Animal updated successfully", updated });
  } catch (error) {
   return res.status(500).json({ message: "Error updating animal", error });
  }
};


// Delete animal
export const deleteAnimal = async (req, res) => {
  try {
    await Animal.findByIdAndDelete(req.params.id);
   return res.status(200).json({ message: "Animal deleted successfully" });
  } catch (error) {
   return res.status(500).json({ message: "Error deleting animal", error });
  }
};


//Animal Count API
export const getAnimalsCount = async (req, res) => {
  try {
    const count = await Animal.countDocuments();
    return res.status(200).json({ count });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

