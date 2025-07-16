// MainContent.jsx
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './components/Login';
import Footer from './components/Footer';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import SettingsPage from './pages/Setting';
import WalletPage from './pages/Wallet';
import Profile from './pages/Profile';
import Activity from './components/Activity';
import AllUsers from './pages/AllUser';
function MainContent() {
  const location = useLocation();

  const noFooterPaths = ['/signup', '/login', '/dashboard', '/setting', '/wallet', '/profile', '/activity', '/alluser'];
  const shouldShowFooter =
    !noFooterPaths.includes(location.pathname) && location.pathname !== '*';

  return (
    <>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/setting" element={<SettingsPage />} />
        <Route path="/wallet" element={<WalletPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/alluser" element={<AllUsers />} />
      </Routes>

      {shouldShowFooter && <Footer />}
    </>
  );
}

export default MainContent;