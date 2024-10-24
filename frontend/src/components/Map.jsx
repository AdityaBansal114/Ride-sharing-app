import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  
  const source = [72.8777, 19.0760]; // Mumbai coordinates
  const destination = [77.5946, 12.9716]; // Bangalore coordinates

  useEffect(() => {
    if (map.current) return; // If map is already initialized, return

    // Initialize map
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11', // Map style
      center: source, // Starting position [lng, lat]
      zoom: 5, // Initial zoom level
    });

    // Add zoom and rotation controls to the map
    map.current.addControl(new mapboxgl.NavigationControl());

    // Add source marker
    new mapboxgl.Marker({ color: 'green' })
      .setLngLat(source)
      .addTo(map.current);

    // Add destination marker
    new mapboxgl.Marker({ color: 'red' })
      .setLngLat(destination)
      .addTo(map.current);

    // Fetch and draw the route between source and destination
    const getRoute = async () => {
      const response = await fetch(
        `https://api.mapbox.com/directions/v5/mapbox/driving/${source[0]},${source[1]};${destination[0]},${destination[1]}?geometries=geojson&access_token=${mapboxgl.accessToken}`
      );
      const data = await response.json();
      const route = data.routes[0].geometry;

      // Add the route as a layer to the map
      map.current.addLayer({
        id: 'route',
        type: 'line',
        source: {
          type: 'geojson',
          data: {
            type: 'Feature',
            properties: {},
            geometry: route,
          },
        },
        layout: {
          'line-join': 'round',
          'line-cap': 'round',
        },
        paint: {
          'line-color': '#3887be', // Route line color
          'line-width': 5, // Route line width
        },
      });
    };

    // Load the route once the map is fully loaded
    map.current.on('load', getRoute);
  }, []);

  return (
    <div style={{ height: '100vh', width: '100%' }}> {/* Ensure container height and width */}
      <div ref={mapContainer} style={{ height: '100%', width: '100%' }} /> {/* Map container */}
    </div>
  );
};

export default Map;
