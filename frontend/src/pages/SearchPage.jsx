import  { useState } from 'react';

const SearchPage = () => {
  const [leavingFrom, setLeavingFrom] = useState('');
  const [goingTo, setGoingTo] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', { leavingFrom, goingTo });
  };

  return (
    <div className="h-[89vh] flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Search for Rides</h2>
        <form onSubmit={handleSearch} className="space-y-4">
          <div>
            <label className="block text-gray-700">Leaving From</label>
            <input
              type="text"
              className="w-full p-2 border rounded-lg mt-2"
              placeholder="Enter departure city"
              value={leavingFrom}
              onChange={(e) => setLeavingFrom(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Going To</label>
            <input
              type="text"
              className="w-full p-2 border rounded-lg mt-2"
              placeholder="Enter destination city"
              value={goingTo}
              onChange={(e) => setGoingTo(e.target.value)}
              required
            />
          </div>

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
