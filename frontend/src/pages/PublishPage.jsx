import { useState } from 'react';
import toast from 'react-hot-toast';
import {
  GeoapifyGeocoderAutocomplete,
  GeoapifyContext,
} from '@geoapify/react-geocoder-autocomplete';
import '@geoapify/geocoder-autocomplete/styles/minimal.css';

const PublishPage = () => {
  const [leavingFrom, setLeavingFrom] = useState('');
  const [goingTo, setGoingTo] = useState('');
  const [leavingFromCoords, setLeavingFromCoords] = useState([]);
  const [goingToCoords, setGoingToCoords] = useState([]);
  const [availableSeats, setAvailableSeats] = useState('');
  const [cabNumber, setCabNumber] = useState('');
  const [driverName, setDriverName] = useState('');
  const [driverPhone, setDriverPhone] = useState('');
  const [price, setPrice] = useState('');
  const [rideStatus, setRideStatus] = useState('active');

  const handlePublish = (e) => {
    e.preventDefault();
    const rideDetails = {
      leavingFrom,
      goingTo,
      leavingFromCoords,
      goingToCoords,
      availableSeats,
      cabNumber,
      driverName,
      driverPhone,
      price,
      rideStatus,
    };
    console.log('Publishing ride:', rideDetails);
    toast.success('Ride published successfully');



    
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
    <div className="min-h-screen flex py-10 items-center justify-center bg-gray-100">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Publish a Ride</h2>
        <form onSubmit={handlePublish} className="space-y-4">
          <GeoapifyContext apiKey="">
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

          <div>
            <label className="block text-gray-700">Available Seats</label>
            <input
              type="number"
              max="5"
              min="1"
              className="w-full p-2 border rounded-lg mt-2"
              placeholder="Enter available seats"
              value={availableSeats}
              onChange={(e) => setAvailableSeats(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Cab Number</label>
            <input
              type="text"
              className="w-full p-2 border rounded-lg mt-2"
              placeholder="Enter cab number"
              value={cabNumber}
              onChange={(e) => setCabNumber(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Driver Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded-lg mt-2"
              placeholder="Enter driver name"
              value={driverName}
              onChange={(e) => setDriverName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Driver Phone</label>
            <input
              type="text"
              className="w-full p-2 border rounded-lg mt-2"
              placeholder="Enter driver phone number"
              pattern="^[0-9]{10}$"
              title="Please enter a valid 10-digit phone number"
              value={driverPhone}
              onChange={(e) => setDriverPhone(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-gray-700">Price</label>
            <input
              type="text"
              className="w-full p-2 border rounded-lg mt-2"
              placeholder="Enter price"
              value={price}
              pattern="^[1-9]\d*$"
              title="Please enter a valid price greater than zero"
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Ride Status</label>
            <select
              className="w-full p-2 border rounded-lg mt-2"
              value={rideStatus}
              onChange={(e) => setRideStatus(e.target.value)}
            >
              <option value="active">Active</option>
              <option value="unactive">Unactive</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
          >
            Publish Ride
          </button>
        </form>
      </div>
    </div>
  );
};

export default PublishPage;
