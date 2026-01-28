import express from "express";
import { buyNow } from "../Controllers/buyController.js";
import { LoginRequired } from "../Auth/LoginRequired.js";

const router = express.Router();

router.post("/buy/:animalId",LoginRequired, buyNow);

export default router;
