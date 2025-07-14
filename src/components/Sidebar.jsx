import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import {
  MdDashboard,
  MdOutlineSummarize,
  MdOutlineMessage,
  MdPeople,
  MdSettings,
  MdMenu,
  MdClose,
  MdAccountBalanceWallet,
  MdSupportAgent,
  MdCampaign,
} from "react-icons/md";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Summary', icon: <MdOutlineSummarize size={24} />, to: '/dashboard' },
    { name: 'Messages', icon: <MdOutlineMessage size={24} />, to: '#' },
    { name: 'Customers', icon: <MdPeople size={24} />, to: '/activity' },
    { name: 'Wallet', icon: <MdAccountBalanceWallet size={24} />, to: '/wallet' },
    { name: 'Settings', icon: <MdSettings size={24} />, to: '/#' },
    { name: 'Advertisements', icon: <MdCampaign size={24} />, to: '/ads' },
  ];

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div  >
      {/* Mobile Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors"
      >
        {isOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 shadow-lg z-40 transition-all duration-300 h-full bg-white
        ${isOpen ? 'left-0' : '-left-64 md:left-0'}`}
      >
        <div className="w-full bg-indigo-500 h-30 flex justify-center items-center rounded-1xl p-4">
          <NavLink
            to="/dashboard"
            className="flex items-center gap-4"
            onClick={toggleSidebar}
          >
            <div className="bg-indigo-500 p-2 rounded-lg shadow-sm">
              <MdDashboard size={30} className="text-white" />
            </div>
            <div className="text-center">
              <h1 className="text-2xl font-bold text-white">Dashboard</h1>
              <p className="text-sm text-blue-200 mt-1">Administrator Panel</p>
            </div>
          </NavLink>
        </div>
        <div className="flex flex-col justify-between items-center">
          {/* Navigation */}
          <nav className="flex-1 border-blue-600/30">
            <ul className="space-y-3">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.to}
                    className={() =>
                      `flex items-center gap-4 px-5 py-4 text-lg rounded-xl transition-all duration-200 `
                    }
                    onClick={toggleSidebar}
                  >
                    <span className=" rounded-lg  text-indigo-600 ">
                      {item.icon}
                    </span>
                    <span className="font-semibold">{item.name}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Help Center Footer */}
          <div className=" border-t border-blue-600/30 items-center ">
            <NavLink
              to="/help"
              className={() =>
                `flex items-center gap-4 px-5 py-4 text-lg rounded-xl transition-all `
              }
              onClick={toggleSidebar}
            >
              <span className=" rounded-lg bg-indigo-500 ">
                <MdSupportAgent size={24} />
              </span>
              <span className="font-semibold">Help Center</span>
            </NavLink>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;