    import express from "express";
    import { addEvent, deleteEvent, getEventById, getEvents, getEventsCount, updateEvent } from "../Controllers/existingEventsControllers.js";
    import upload from "../middleWare/multer.js";
    import { AdminAccess } from "../Auth/AdminAccess.js";
    import { LoginRequired } from "../Auth/LoginRequired.js";


    const router = express.Router();

    
router.get("/get-Events",getEvents);
router.get("/get-One-Event/:id", LoginRequired, AdminAccess, getEventById);
router.put("/update-Events/:id", LoginRequired, AdminAccess, updateEvent);
router.delete("/delete-Event/:id", LoginRequired, AdminAccess, deleteEvent);
router.post("/add-Event", LoginRequired, AdminAccess, upload.single("eventImage"), addEvent);
router.get("/count/events", LoginRequired, AdminAccess, getEventsCount);

   
    export default router;
