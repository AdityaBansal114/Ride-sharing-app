import checkIfPointInGeofence from "./getNearestLocation.js";
import { getRoute } from "./getPointsOnMap.js";



export const getValidTrips  = async (trip , source , destination) => {



    const numberOfPoints = 10;

    if(trip.available_seats===trip.companions.length){
        return false;
    }

    if(trip.status != "active"){
        return false;
    }

    const routePoints = await getRoute(trip.source, trip.destination, numberOfPoints);


    const totalDistance = routePoints.totalDistance;
    const radius = totalDistance/numberOfPoints;
    const targetSourceLocation = source;
    const targetDestinationLocation = destination;



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
                return true;
                /*
                    check if there are seats availabe in the car
                    update the companion array in the trip
                
                */
            }
    
    
        }else{
            return false;
        }
    }else{
        return false;
    }
}