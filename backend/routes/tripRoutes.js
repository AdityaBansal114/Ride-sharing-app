import express from "express"
import createTrip from "../controllers/trip/createTrip.js";
import findTrip from "../controllers/trip/findTrips.js";
const router = express.Router();

router.post("/create",createTrip);  
router.post("/find",findTrip);
// router.post("/join", joinRide);

//TODO
// check if the user is logged in

export default router;