import React from "react";
import { Link, useLocation } from 'react-router-dom';
import { FiCode } from "react-icons/fi";

const Navbar = () => {
  const location = useLocation();
  
  // Only show navbar on home page
  if (location.pathname !== '/') {
    return null;
  }

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-md py-4 px-6 md:px-12 sticky top-0 z-50 border-b border-blue-100">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo with Coder title */}
        <div className="flex items-center">
          <FiCode className="h-8 w-8 text-blue-900 mr-2" />
          <span className="text-2xl md:text-3xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Codder Affliate
            </span>
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex gap-4">
          <Link to="/login">
            <button className="text-blue-900 border border-blue-300 px-4 py-2 rounded-full ">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-indigo-600 text-white px-5 py-2 rounded-full shadow hover:opacity-90 transition-all duration-200">
              Sign Up
            </button>
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button className="text-blue-600 focus:outline-none text-2xl">
            ☰
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;