import React from 'react';
import { Bell, Settings, User } from 'lucide-react';

export default function AdminNavbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold text-gray-800">Admin Dashboard</h1>
        
        <div className="flex items-center space-x-4">
          <button className="p-2 text-gray-500 hover:text-gray-700 relative">
            <Bell className="h-6 w-6" />
            <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
              3
            </span>
          </button>
          
          <button className="p-2 text-gray-500 hover:text-gray-700">
            <Settings className="h-6 w-6" />
          </button>
          
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <User className="h-5 w-5 text-white" />
            </div>
            <span className="text-gray-700 font-medium">Admin User</span>
          </div>
        </div>
      </div>
    </nav>
  );
}