import React, { useState } from 'react';
import {
  MdAccountBalanceWallet,
  MdOutlineSwapVert,
  MdHistory,
  MdMoreVert,
  MdAdd,
  MdQrCode,
  MdClose,
  MdOutlineAccountBalance,
  MdCreditCard,
  MdAccountCircle,
  MdSettings,
  MdLogout,
  MdSearch
} from 'react-icons/md';
import { FiDollarSign, FiArrowUp, FiArrowDown, FiCreditCard, FiClock,FiPlus } from 'react-icons/fi';

import { FiArrowUpRight, FiArrowDownLeft, FiMenu } from 'react-icons/fi';
import { RiExchangeLine, RiNotificationLine, RiArrowDownSLine } from 'react-icons/ri';
import { PiMoneyDuotone } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import { DiVim } from 'react-icons/di';
import { FaWallet, FaMoneyCheckAlt, FaPlusCircle, FaArrowDown } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import Sidebar from '../components/Sidebar';

const DashboardNavbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <div className="fixed top-0 left-55 right-0 h-16 bg-white z-10 flex items-center justify-between px-6">
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
            <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center">
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
                ViewProfile
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



const WalletPage = () => {
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [addAmount, setAddAmount] = useState("");

  const handleWithdraw = (e) => {
    e.preventDefault();
    alert(`Withdrawing ₹${withdrawAmount}`);
  };

  const handleAddMoney = (e) => {
    e.preventDefault();
    alert(`Adding ₹${addAmount}`);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Total Balance */}
        <div className="bg-gradient-to-br from-blue-100 to-blue-300 p-5 rounded-xl shadow hover:shadow-md">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-800 font-medium">Total Balance</span>
            <FaWallet className="text-blue-600 text-xl" />
          </div>
          <div className="text-2xl font-bold text-gray-900">₹12,500</div>
        </div>

        {/* Total Earnings */}
        <div className="bg-gradient-to-br from-green-100 to-green-300 p-5 rounded-xl shadow hover:shadow-md">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-800 font-medium">Total Earnings</span>
            <MdAttachMoney className="text-green-600 text-xl" />
          </div>
          <div className="text-2xl font-bold text-gray-900">₹20,000</div>
        </div>

        {/* Withdrawals */}
        <div className="bg-gradient-to-br from-yellow-100 to-yellow-300 p-5 rounded-xl shadow hover:shadow-md">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-800 font-medium">Withdrawals</span>
            <FaArrowDown className="text-yellow-600 text-xl" />
          </div>
          <div className="text-2xl font-bold text-gray-900">₹7,500</div>
        </div>

        {/* Add Money */}
        <div className="bg-gradient-to-br from-purple-100 to-purple-300 p-5 rounded-xl shadow hover:shadow-md">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-800 font-medium">Add Money</span>
            <FaPlusCircle className="text-purple-600 text-xl" />
          </div>
          <div className="text-2xl font-bold text-gray-900">₹1,000</div>
        </div>
      </div>

      {/* Forms Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
        {/* Withdraw Form */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4 text-gray-800">Withdraw Funds</h2>
          <form onSubmit={handleWithdraw} className="space-y-4">
            <input
              type="number"
              placeholder="Enter amount"
              value={withdrawAmount}
              onChange={(e) => setWithdrawAmount(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2"
            />
            <select className="w-full border border-gray-300 rounded-lg p-2">
              <option>Bank Transfer</option>
              <option>UPI</option>
              <option>PayPal</option>
            </select>
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white rounded-lg py-2 font-semibold hover:bg-yellow-600"
            >
              Withdraw
            </button>
          </form>
        </div>

        {/* Add Money Form */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4 text-gray-800">Add Money</h2>
          <form onSubmit={handleAddMoney} className="space-y-4">
            <input
              type="number"
              placeholder="Enter amount"
              value={addAmount}
              onChange={(e) => setAddAmount(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2"
            />
            <select className="w-full border border-gray-300 rounded-lg p-2">
              <option>Credit/Debit Card</option>
              <option>UPI</option>
              <option>Net Banking</option>
            </select>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white rounded-lg py-2 font-semibold hover:bg-purple-700"
            >
              Add Money
            </button>
          </form>
        </div>
      </div>

      {/* Transaction History */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">Transaction History</h2>
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-gray-700">Date</th>
              <th className="px-4 py-2 text-left text-gray-700">Type</th>
              <th className="px-4 py-2 text-left text-gray-700">Amount</th>
              <th className="px-4 py-2 text-left text-gray-700">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-4 py-2">2025-07-18</td>
              <td className="px-4 py-2">Add Money</td>
              <td className="px-4 py-2 text-green-600">+₹1,000</td>
              <td className="px-4 py-2">Success</td>
            </tr>
            <tr>
              <td className="px-4 py-2">2025-07-17</td>
              <td className="px-4 py-2">Withdraw</td>
              <td className="px-4 py-2 text-red-600">-₹2,500</td>
              <td className="px-4 py-2">Pending</td>
            </tr>
            <tr>
              <td className="px-4 py-2">2025-07-15</td>
              <td className="px-4 py-2">Earnings</td>
              <td className="px-4 py-2 text-green-600">+₹5,000</td>
              <td className="px-4 py-2">Completed</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WalletPage;





