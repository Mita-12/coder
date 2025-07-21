import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import ActivityPage from "../components/Activity";
import GraphSection from "./Graph";
import { GiClick } from "react-icons/gi";
import {
  MdOutlineAddShoppingCart,
  MdOutlinePersonAddAlt,
  MdSearch,
  MdSettings,
  MdLogout,
  MdAccountCircle
} from "react-icons/md";
import { FaFilterCircleDollar } from "react-icons/fa6";
import { TbCalculator } from "react-icons/tb";
import { LiaFileInvoiceDollarSolid, } from "react-icons/lia";
import { PiMoneyDuotone } from "react-icons/pi";
import { RiArrowDownSLine, } from "react-icons/ri";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";

const DashboardNavbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <div className="fixed top-0 left-50 right-0 h-16 bg-white z-10 flex border-b border-gray-200 items-center justify-between px-6 ">
      {/* Left side - Search and Menu */}
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-lg hover:bg-gray-50 lg:hidden">
          <FiMenu className="text-gray-600 text-xl" />
        </button>
      </div>

      {/* Right side - Icons and Profile */}
      <div className="flex items-center space-x-5  ">

        <div className="relative hidden lg:block w-72">
          <MdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
          <input
            type="text"
            placeholder="Search campaigns, reports..."
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:bg-white focus:border-indigo-300 text-sm transition-all duration-200"
          />
        </div>

        {/* Profile Dropdown */}
        <div className="relative ">
          <button
            className="flex items-center space-x-2 group"
            onClick={() => setIsProfileOpen(!isProfileOpen)}
          >
            <div className="w-9 h-9 rounded-full bg-indigo-600 flex items-center justify-center">
              <span className="text-white font-medium text-sm">NH</span>
            </div>
            <div className="hidden md:flex flex-col items-start">
              <span className="text-sm font-medium text-gray-700">Neha
              </span>
              <span className="text-xs text-gray-500">Admin</span>
            </div>
            <RiArrowDownSLine className={`text-gray-500 text-lg transition-transform duration-200 ${isProfileOpen ? 'transform rotate-180' : ''}`} />
          </button>



          {/* Profile Dropdown Menu */}
          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-1 border border-gray-100">

              <Link to="/" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50">
                <MdAccountCircle className="mr-3 text-gray-500 text-lg" />
                ViweProfile
              </Link>
              <Link to="/profile" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50">
                <MdSettings className="mr-3 text-gray-500 text-lg" />
                UpdateProfile
              </Link>
              <div className="border-t border-gray-100"></div>
              <Link to="/home" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50">
                <MdLogout className="mr-3 text-gray-500 text-lg" />
                LogOut
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="flex w-full bg-slate-100 ">
      <Sidebar />

      <div className="ml-64 min-h-screen  text-sm text-gray-800 w-full">
        {/* Dashboard Navbar */}
        <DashboardNavbar />

        <div className="mt-16 ">
          <div className="py-8 px-6 sm:px-6">
            <div className="max-w-7xl mx-auto">


              {/* Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
                {/* Clicks Card */}
                <div className="bg-white p-5 rounded-xl border border-gray-300 shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-800 font-medium">Clicks</span>
                    <div className="p-2 rounded-lg bg-blue-200">
                      <GiClick className="text-blue-500 text-xl" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">1</div>
                  <div className="flex items-center b ">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      <svg className="-ml-0.5 mr-1 h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                      100%
                    </span>
                    <span className="ml-2 text-xs board-b bo text-gray-500">vs last period</span>
                  </div>
                </div>

                {/* Signups Card */}
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-800 font-medium">Signups</span>
                    <div className="p-2 rounded-lg bg-purple-200">
                      <MdOutlinePersonAddAlt className="text-purple-500 text-xl" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">0</div>
                  <div className="flex items-center">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      <svg className="-ml-0.5 mr-1 h-4 w-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      0%
                    </span>
                    <span className="ml-2 text-xs text-gray-500">vs last period</span>
                  </div>
                </div>

                {/* PaidSignups Card */}
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-800 font-medium">PaidSignups</span>
                    <div className="p-2 rounded-lg bg-purple-200">
                      <MdOutlinePersonAddAlt className="text-purple-500 text-xl" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">0</div>
                  <div className="flex items-center">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      <svg className="-ml-0.5 mr-1 h-4 w-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      0%
                    </span>
                    <span className="ml-2 text-xs text-gray-500">vs last period</span>
                  </div>
                </div>

                {/* Conversion Rate Card */}
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-800 font-medium">Total ads spend</span>
                    <div className="p-2 rounded-lg bg-yellow-200">
                      <FaFilterCircleDollar className="text-yellow-500 text-xl" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">0%</div>
                  <div className="flex items-center">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      <svg className="-ml-0.5 mr-1 h-4 w-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      0%
                    </span>
                    <span className="ml-2 text-xs text-gray-500">vs last period</span>
                  </div>
                </div>

                {/* Revenue Card */}
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-800 font-medium">Revenue</span>
                    <div className="p-2 rounded-lg bg-red-200">
                      <TbCalculator className="text-red-500 text-xl" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">$0.00</div>
                  <div className="flex items-center">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      <svg className="-ml-0.5 mr-1 h-4 w-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      0%
                    </span>
                    <span className="ml-2 text-xs text-gray-500">vs last period</span>
                  </div>
                </div>

                {/* Pending Commissions Card */}
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-800 font-medium">Pending Commissions</span>
                    <div className="p-2 rounded-lg bg-indigo-200">
                      <LiaFileInvoiceDollarSolid className="text-indigo-500 text-xl" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">$0.00</div>
                  <div className="flex items-center">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      <svg className="-ml-0.5 mr-1 h-4 w-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      0%
                    </span>
                    <span className="ml-2 text-xs text-gray-500">vs last period</span>
                  </div>
                </div>
                {/* PaidCommissions Card */}
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-800 font-medium">Pending Commissions</span>
                    <div className="p-2 rounded-lg bg-indigo-200">
                      <LiaFileInvoiceDollarSolid className="text-indigo-500 text-xl" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">$0.00</div>
                  <div className="flex items-center">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      <svg className="-ml-0.5 mr-1 h-4 w-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      0%
                    </span>
                    <span className="ml-2 text-xs text-gray-500">vs last period</span>
                  </div>
                </div>


                {/* Earnings Per Click Card */}
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-800 font-medium">Total add campaign </span>
                    <div className="p-2 rounded-lg bg-blue-200">
                      <PiMoneyDuotone className="text-blue-600 text-xl" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">$0.00</div>
                  <div className="flex items-center">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      <svg className="-ml-0.5 mr-1 h-4 w-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      0%
                    </span>
                    <span className="ml-2 text-xs text-gray-500">vs last period</span>
                  </div>

                </div>

              </div>
              <div className="mb-6 mt-6">
                <GraphSection />
              </div>
            </div>
          </div>

          {/* Offers Section */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            {/* Header with improved gradient and subtle animation */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16 px-8 text-center rounded-t-3xl relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
              <div className="relative z-10">
                <h2 className="text-5xl font-extrabold text-white mb-4 tracking-tight">Exclusive Developer Offers</h2>
                <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
                  Limited-time deals crafted specifically for developers like you
                </p>
              </div>
            </div>

            {/* Cards Grid with improved spacing and container */}
            <div className="bg-white rounded-b-3xl  overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8 p-10">
                {/* Left Column */}
                <div className="space-y-8">
                  {/* Code Components Card - Enhanced */}
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 transform transition-all hover:shadow-xl hover:-translate-y-1.5">
                    <div className="p-8">
                      <div className="flex justify-between items-start mb-6">
                        <div className="flex items-center">
                          <div className="bg-blue-50 p-3 rounded-xl mr-5 shadow-inner">
                            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900">Code Components</h3>
                            <p className="text-blue-600 text-sm font-medium mt-1">React/Vue/Angular</p>
                          </div>
                        </div>
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">Most Popular</span>
                      </div>

                      <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                        Production-ready components with full documentation and TypeScript support.
                      </p>

                      <ul className="space-y-3 mb-8">
                        <li className="flex items-start">
                          <svg className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">100+ customizable components</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">TypeScript support included</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">Regular updates and new additions</span>
                        </li>
                      </ul>

                      <div className="bg-blue-50 p-5 rounded-xl mb-8 border border-blue-100 relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
                        <div className="relative z-10 flex items-center justify-between">
                          <div>
                            <span className="text-sm text-gray-500">Special offer</span>
                            <div className="flex items-baseline">
                              <span className="text-3xl font-bold text-blue-600">40% OFF</span>
                            </div>
                          </div>
                          <span className="bg-blue-600 text-white text-sm font-medium px-4 py-1.5 rounded-full shadow">LIMITED TIME</span>
                        </div>
                      </div>

                      <button className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all flex items-center justify-center shadow-lg hover:shadow-xl active:scale-[0.98]">
                        Get This Deal
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Design Systems Card - Enhanced */}
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 transform transition-all hover:shadow-xl hover:-translate-y-1.5">
                    <div className="p-8">
                      <div className="flex justify-between items-start mb-6">
                        <div className="flex items-center">
                          <div className="bg-indigo-50 p-3 rounded-xl mr-5 shadow-inner">
                            <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900">Design Systems</h3>
                            <p className="text-indigo-600 text-sm font-medium mt-1">Figma/Sketch</p>
                          </div>
                        </div>
                        <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">New</span>
                      </div>

                      <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                        Complete design systems for consistent UI development.
                      </p>

                      <ul className="space-y-3 mb-8">
                        <li className="flex items-start">
                          <svg className="h-6 w-6 text-indigo-500 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">Dark/light mode support</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-6 w-6 text-indigo-500 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">Auto-layout components</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-6 w-6 text-indigo-500 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">Design tokens included</span>
                        </li>
                      </ul>

                      <div className="bg-indigo-50 p-5 rounded-xl mb-8 border border-indigo-100 relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
                        <div className="relative z-10 flex items-center justify-between">
                          <div>
                            <span className="text-sm text-gray-500">Special offer</span>
                            <div className="flex items-baseline">
                              <span className="text-3xl font-bold text-indigo-600">33% OFF</span>
                            </div>
                          </div>
                          <span className="bg-indigo-600 text-white text-sm font-medium px-4 py-1.5 rounded-full shadow">LIMITED TIME</span>
                        </div>
                      </div>

                      <button className="w-full bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-700 hover:to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all flex items-center justify-center shadow-lg hover:shadow-xl active:scale-[0.98]">
                        Get This Deal
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-8">
                  {/* Premium Domains Card - Enhanced */}
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 transform transition-all hover:shadow-xl hover:-translate-y-1.5">
                    <div className="p-8">
                      <div className="flex justify-between items-start mb-6">
                        <div className="flex items-center">
                          <div className="bg-amber-50 p-3 rounded-xl mr-5 shadow-inner">
                            <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900">Premium Domains</h3>
                            <p className="text-amber-600 text-sm font-medium mt-1">.com & .dev</p>
                          </div>
                        </div>
                        <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">Exclusive</span>
                      </div>

                      <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                        Hand-selected developer domains for your next project.
                      </p>

                      <ul className="space-y-3 mb-8">
                        <li className="flex items-start">
                          <svg className="h-6 w-6 text-amber-500 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">Short .com and .dev domains</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-6 w-6 text-amber-500 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">Tech-related keywords</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-6 w-6 text-amber-500 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">Complete hosting packages</span>
                        </li>
                      </ul>

                      <div className="bg-amber-50 p-5 rounded-xl mb-8 border border-amber-100 relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
                        <div className="relative z-10 flex items-center justify-between">
                          <div>
                            <span className="text-sm text-gray-500">Special offer</span>
                            <div className="flex items-baseline">
                              <span className="text-3xl font-bold text-amber-600">30% OFF</span>
                            </div>
                          </div>
                          <span className="bg-amber-600 text-white text-sm font-medium px-4 py-1.5 rounded-full shadow">LIMITED TIME</span>
                        </div>
                      </div>

                      <button className="w-full bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all flex items-center justify-center shadow-lg hover:shadow-xl active:scale-[0.98]">
                        Find Your Domain
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Advertising Network Card - Enhanced */}
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 transform transition-all hover:shadow-xl hover:-translate-y-1.5">
                    <div className="p-8">
                      <div className="flex justify-between items-start mb-6">
                        <div className="flex items-center">
                          <div className="bg-green-50 p-3 rounded-xl mr-5 shadow-inner">
                            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900">Special Offer Coming Soon!</h3>
                            <p className="text-green-600 text-sm font-medium mt-1">Exclusive Opportunity</p>
                          </div>
                        </div>
                        <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">Limited</span>
                      </div>

                      <div className="bg-green-50 p-5 rounded-xl mb-8 border border-green-100 relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
                        <div className="relative z-10 flex items-center justify-between">
                          <div>
                            <span className="text-sm text-gray-500">Launching soon</span>
                            <div className="flex items-baseline">
                              <span className="text-3xl font-bold text-green-600">+20% earnings bonus</span>
                            </div>
                          </div>
                          <span className="bg-green-600 text-white text-sm font-medium px-4 py-1.5 rounded-full shadow">BONUS</span>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                        We're preparing an exciting new advertising network with premium rates for technical content.
                      </p>

                      <button className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all flex items-center justify-center shadow-lg hover:shadow-xl active:scale-[0.98]">
                        Notify Me When Available
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>

          {/* Referral Link */}
          <div className="bg-white rounded-xl p-6 mb-6 shadow-sm hover:shadow-md mr-6 mt-6 transition-all">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold text-lg">Your Referral Network</h3>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Share your unique referral link and earn commissions for every new merchant that joins through you.
            </p>

            {/* Referral Link Input */}
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <input
                className="flex-1 border rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-300"
                value="https://affiliate.com/ref/johndoe123"
                readOnly
              />
              <button
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-lg text-sm font-medium transition-colors"
                onClick={() => {
                  navigator.clipboard.writeText("https://affiliate.com/ref/johndoe123");
                  // Add toast/notification here
                }}
              >
                Copy Link
              </button>
            </div>

            {/* Social Sharing Options */}
            <div className="flex items-center gap-3">
              <p className="text-sm text-gray-600">Share via:</p>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/?text=Join%20me%20on%20this%20awesome%20platform!%20Use%20my%20referral%20link:%20https://affiliate.com/ref/johndoe123`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-green-100 text-green-600 hover:bg-green-200 transition-colors"
                title="Share on WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=https://affiliate.com/ref/johndoe123`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors"
                title="Share on LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              {/* Telegram */}
              <a
                href={`https://t.me/share/url?url=https://affiliate.com/ref/johndoe123&text=Join%20me%20on%20this%20awesome%20platform!`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-blue-100 text-blue-400 hover:bg-blue-200 transition-colors"
                title="Share on Telegram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Activity Section */}
          <ActivityPage user={{ name: "Customer" }} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;