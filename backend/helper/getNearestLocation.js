import * as turf from '@turf/turf';

export function checkIfPointInGeofence(points, radius, targetPoint) {

    for (let i = 0; i < points.length; i++) {
        const point = points[i];

        const geofence = turf.circle(point, radius, { units: 'kilometers' });
        console.log("GEOFENCE", geofence)

        const isInside = turf.booleanPointInPolygon(targetPoint, geofence);

        if (isInside) {
            return { inside: true, coordinates: point , index:i};
        }
    }

    return { inside: false };
}
