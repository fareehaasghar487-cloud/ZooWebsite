import express from "express";
import { addAnimal, deleteAnimal, getAnimalById, getAnimals, getAnimalsCount, updateAnimal } from "../Controllers/AnimalControllers.js";
import upload from "../middleWare/multer.js";
import { AdminAccess } from "../Auth/AdminAccess.js";
import { LoginRequired } from "../Auth/LoginRequired.js";


const router = express.Router(); 

router.get("/get-Animal",  getAnimals);
router.get("/get-one-Animal/:id", LoginRequired, AdminAccess, getAnimalById);
router.put("/update-Animal/:id", LoginRequired, AdminAccess, updateAnimal);
router.delete("/delete-Animal/:id", LoginRequired, AdminAccess, deleteAnimal);
router.post("/add-Animal", LoginRequired, AdminAccess, upload.single("animalImage"), addAnimal);
router.get("/count/animals", LoginRequired, AdminAccess, getAnimalsCount);


export default router;
