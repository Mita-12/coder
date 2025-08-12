import React, { useState } from "react";
import { NavLink,Link } from "react-router-dom";
import {
  MdDashboard,
  MdPeople,
  MdSettings,
  MdMenu,
  MdClose,
  MdAccountBalanceWallet,
  MdSupportAgent,
  MdCampaign,
  MdExpandMore,
  MdExpandLess,
  MdAdsClick,
  MdKeyboardArrowRight
} from "react-icons/md";
import { FiHome } from "react-icons/fi";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAdDropdownOpen, setIsAdDropdownOpen] = useState(false);

  const menuItems = [
    { name: 'Dashboard', icon: <FiHome size={22} />, to: '/dashboard' },
    { name: 'AllUser', icon: <MdPeople size={22} />, to: '/alluser' },
    { name: 'Wallet', icon: <MdAccountBalanceWallet size={22} />, to: '/wallet' },
    { name: 'Prizes', icon: <MdCampaign size={22} />, to: '/prize' },
  ];

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleAdDropdown = () => setIsAdDropdownOpen(!isAdDropdownOpen);

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
        ${isOpen ? 'left-0' : '-left-72 md:left-0'} w-55`} 
      >
        <div className="w-full bg-indigo-500 h-24 flex justify-center items-center p-4">
          <NavLink
            to="/affiliate"
            className="flex items-center gap-3"
            onClick={toggleSidebar}
          >
            <div className="bg-indigo-600 p-2 rounded-lg">
              <MdDashboard size={24} className="text-white" />
            </div>
            <div className="text-center">
              <h1 className="text-xl font-bold text-white">Affilater </h1>
              <p className="text-lg text-white mt-1">Coddor Affiliate</p>
            </div>
          </NavLink>
        </div>
        
        <div className="flex flex-col justify-between h-[calc(100%-6rem)]">
          {/* Navigation */}
          <nav className="flex-1 border-blue-600/30">
            <ul className="space-y-3 p-4">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `flex items-center gap-4 px-4 py-3 text-sm rounded-lg transition-all ${
                        isActive ? 'bg-indigo-50 text-indigo-600' : 'hover:bg-gray-100 text-gray-700'
                      }`
                    }
                    onClick={toggleSidebar}
                  >
                    <span className="text-indigo-600">
                      {item.icon}
                    </span>
                    <span className="font-medium text-sm">{item.name}</span>
                  </NavLink>
                </li>
              ))}
              
              {/* Advertisements with dropdown */}
              <li>
                <button
                  onClick={toggleAdDropdown}
                  className={`flex items-center justify-between w-full gap-4 px-4 py-3 text-sm rounded-lg transition-all hover:bg-gray-100 ${
                    isAdDropdownOpen ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-indigo-600">
                      <MdCampaign size={22} />
                    </span>
                    <span className="font-medium text-sm"><Link to="/ads">Advertisements</Link></span>
                  </div>
                  <span className="text-indigo-600">
                    {isAdDropdownOpen ? <MdExpandLess size={20} /> : <MdExpandMore size={20} />}
                  </span>
                </button>
                
                {isAdDropdownOpen && (
                  <ul className="mt-1 ml-10 space-y-2">
                    <li>
                      <NavLink
                        to="/campaigns"
                        className={({ isActive }) =>
                          `flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-all ${
                            isActive ? 'bg-indigo-100 text-indigo-700' : 'hover:bg-gray-100 text-gray-600'
                          }`
                        }
                        onClick={toggleSidebar}
                      >
                        <MdKeyboardArrowRight size={18} />
                        <span>Campaigns</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/keywords"
                        className={({ isActive }) =>
                          `flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-all ${
                            isActive ? 'bg-indigo-100 text-indigo-700' : 'hover:bg-gray-100 text-gray-600'
                          }`
                        }
                        onClick={toggleSidebar}
                      >
                        <MdKeyboardArrowRight size={18} />
                        <span>Keywords</span>
                      </NavLink>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </nav>

          {/* Help Center Footer */}
          <div className="border-t border-blue-600/30 p-4">
            <NavLink
              to="/help"
              className={({ isActive }) =>
                `flex items-center gap-4 px-4 py-3 text-sm rounded-lg transition-all ${
                  isActive ? 'bg-indigo-50 text-indigo-600' : 'hover:bg-gray-100 text-gray-700'
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