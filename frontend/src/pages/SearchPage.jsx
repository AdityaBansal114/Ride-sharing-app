import  { useState } from 'react';
import {
  GeoapifyGeocoderAutocomplete,
  GeoapifyContext,
} from '@geoapify/react-geocoder-autocomplete';
import '@geoapify/geocoder-autocomplete/styles/minimal.css';
import axios from 'axios'


const SearchPage = () => {
  const [leavingFrom, setLeavingFrom] = useState('');
  const [goingTo, setGoingTo] = useState('');
  const [leavingFromCoords, setLeavingFromCoords] = useState([]);
  const [goingToCoords, setGoingToCoords] = useState([]);

  const handleSearch = async(e) => {
    e.preventDefault();
    console.log('Searching for:', { leavingFromCoords, goingToCoords });
    
    const res = await axios.post("http://localhost:8000/api/trip/find", {
      source: leavingFromCoords,
      destination : goingToCoords
    })
    
    console.log(res);
    
  };

  const handleLeavingFromSelect = (value) => {
    if (value) {
      setLeavingFrom(value.properties.formatted);
      setLeavingFromCoords([
        value.properties.lon,
        value.properties.lat,
      ]);
    }
  };

  const handleGoingToSelect = (value) => {
    if (value) {
      setGoingTo(value.properties.formatted);
      setGoingToCoords([
        value.properties.lon,
        value.properties.lat,
      ]);
    }
  };

  return (
    <div className="h-[89vh] flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Search for Rides</h2>
        <form onSubmit={handleSearch} className="space-y-4">
        <GeoapifyContext apiKey= {import.meta.env.VITE_GEO_API_KEY}>
            <div>
              <label className="block text-gray-700">Leaving From</label>
              <GeoapifyGeocoderAutocomplete
                placeholder="Enter departure city"
                type="city"
                value={leavingFrom}
                placeSelect={handleLeavingFromSelect}
              />
            </div>

            <div>
              <label className="block text-gray-700">Going To</label>
              <GeoapifyGeocoderAutocomplete
                placeholder="Enter destination city"
                type="city"
                value={goingTo}
                placeSelect={handleGoingToSelect}
              />
            </div>
          </GeoapifyContext>



          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchPage;
