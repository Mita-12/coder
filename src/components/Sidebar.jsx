import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  MdDashboard,
  MdPeople,
  MdSettings,
  MdMenu,
  MdClose,
  MdAccountBalanceWallet,
  MdSupportAgent,
  MdCampaign,
} from "react-icons/md";
import { FiHome } from "react-icons/fi";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Dashboard', icon: <FiHome size={20} />, to: '/dashboard' },
    { name: 'AllUser', icon: <MdPeople size={20} />, to: '/alluser' },
    { name: 'Wallet', icon: <MdAccountBalanceWallet size={20} />, to: '/wallet' },
    { name: 'Settings', icon: <MdSettings size={20} />, to: '/#' },
    { name: 'Advertisements', icon: <MdCampaign size={20} />, to: '/ads' },
  ];

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div>
      {/* Mobile Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors"
      >
        {isOpen ? <MdClose size={20} /> : <MdMenu size={20} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 z-40 transition-all duration-300 h-full bg-white
        ${isOpen ? 'left-0' : '-left-64 md:left-0'} w-55`}
      >
        <div className="w-full bg-indigo-500 h-24 flex justify-center items-center p-4">
          <NavLink
            to="/dashboard"
            className="flex items-center gap-3"
            onClick={toggleSidebar}
          >
            <div className="bg-indigo-600 p-2 rounded-lg">
              <MdDashboard size={24} className="text-white" />
            </div>
            <div className="text-center">
              <h1 className="text-xl font-bold text-white">Affiliate</h1>
              <p className="text-lg text-blue-200 mt-1">Administrator Panel</p>
            </div>
          </NavLink>
        </div>

        <div className="flex flex-col justify-between h-[calc(100%-6rem)]">
          {/* Navigation */}
          <nav className="flex-1 border-blue-600/30">
            <ul className="space-y-1 p-2">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-all ${isActive ? 'bg-indigo-50 text-indigo-600' : 'hover:bg-gray-100 text-gray-700'
                      }`
                    }
                    onClick={toggleSidebar}
                  >
                    <span className="text-indigo-600">
                      {item.icon}
                    </span>
                    <span className="font-medium text-lg">{item.name}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Help Center Footer */}
          <div className="border-t border-blue-600/30 p-2">
            <NavLink
              to="/help"
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 text-lg rounded-lg transition-all ${isActive ? 'bg-indigo-50 text-indigo-600' : 'hover:bg-gray-100 text-gray-700'
                }`
              }
              onClick={toggleSidebar}
            >
              <span className="text-indigo-600">
                <MdSupportAgent size={20} />
              </span>
              <span className="font-medium">Help Center</span>
            </NavLink>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;