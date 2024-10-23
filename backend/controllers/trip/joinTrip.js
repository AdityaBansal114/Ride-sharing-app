import { getRoute } from "./helper/getPointsOnMap.js";
import {checkIfPointInGeofence} from "./helper/getNearestLocation.js"





const joinTrip = async (req,res) => {

    // FETCH ALL THE TRIPS AND CHECK ON EACH
    // alltrips = getAllTrips() that are not started yet for that day


    /*
        date -> req.body.date
        companion_source = req.body.source
        companion_destination = req.body.destination
    */


    // wrap everything in try catch

    const source = req.body.source; //long, lat 
    const destination = req.body.destination;
    const numberOfPoints = 10;

    const routePoints = await getRoute(source, destination, numberOfPoints);


    const totalDistance = routePoints.totalDistance;
    const radius = totalDistance/numberOfPoints;
    const targetSourceLocation = req.body.source;
    const targetDestinationLocation = req.body.destination;



    const startGeofenceLocation = checkIfPointInGeofence(routePoints.points, radius, targetSourceLocation);
    let destinationGeofenceLocation = null;
    if(startGeofenceLocation.inside){
        destinationGeofenceLocation = checkIfPointInGeofence(routePoints.points, radius, targetDestinationLocation)
        if(destinationGeofenceLocation.inside){
            //trip permitted
    
            const startIndex = startGeofenceLocation.index;
            const endIndex = destinationGeofenceLocation.index;
            console.log("INDEX",[startIndex,endIndex]);
    
    
            if(startIndex<endIndex){
                console.log("TRIP PERMITTED")
                /*
                    check if there are seats availabe in the car
                    update the companion array in the trip
                
                */
            }
    
    
        }else{
            //no destination found
        }
    }else{
        //NO SOURCE EXIST
    }



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