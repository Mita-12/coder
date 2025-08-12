import React from "react";
import { Link, useLocation } from 'react-router-dom';
import { FiCode, FiChevronRight } from "react-icons/fi";

const Navbar = () => {
  const location = useLocation();
  
  // Only show navbar on home page
  if (location.pathname !== '/') {
    return null;
  }

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm py-3 px-6 md:px-12 sticky top-0 z-50 border-b border-gray-100">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo with title - improved */}
        <Link to="/" className="flex items-center group">
          <div className="flex items-center">
            {/* Placeholder logo - replace with your image */}
            <div className="relative mr-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <FiCode className="h-5 w-5 text-white" />
              </div>
              <div className="absolute -bottom-1 -right-1 bg-white p-1 rounded-full border-2 border-white">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
            </div>
            
            <span className="text-2xl md:text-3xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                AffiliatePartner
              </span>
            </span>
          </div>
        </Link>

        {/* CTA Buttons - improved */}
        <div className="hidden md:flex items-center gap-5">
          <Link to="/login" className="group">
            <button className="flex items-center gap-1 text-gray-700 hover:text-indigo-700 px-4 py-2 rounded-full font-medium transition-all duration-200">
              Login
              <FiChevronRight className="opacity-0 group-hover:opacity-100 transition-all duration-200 w-0 group-hover:w-4" />
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-2.5 rounded-full font-medium shadow-sm hover:shadow-md transition-all duration-200 hover:scale-[1.02] flex items-center gap-1">
              Get Started
              <FiChevronRight className="mt-0.5" />
            </button>
          </Link>
        </div>

        {/* Mobile Menu Icon - improved */}
        <div className="md:hidden">
          <button className="text-gray-600 hover:text-indigo-600 focus:outline-none p-2 rounded-md hover:bg-gray-100 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;