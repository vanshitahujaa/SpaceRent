import React from 'react';
import { Home, LogIn, UserPlus } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg fixed w-full z-50"> {/* Increased z-index */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Home className="h-6 w-6 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">SpaceRent</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link 
              to="/properties" 
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Explore
            </Link>
            <Link 
              to="/login" 
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              <LogIn className="h-5 w-5" />
              <span>Login</span>
            </Link>
            <Link
              to="/signup"
              className="flex items-center space-x-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm font-medium"
            >
              <UserPlus className="h-5 w-5" />
              <span>Sign Up</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}