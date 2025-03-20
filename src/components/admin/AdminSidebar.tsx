import React from 'react';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Building2, 
  Users, 
  MessageSquare, 
  FileText, 
  Settings,
  LogOut
} from 'lucide-react';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/admin' },
  { icon: Building2, label: 'Properties', path: '/admin/properties' },
  { icon: Users, label: 'Users', path: '/admin/users' },
  { icon: MessageSquare, label: 'Messages', path: '/admin/messages' },
  { icon: FileText, label: 'Reports', path: '/admin/reports' },
  { icon: Settings, label: 'Settings', path: '/admin/settings' },
];

export default function AdminSidebar() {
  return (
    <div className="w-64 bg-gray-900 text-white min-h-screen flex flex-col">
      <div className="p-6">
        <Link to="/admin" className="flex items-center space-x-2">
          <Building2 className="h-8 w-8 text-blue-400" />
          <span className="text-xl font-bold">SpaceRent Admin</span>
        </Link>
      </div>
      
      <nav className="flex-1 px-4 py-6">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <item.icon className="h-5 w-5 text-gray-400" />
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="p-4 border-t border-gray-800">
        <button className="flex items-center space-x-3 text-gray-400 hover:text-white w-full px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors">
          <LogOut className="h-5 w-5" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}