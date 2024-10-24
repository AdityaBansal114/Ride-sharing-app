import React from 'react';
import { Phone, Car, Users, MapPin, DollarSign, Users as UsersIcon } from 'lucide-react'; // Import necessary icons
import { useRecoilValue } from 'recoil';
import { tripState } from '../atoms/TripContext';
import toast from 'react-hot-toast';

const TripPage = () => {
  const trip = useRecoilValue(tripState);

  const handleBookRide = () => {
    toast.success('Ride booked successfully!');
    // Implement booking logic here
  };

  return (
    <div className="bg-blue-100 mx-auto min-h-screen p-4 flex items-center justify-center">
      {trip ? (
        <div className="bg-white  p-10 rounded-lg shadow-md w-full max-w-2xl"> {/* Increased padding and max-width */}
          <h3 className="font-bold text-3xl mb-4 text-center text-blue-600">{trip.driver_name}'s Ride</h3>
          <p className="text-lg text-gray-600 mb-2 text-center">
            Created by: <strong>{trip.driver_name}</strong>
          </p>

          <div className="">
            <div className='flex flex-wrap justify-between'>
              <p className="text-lg flex items-center">
                <MapPin className="mr-2" /> 
                <strong>From:</strong>&nbsp; <span>{trip.source}</span>
              </p>
              <p className="text-lg flex items-center">
                <MapPin className="mr-2" />
                <strong>To:</strong>&nbsp; <span>{trip.destination}</span>
              </p>
            </div>
            <div className="flex flex-wrap justify-between text-lg mt-2">
              <p className="flex items-center">
                <UsersIcon className="mr-2" />
                <strong>Available Seats:&nbsp;</strong> {trip.available_seats}
              </p>
              <p className="flex items-center">
                <DollarSign className="mr-2" />
                <strong>Price:&nbsp;</strong> &#8377;{trip.price}
              </p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="text-black">
            <p className='text-lg'>
              <strong><Phone className="inline mr-1" /> Driver Phone:&nbsp;</strong>
              <a href={`tel:${trip.driver_phone}`} className="text-blue-500 hover:underline">
                {trip.driver_phone}
              </a>
              <br />
              <strong><Car className="inline mr-1" /> Cab Number:&nbsp;</strong> {trip.cab_number} <br />
              <strong><Users className="inline mr-1" /> Companions:&nbsp;</strong> {trip.companions.length > 0 ? trip.companions.join(', ') : 'None'}
            </p>
          </div>

          {/* Book Ride Button */}
          <button
            onClick={handleBookRide}
            className="mt-6 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
          >
            Book Ride
          </button>
        </div>
      ) : (
        <p className="text-gray-600 text-center">No trip details available</p>
      )}
    </div>
  );
};

export default TripPage;
