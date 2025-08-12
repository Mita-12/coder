// MainContent.jsx
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dasboard/Dashboard';
import SettingsPage from './pages/Setting';
import WalletPage from './pages/wallet/Wallet';
import Profile from './pages/Profile/ProfileView';
import Activity from './components/Activity';
import AllUsers from './pages/AllUser';
import Prize from './pages/Prize';
import Ads from './pages/Advertisement.jsx/Ads';
import Campaign from './pages/Advertisement.jsx/Camapagin'
import Keywords from './pages/Advertisement.jsx/Keyword';
import CreateCampaign from './pages/Advertisement.jsx/CreateCampaign';
import ProfileView from './pages/Profile/ProfileView';
function MainContent() {
  const location = useLocation();

  const noFooterPaths = ['/signup', '/login', '/dashboard', '/setting', '/wallet', '/profileview', '/activity', '/alluser', '/prizes', '/ads', '/campaigns','/keywords','/create-campaign'];
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
        <Route path="/profileview" element={<ProfileView />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/alluser" element={<AllUsers />} />
        <Route path="/prize" element={<Prize />} />
        <Route path="/ads" element={<Ads />} />
        <Route path="/campaigns" element={<Campaign />} />

        <Route path="/keywords" element={<Keywords />} />
                <Route path="/create-campaign" element={<CreateCampaign />} />





      </Routes>

      {shouldShowFooter && <Footer />}
    </>
  );
}

export default MainContent;