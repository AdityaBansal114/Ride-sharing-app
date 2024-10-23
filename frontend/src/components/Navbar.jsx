import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon, UserIcon, SearchIcon, PlusIcon } from 'lucide-react'; // Icons for menu and user actions

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Change this based on authentication status

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-500 text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="text-xl font-bold flex items-center gap-1 noSelect">
          <img className="hover:animate-bounce" src="https://img.icons8.com/color/48/car--v1.png" alt="App logo"/>
          <Link  to="/">Ride Sharing App</Link>
        </div>

        <div className="hidden md:flex space-x-4">
          {isAuthenticated ? (
            <>
              <Link to="/search" className="hover:text-white p-2  font-semibold text-black  flex items-center gap-1">
                <SearchIcon className="w-4 h-4" /> Search
              </Link>
              <Link to="/publish" className="hover:text-white p-2  font-semibold text-black  flex items-center gap-1">
                <PlusIcon className="w-4 h-4" /> Publish Ride
              </Link>
              <Link to="/profile" className="hover:text-white p-2  font-semibold text-black  flex items-center gap-1">
                <UserIcon className="w-4 h-4" /> Profile
              </Link>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-blue-600 p-2 bg-white font-semibold text-black hover:bg-slate-200">Login</Link>
              <Link to="/signup" className="hover:text-blue-600 p-2 bg-white font-semibold text-black hover:bg-slate-200">Signup</Link>
            </>
          )}
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-blue-500">
          {isAuthenticated ? (
            <>
              <Link to="/search" className="flex px-4 py-2 hover:bg-blue-600 font-semibold gap-1 items-center"><SearchIcon className="w-4 h-4" />Search</Link>
              <Link to="/publish" className="flex px-4 py-2 hover:bg-blue-600 font-semibold gap-1 items-center"><PlusIcon className="w-4 h-4" />Publish Ride</Link>
              <Link to="/profile" className="flex px-4 py-2 hover:bg-blue-600 font-semibold gap-1 items-center"><UserIcon className="w-4 h-4" />Profile</Link>
            </>
          ) : (
            <>
              <Link to="/login" className="block px-4 py-2 hover:bg-blue-600 font-semibold">Login</Link>
              <Link to="/signup" className="block px-4 py-2 hover:bg-blue-600 font-semibold">Signup</Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
