import express from "express"
import createTrip from "../controllers/trip/createTrip.js";
import joinTrip from "../controllers/trip/joinTrip.js";
const router = express.Router();

router.post("/create",createTrip);  
// router.post("/join",joinTrip);

//TODO
// check if the user is logged in

export default router;