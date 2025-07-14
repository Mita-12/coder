import React, { useState } from 'react';
import {
  MdAccountCircle,
  MdSecurity,
  MdNotifications,
  MdPayment,
  MdLanguage,
  MdHelpOutline,
  MdEdit,
  MdCheck,
  MdClose,
  MdSearch,
  MdLogout
} from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';
import { RiNotificationLine, RiArrowDownSLine } from 'react-icons/ri';
import { PiMoneyDuotone } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const DashboardNavbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <div className="fixed top-0 left-55 right-0 h-16 bg-white border-b border-gray-200 z-10 flex items-center justify-between px-6">
      {/* Left side - Search and Menu */}
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-lg hover:bg-gray-50 lg:hidden">
          <FiMenu className="text-gray-600 text-xl" />
        </button>

        <div className="relative hidden lg:block w-72">
          <MdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
          <input
            type="text"
            placeholder="Search campaigns, reports..."
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:bg-white focus:border-indigo-300 text-sm transition-all duration-200"
          />
        </div>
      </div>

      {/* Right side - Icons and Profile */}
      <div className="flex items-center space-x-5">

        {/* Profile Dropdown */}
        <div className="relative">
          <button
            className="flex items-center space-x-2 group"
            onClick={() => setIsProfileOpen(!isProfileOpen)}
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center">
              <span className="text-white font-medium text-sm">HP</span>
            </div>
            <div className="hidden md:flex flex-col items-start">
              <span className="text-sm font-medium text-gray-700">Henry</span>
              <span className="text-xs text-gray-500">Registered</span>
            </div>
            <RiArrowDownSLine className={`text-gray-500 text-lg transition-transform duration-200 ${isProfileOpen ? 'transform rotate-180' : ''}`} />
          </button>

          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-1 border border-gray-100">
              <div className="px-4 py-3 border-b border-gray-100">
                <p className="text-sm font-medium text-gray-800">Henry John Paulin</p>
                <p className="text-sm text-gray-600 truncate">henry@gmail.com</p>
                <div className="flex items-center mt-2">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Registered
                  </span>
                  <span className="ml-2 text-xs text-gray-500">25 June 2024</span>
                </div>
              </div>
              <Link to="/user-profile" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50">
                <MdAccountCircle className="mr-3 text-gray-500 text-lg" />
                Profile
              </Link>
              <Link to="/profile" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50">
                <MdSettings className="mr-3 text-gray-500 text-lg" />
                Settings
              </Link>
              <div className="border-t border-gray-100"></div>
              <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50">
                <MdLogout className="mr-3 text-gray-500 text-lg" />
                Log out
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const SettingsPage = () => {

  return (
    <h1>h</h1>
   
  );
};

export default SettingsPage;