import React from 'react';
import { Home, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2">
              <Home className="h-6 w-6 text-blue-400" />
              <span className="text-xl font-bold">SpaceRent</span>
            </Link>
            <p className="mt-4 text-gray-400">
              Find your perfect space for business or living. Quality properties at competitive prices.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/properties" className="text-gray-400 hover:text-white">Properties</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Property Types</h3>
            <ul className="space-y-2">
              <li><Link to="/properties?type=warehouse" className="text-gray-400 hover:text-white">Warehouses</Link></li>
              <li><Link to="/properties?type=office" className="text-gray-400 hover:text-white">Office Spaces</Link></li>
              <li><Link to="/properties?type=residential" className="text-gray-400 hover:text-white">Residential</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-400">contact@spacerent.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} SpaceRent. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}