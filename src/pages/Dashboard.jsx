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

const Dashboard = () => {
  return (
    <div className="flex w-full bg-slate-100">
      <Sidebar />

      <div className="ml-64 min-h-screen  text-sm text-gray-800 w-full">
        {/* Dashboard Navbar */}
        <DashboardNavbar />

        <div className="mt-16">

          <div className="py-8 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
              {/* Graph Section */}


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
          <div className="p-6 bg-white mr-6 rounded-xl h-1/2">
            <div className="relative text-center mb-8">
              {/* Decorative elements */}
              <div className="absolute -top-3 -left-4 w-8 h-8 bg-yellow-100 rounded-full blur-sm opacity-70"></div>
              <div className="absolute -bottom-2 -right-4 w-8 h-8 bg-blue-100 rounded-full blur-sm opacity-70"></div>

              {/* Main heading */}
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 relative inline-block">
                <span className="absolute -left-8 -top-2 text-3xl">🎉</span>
                Current Offers
                <span className="absolute -right-8 -bottom-2 text-3xl">🎉</span>
              </h2>

              {/* Subheading */}
              <p className="mt-2 text-gray-600 max-w-md mx-auto">
                Limited-time promotions and exclusive deals
              </p>

              {/* Decorative divider */}
              <div className="mt-4 flex justify-center">
                <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 ">

              {/* Offer Card 1 - Earned */}
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 p-0 relative overflow-hidden group">

                {/* Badge - Limited Offer */}
                <div className="absolute top-3 right-3 z-10">
                  <span className="inline-flex items-center text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 px-3 py-1 rounded-full shadow-xs">
                    <svg className="w-3.5 h-3.5 mr-1.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    Limited Offer
                  </span>
                </div>

                {/* Template Image */}
                <div className="h-40 overflow-hidden bg-gray-100 relative">
                  <img
                    src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                    alt="UI/UX Template"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>

                {/* Card Content */}
                <div className="p-5">
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="bg-indigo-100 text-indigo-600 p-3 rounded-lg flex-shrink-0 mt-1">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>

                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900">Premium UI/UX Kit</h4>
                      <p className="text-sm text-gray-600 mt-1">50+ customizable components for modern web apps</p>

                      {/* Features List */}
                      <ul className="mt-3 space-y-1.5 text-sm text-gray-600">
                        <li className="flex items-center">
                          <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Fully responsive layouts
                        </li>
                        <li className="flex items-center">
                          <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Dark & light mode
                        </li>
                        <li className="flex items-center">
                          <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          Figma files included
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Price and CTA */}
                  <div className="mt-5 flex items-center justify-between">
                    <div>
                      <span className="text-sm text-gray-500 line-through mr-2">$149</span>
                      <span className="text-xl font-bold text-indigo-600">$99</span>
                      <span className="text-xs text-gray-500 ml-1">(one-time)</span>
                    </div>
                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 shadow-sm">
                      Get Template
                    </button>
                  </div>

                  {/* Bonus Offer */}
                  <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-100 flex items-start">
                    <svg className="w-4 h-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs text-blue-800">Special bonus: Free icon pack ($29 value) included with purchase!</span>
                  </div>
                </div>
              </div>


              {/* Offer Card 2 - Earned */}
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group">

                {/* Premium Ribbon */}
                {/* <div className="absolute top-0 right-4 z-10">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-b-lg shadow-sm">
                    EXCLUSIVE
                  </div>
                </div> */}

                {/* Subscription Image */}
                <div className="h-32 bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1604594849809-dfedbc827105?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                    alt="Premium Subscription"
                    className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-80"
                  />
                  <div className="relative z-10 text-center px-4">
                    <span className="inline-block text-white bg-green-600/90 px-3 py-1 rounded-full text-xs font-medium mb-2">
                      LIMITED TIME OFFER
                    </span>
                    <h3 className="text-2xl font-bold text-white">30% OFF</h3>
                    <p className="text-white/90 text-sm mt-1">Pro Plan Subscription</p>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5">
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="bg-green-100 text-green-600 p-3 rounded-lg flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                    </div>

                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900">Premium Pro Plan</h4>
                      <p className="text-sm text-gray-600 mt-1">Unlock all features with our best value plan</p>

                      {/* Benefits List */}
                      <ul className="mt-3 space-y-2">
                        <li className="flex items-start">
                          <svg className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm text-gray-700">All premium templates and components</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm text-gray-700">Priority customer support</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm text-gray-700">Exclusive member-only content</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Price Comparison */}
                  <div className="mt-5 bg-gray-50 p-3 rounded-lg border border-gray-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-gray-500">Regular Price</p>
                        <p className="text-gray-400 line-through">$299/year</p>
                      </div>
                      <svg className="w-5 h-5 text-gray-400 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                      <div className="text-right">
                        <p className="text-xs text-green-600 font-medium">Discount Price</p>
                        <p className="text-green-600 font-bold">$209/year</p>
                      </div>
                    </div>
                    <div className="mt-2 text-center">
                      <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                        You save $90 (30%)
                      </span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="mt-4 w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-medium py-2.5 px-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-200">
                    Claim Your Discount Now
                  </button>

                  {/* Expiration Notice */}
                  <div className="mt-3 text-center">
                    <p className="text-xs text-gray-500">Offer ends in <span className="font-medium text-gray-700">2 days 14 hours</span></p>
                  </div>
                </div>
              </div>

              {/*3rd offer*/}

              <div className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group relative">

                {/* Time-sensitive Badge */}
                <div className="absolute top-3 right-3 z-10">
                  <span className="inline-flex items-center text-xs font-medium text-white bg-gradient-to-r from-pink-500 to-rose-500 px-3 py-1 rounded-full shadow-sm">
                    <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Limited Time
                  </span>
                </div>

                {/* Ad Promotion Image */}
                <div className="h-32 bg-gradient-to-r from-pink-100 to-rose-100 flex items-center justify-center relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                    alt="Ad Promotion"
                    className="absolute inset-0 w-full h-full object-cover opacity-40"
                  />
                  <div className="relative z-10 text-center px-4">
                    <div className="inline-flex items-center bg-white/90 text-pink-600 px-4 py-2 rounded-full shadow-xs mb-2">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      <span className="text-sm font-semibold">Premium Visibility</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Homepage Feature + Domain Offer</h3>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5">
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="bg-pink-100 text-pink-600 p-3 rounded-lg flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>

                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900">Premium Ad Placement + Free Domain</h4>
                      <p className="text-sm text-gray-600 mt-1">Get 10x more visibility plus a free domain for 1 year</p>

                      {/* Benefits List */}
                      <ul className="mt-3 space-y-2">
                        <li className="flex items-start">
                          <svg className="w-4 h-4 text-pink-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm text-gray-700">Featured in our homepage carousel</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-4 h-4 text-pink-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm text-gray-700">Free domain registration (.com) for 1 year</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-4 h-4 text-pink-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm text-gray-700">Priority placement above organic content</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-4 h-4 text-pink-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm text-gray-700">Detailed analytics dashboard</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-4 h-4 text-pink-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm text-gray-700">Free SSL certificate with domain</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Domain Offer Banner */}
                  <div className="mt-4 bg-blue-50 border border-blue-100 rounded-lg p-3 flex items-start">
                    <div className="bg-blue-100 text-blue-600 p-2 rounded-lg mr-3">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-bold text-blue-800">Special Domain Offer Included</h5>
                      <p className="text-sm text-blue-600">Get a free .com domain (normally $12.99/year) when you purchase this promotion</p>
                    </div>
                  </div>

                  {/* Stats and CTA */}
                  <div className="mt-5">
                    <div className="grid grid-cols-3 gap-2 text-center mb-4">
                      <div className="bg-pink-50 p-2 rounded-lg">
                        <p className="text-xs text-gray-500">Avg. Views</p>
                        <p className="font-bold text-pink-600">25K+</p>
                      </div>
                      <div className="bg-pink-50 p-2 rounded-lg">
                        <p className="text-xs text-gray-500">Click Rate</p>
                        <p className="font-bold text-pink-600">8.2%</p>
                      </div>
                      <div className="bg-pink-50 p-2 rounded-lg">
                        <p className="text-xs text-gray-500">Duration</p>
                        <p className="font-bold text-pink-600">7 Days</p>
                      </div>
                    </div>

                    <button className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-medium py-2.5 px-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      Get Premium Placement + Free Domain
                    </button>
                  </div>

                  {/* Disclaimer */}
                  <div className="mt-3 text-center">
                    <p className="text-xs text-gray-400">Spots limited. Domain offer requires 1-year commitment.</p>
                  </div>
                </div>
              </div>

              {/* Offer Card 3 - Not Earned */}
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group relative">

                {/* Time-sensitive Badge */}
                <div className="absolute top-3 right-3 z-10">
                  <span className="inline-flex items-center text-xs font-medium text-white bg-gradient-to-r from-pink-500 to-rose-500 px-3 py-1 rounded-full shadow-sm">
                    <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Limited Time
                  </span>
                </div>

                {/* Ad Promotion Image */}
                <div className="h-32 bg-gradient-to-r from-pink-100 to-rose-100 flex items-center justify-center relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                    alt="Ad Promotion"
                    className="absolute inset-0 w-full h-full object-cover opacity-40"
                  />
                  <div className="relative z-10 text-center px-4">
                    <div className="inline-flex items-center bg-white/90 text-pink-600 px-4 py-2 rounded-full shadow-xs mb-2">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      <span className="text-sm font-semibold">Premium Visibility</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Homepage Feature</h3>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5">
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="bg-pink-100 text-pink-600 p-3 rounded-lg flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>

                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900">Premium Ad Placement</h4>
                      <p className="text-sm text-gray-600 mt-1">Get 10x more visibility for your product</p>

                      {/* Benefits List */}
                      <ul className="mt-3 space-y-2">
                        <li className="flex items-start">
                          <svg className="w-4 h-4 text-pink-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm text-gray-700">Featured in our homepage carousel</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-4 h-4 text-pink-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm text-gray-700">Priority placement above organic content</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-4 h-4 text-pink-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm text-gray-700">Detailed analytics dashboard</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Stats and CTA */}
                  <div className="mt-5">
                    <div className="grid grid-cols-3 gap-2 text-center mb-4">
                      <div className="bg-pink-50 p-2 rounded-lg">
                        <p className="text-xs text-gray-500">Avg. Views</p>
                        <p className="font-bold text-pink-600">25K+</p>
                      </div>
                      <div className="bg-pink-50 p-2 rounded-lg">
                        <p className="text-xs text-gray-500">Click Rate</p>
                        <p className="font-bold text-pink-600">8.2%</p>
                      </div>
                      <div className="bg-pink-50 p-2 rounded-lg">
                        <p className="text-xs text-gray-500">Duration</p>
                        <p className="font-bold text-pink-600">7 Days</p>
                      </div>
                    </div>

                    <button className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-medium py-2.5 px-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      Promote My Product Now
                    </button>
                  </div>

                  {/* Disclaimer */}
                  <div className="mt-3 text-center">
                    <p className="text-xs text-gray-400">Spots limited. Approval required.</p>
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