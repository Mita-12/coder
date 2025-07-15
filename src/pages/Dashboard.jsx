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

                {/* Paid Signups Card */}
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-800 font-medium">Paid Signups</span>
                    <div className="p-2 rounded-lg bg-green-200">
                      <MdOutlineAddShoppingCart className="text-green-500 text-xl" />
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
                    <span className="text-gray-800 font-medium">Total add spend</span>
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

                {/* Paid Commissions Card */}
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-800 font-medium">Paid Commissions</span>
                    <div className="p-2 rounded-lg bg-green-200">
                      <PiMoneyDuotone className="text-green-600 text-xl" />
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
          <div className="w-[70-rem] flex justify-center items-center p-4">
            <div className="bg-white rounded-3xl overflow-hidden">
              {/* Header with gradient background */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-12 px-8 text-center">
                <h2 className="text-4xl font-bold text-white mb-3">Exclusive Developer Offers</h2>
                <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                  Limited-time deals crafted specifically for developers like you
                </p>
              </div>

              {/* Cards Grid */}
              <div className="grid md:grid-cols-2 gap-8 p-8">
                {/* Left Column */}
                <div className="space-y-8">
                  {/* Code Components Card */}
                  <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 transform transition-all hover:shadow-lg hover:-translate-y-1">
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-5">
                        <div className="flex items-center">
                          <div className="bg-blue-50 p-3 rounded-xl mr-4">
                            <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900">Code Components</h3>
                            <p className="text-blue-600 text-sm font-medium">React/Vue/Angular</p>
                          </div>
                        </div>
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">Most Popular</span>
                      </div>

                      <p className="text-gray-600 mb-6 text-lg">Production-ready components with full documentation and TypeScript support.</p>

                      <ul className="space-y-3 mb-6">
                        <li className="flex items-start">
                          <svg className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">100+ customizable components</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">TypeScript support included</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">Regular updates and new additions</span>
                        </li>
                      </ul>

                      <div className="bg-blue-50 p-4 rounded-xl mb-6 border border-blue-100">
                        <div className="flex items-center justify-between">
                          {/* <div>
                            <span className="text-sm text-gray-500 line-through">$299/year</span>
                            <span className="ml-2 text-2xl font-bold text-blue-600">$199/year</span>
                          </div> */}
                          <span className="bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded-full">40% OFF</span>
                        </div>
                      </div>

                      <button className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-6 py-4 rounded-xl font-semibold text-lg transition-all flex items-center justify-center shadow-md hover:shadow-lg">
                        Get This Deal
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Design Systems Card */}
                  <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 transform transition-all hover:shadow-lg hover:-translate-y-1">
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-5">
                        <div className="flex items-center">
                          <div className="bg-indigo-50 p-3 rounded-xl mr-4">
                            <svg className="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900">Design Systems</h3>
                            <p className="text-indigo-600 text-sm font-medium">Figma/Sketch</p>
                          </div>
                        </div>
                        <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-3 py-1 rounded-full">New</span>
                      </div>

                      <p className="text-gray-600 mb-6 text-lg">Complete design systems for consistent UI development.</p>

                      <ul className="space-y-3 mb-6">
                        <li className="flex items-start">
                          <svg className="h-6 w-6 text-indigo-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">Dark/light mode support</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-6 w-6 text-indigo-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">Auto-layout components</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-6 w-6 text-indigo-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">Design tokens included</span>
                        </li>
                      </ul>

                      <div className="bg-indigo-50 p-4 rounded-xl mb-6 border border-indigo-100">
                        <div className="flex items-center justify-between">
                          {/* <div>
                            <span className="text-sm text-gray-500 line-through">$149</span>
                            <span className="ml-2 text-2xl font-bold text-indigo-600">$99</span>
                            <span className="ml-2 text-sm text-gray-500">one-time</span>
                          </div> */}
                          <span className="bg-indigo-600 text-white text-sm font-medium px-3 py-1 rounded-full">33% OFF</span>
                        </div>
                      </div>

                      <button className="w-full bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-700 hover:to-indigo-600 text-white px-6 py-4 rounded-xl font-semibold text-lg transition-all flex items-center justify-center shadow-md hover:shadow-lg">
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


                  {/* Premium Domains Card */}
                  <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 transform transition-all hover:shadow-lg hover:-translate-y-1">
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-5">
                        <div className="flex items-center">
                          <div className="bg-amber-50 p-3 rounded-xl mr-4">
                            <svg className="w-7 h-7 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900">Premium Domains</h3>
                            <p className="text-amber-600 text-sm font-medium">.com & .dev</p>
                          </div>
                        </div>
                        <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full">Exclusive</span>
                      </div>

                      <p className="text-gray-600 mb-6 text-lg">Hand-selected developer domains for your next project.</p>

                      <ul className="space-y-3 mb-6">
                        <li className="flex items-start">
                          <svg className="h-6 w-6 text-amber-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">Short .com and .dev domains</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-6 w-6 text-amber-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">Tech-related keywords</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-6 w-6 text-amber-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">Complete hosting packages</span>
                        </li>
                      </ul>

                      <div className="bg-amber-50 p-4 rounded-xl mb-6 border border-amber-100">
                        <div className="flex items-center justify-between">
                          {/* <div>
                            <span className="text-sm text-gray-500 line-through">$99/year</span>
                            <span className="ml-2 text-2xl font-bold text-amber-600">$69/year</span>
                            <span className="ml-2 text-sm text-gray-500">for first year</span>
                          </div> */}
                          <span className="bg-amber-600 text-white text-sm font-medium px-3 py-1 rounded-full">30% OFF</span>
                        </div>
                      </div>

                      <button className="w-full bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white px-6 py-4 rounded-xl font-semibold text-lg transition-all flex items-center justify-center shadow-md hover:shadow-lg">
                        Find Your Domain
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Advertising Network Card */}
                  <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 transform transition-all hover:shadow-lg hover:-translate-y-1">
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-5">
                        <div className="flex items-center">
                          <div className="bg-green-50 p-3 rounded-xl mr-4">
                            <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900">Advertising Network</h3>
                            <p className="text-green-600 text-sm font-medium">High RPM</p>
                          </div>
                        </div>
                        <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">Limited</span>
                      </div>

                      <p className="text-gray-600 mb-6 text-lg">Premium ads that pay more and match your technical content.</p>

                      <ul className="space-y-3 mb-6">
                        <li className="flex items-start">
                          <svg className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">$8-12 average RPM</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">Developer-focused advertisers</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">Weekly payments via PayPal</span>
                        </li>
                      </ul>

                      <div className="bg-green-50 p-4 rounded-xl mb-6 border border-green-100">
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-sm text-gray-500">First month</span>
                            <span className="ml-2 text-2xl font-bold text-green-600">+20% earnings</span>
                          </div>
                          <span className="bg-green-600 text-white text-sm font-medium px-3 py-1 rounded-full">BONUS</span>
                        </div>
                      </div>

                      <button className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-6 py-4 rounded-xl font-semibold text-lg transition-all flex items-center justify-center shadow-md hover:shadow-lg">
                        Join Now
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer with countdown */}
              {/* <div className="bg-gray-50 border-t border-gray-200 py-6 px-8 text-center">
      <div className="inline-flex items-center bg-white shadow-sm px-6 py-3 rounded-full border border-gray-200">
        <svg className="w-6 h-6 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="font-medium text-gray-800">Offer ends in: <span className="text-red-600">2 days 14 hours 23 minutes</span></span>
      </div>
    </div> */}
            </div>
          </div>

          {/* Referral Link */}
          <div className="bg-white rounded-xl p-6 mb-6 shadow-sm hover:shadow-md mr-6 mt-6 transition-all pr-6">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold text-lg">Your Referral Network</h3>

            </div>
            <p className="text-sm text-gray-600 mb-4">
              Share your unique referral link and earn commissions for every new merchant that joins through you.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                className="flex-1 border rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-300"
                value="https://affiliate.com/ref/johndoe123"
                readOnly
              />
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-lg text-sm font-medium transition-colors">
                Copy Link
              </button>
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