
const joinTrip = (req,res) => {
    console.log("Join the trip")
    res.status(200).json("Trip joined successfully");

    // source , destination
    const {source , destination} = req.body;
    const tripDetails = findTrip(source,destination);
    if(tripDetails){
        //update trip companion
        try {
            tripDetails.addCompanion(currentUserId);
            res.status(200).json({"message" : "Existing trip found", "tripDetails" : tripDetails});

        } catch (error) {
            res.status(400).json({"message" : "Internal server error"});
            
        }

    }else{
        console.log("No Trip exist");
        res.status(200).json({"message" : "No Trip exist for that location"})
    }

    // find any existing trip
    // join as companion
    // calculate his portion of cost

    //time of car to arrive at its location, track the car

}

export default joinTrip;


/*
TRIP SCHEMA

ride_creator
driver_name
cab_number
driver_phoneNo

source
destination
companion : []
available_seats

ride_status = [created, started, completed]















*/