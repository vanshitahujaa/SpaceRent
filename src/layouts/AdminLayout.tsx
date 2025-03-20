import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminNavbar from '../components/admin/AdminNavbar';
import AdminSidebar from '../components/admin/AdminSidebar';

export default function AdminLayout() {
  return (
    <div className="min-h-screen flex">
      <AdminSidebar />
      <div className="flex-1 flex flex-col">
        <AdminNavbar />
        <main className="flex-1 bg-gray-50 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}