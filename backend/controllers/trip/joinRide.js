import Trip from "../../models/trip.js";

export const joinRide = async (req,res) => {
    try {

        const {tripId} = req.body;

        const userId = req.user._id;
        

        const trip = Trip.findById(tripId);
        if(trip.status != "active"){
            res.status(400).json({message : "ride is unactive"});
        }

        if(trip.available_seats===trip.companions.length){
            res.status(500).json({message : "no seats available"});
        }

        trip.companions.push(userId);
        await trip.save();

        res.status(200).json({message : "success"})
    
        
    } catch (error) {
        console.log("Error in join ride controller", error);
        res.status(500).json({message : "failed"});
    }
}

