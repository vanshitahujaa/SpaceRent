import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './contexts/AuthContext';
import UserLayout from './layouts/UserLayout';
import AdminLayout from './layouts/AdminLayout';
import Hero from './components/Hero';
import Features from './components/Features';
import LoginForm from './components/auth/LoginForm';
import SignupForm from './components/auth/SignupForm';
import PropertiesPage from './components/properties/PropertiesPage';
import RequireAuth from './components/auth/RequireAuth';
import RequireAdmin from './components/auth/RequireAdmin';

function HomePage() {
  return (
    <>
      <Hero />
      <Features />
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* User Routes */}
          <Route element={<UserLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/properties" element={
              <RequireAuth>
                <PropertiesPage />
              </RequireAuth>
            } />
          </Route>

          {/* Auth Routes */}
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />

          {/* Admin Routes */}
          <Route path="/admin" element={
            <RequireAdmin>
              <AdminLayout />
            </RequireAdmin>
          }>
            <Route index element={<div>Admin Dashboard</div>} />
            <Route path="properties" element={<div>Admin Properties</div>} />
            <Route path="users" element={<div>Admin Users</div>} />
            <Route path="messages" element={<div>Admin Messages</div>} />
            <Route path="reports" element={<div>Admin Reports</div>} />
            <Route path="settings" element={<div>Admin Settings</div>} />
          </Route>

          {/* Catch all route - redirect to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Toaster position="top-right" />
      </Router>
    </AuthProvider>
  );
}

export default App