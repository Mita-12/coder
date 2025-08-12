import React, { useState } from 'react';
import {
  FaWallet,
  FaMoneyBillWave,
  FaArrowDown,
  FaPlusCircle,
  FaClock,
  FaCheckCircle,
  FaTimesCircle,
  FaSearch,
  FaInfoCircle
} from 'react-icons/fa';
import { MdSearch, MdSettings, MdLogout, MdAccountCircle } from "react-icons/md";
import { FiCreditCard, FiArrowUpRight, FiArrowDownLeft } from 'react-icons/fi';
import { RiExchangeLine, RiArrowDownSLine } from 'react-icons/ri';
import { FaFilterCircleDollar } from "react-icons/fa6";
import { TbCalculator } from "react-icons/tb";
import { PiMoneyDuotone } from "react-icons/pi";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import Sidebar from '../../components/Sidebar';

// Reusable components
const DashboardNavbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <div className="fixed top-0 left-50 right-0 h-16 bg-white z-10 flex border-b border-gray-200 items-center justify-between px-6 shadow-sm">
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-lg hover:bg-gray-50 lg:hidden">
          <FiMenu className="text-gray-600 text-xl" />
        </button>
      </div>

      <div className="flex items-center space-x-5">
        <div className="relative hidden lg:block w-72">
          <MdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
          <input
            type="text"
            placeholder="Search campaigns, reports..."
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:bg-white focus:border-indigo-300 text-sm transition-all duration-200"
          />
        </div>

        <div className="relative">
          <button
            className="flex items-center space-x-2 group"
            onClick={() => setIsProfileOpen(!isProfileOpen)}
          >
            <div className="w-9 h-9 rounded-full bg-indigo-600 flex items-center justify-center">
              <span className="text-white font-medium text-sm">NH</span>
            </div>
            <div className="hidden md:flex flex-col items-start">
              <span className="text-sm font-medium text-gray-700">Neha</span>
              <span className="text-xs text-gray-500">Admin</span>
            </div>
            <RiArrowDownSLine className={`text-gray-500 text-lg transition-transform duration-200 ${isProfileOpen ? 'transform rotate-180' : ''}`} />
          </button>

          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-1 border border-gray-100 z-50">
              <Link to="/" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50">
                <MdAccountCircle className="mr-3 text-gray-500 text-lg" />
                View Profile
              </Link>
              <Link to="/profile" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50">
                <MdSettings className="mr-3 text-gray-500 text-lg" />
                Update Profile
              </Link>
              <div className="border-t border-gray-100"></div>
              <Link to="/home" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50">
                <MdLogout className="mr-3 text-gray-500 text-lg" />
                Log Out
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const StatusBadge = ({ status }) => {
  const statusConfig = {
    completed: {
      icon: <FaCheckCircle className="mr-1" />,
      bg: 'bg-green-100',
      text: 'text-green-800',
      label: 'Completed'
    },
    pending: {
      icon: <FaClock className="mr-1" />,
      bg: 'bg-yellow-100',
      text: 'text-yellow-800',
      label: 'Pending'
    },
    failed: {
      icon: <FaTimesCircle className="mr-1" />,
      bg: 'bg-red-100',
      text: 'text-red-800',
      label: 'Failed'
    },
    processing: {
      icon: <FaClock className="mr-1" />,
      bg: 'bg-blue-100',
      text: 'text-blue-800',
      label: 'Processing'
    }
  };

  const config = statusConfig[status] || {
    icon: null,
    bg: 'bg-gray-100',
    text: 'text-gray-800',
    label: status
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${config.bg} ${config.text}`}>
      {config.icon} {config.label}
    </span>
  );
};

const PaymentMethodCard = ({ method, icon, selected, onClick, badge }) => {
  return (
    <div
      className={`p-3 border rounded-lg cursor-pointer transition-all ${selected ? 'border-indigo-400 bg-indigo-50 shadow-sm' : 'border-gray-200 hover:border-indigo-300'}`}
      onClick={onClick}
    >
      <div className="flex flex-col items-center text-center">
        <div className={`p-2 rounded-full mb-2 ${selected ? 'bg-indigo-100 text-indigo-600' : 'bg-gray-100 text-gray-600'}`}>
          {icon}
        </div>
        <span className="text-sm font-medium text-gray-800">{method}</span>
        {badge && (
          <span className="mt-1 text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
            {badge}
          </span>
        )}
      </div>
    </div>
  );
};

const WalletPage = () => {
  // State for wallet data
  const [walletData, setWalletData] = useState({
    balance: 12500,
    earnings: 20000,
    withdrawals: 7500,
    pending: 2300,
    added: 1000
  });

  // State for forms
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [addAmount, setAddAmount] = useState('');
  const [selectedWithdrawMethod, setSelectedWithdrawMethod] = useState('Bank Transfer');
  const [selectedAddMethod, setSelectedAddMethod] = useState('Credit/Debit Card');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  // Mock transactions data
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      date: '2025-07-18',
      type: 'Add Money',
      amount: 1000,
      status: 'completed',
      method: 'UPI',
      reference: 'REF-789456'
    },
    {
      id: 2,
      date: '2025-07-17',
      type: 'Withdraw',
      amount: 2500,
      status: 'pending',
      method: 'Bank Transfer',
      reference: 'REF-123456'
    },
    {
      id: 3,
      date: '2025-07-15',
      type: 'Earnings',
      amount: 5000,
      status: 'completed',
      method: 'Referral',
      reference: 'REF-654321'
    },
    {
      id: 4,
      date: '2025-07-10',
      type: 'Add Money',
      amount: 3000,
      status: 'completed',
      method: 'Credit Card',
      reference: 'REF-987654'
    },
    {
      id: 5,
      date: '2025-07-05',
      type: 'Withdraw',
      amount: 1500,
      status: 'failed',
      method: 'UPI',
      reference: 'REF-321654'
    }
  ]);

  // Show success message
  const displaySuccess = (message) => {
    setSuccessMessage(message);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
  };

  // Handle withdraw
  const handleWithdraw = async (e) => {
    e.preventDefault();
    if (!withdrawAmount || isNaN(withdrawAmount)) {
      alert('Please enter a valid amount');
      return;
    }

    const amount = parseFloat(withdrawAmount);
    if (amount > walletData.balance) {
      alert('Insufficient balance');
      return;
    }

    if (amount < 100) {
      alert('Minimum withdrawal amount is ₹100');
      return;
    }

    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Add to transactions
    const newTransaction = {
      id: transactions.length + 1,
      date: new Date().toISOString().split('T')[0],
      type: 'Withdraw',
      amount: amount,
      status: 'pending',
      method: selectedWithdrawMethod,
      reference: `REF-${Math.floor(100000 + Math.random() * 900000)}`
    };

    setTransactions([newTransaction, ...transactions]);
    setWalletData({
      ...walletData,
      balance: walletData.balance - amount,
      pending: walletData.pending + amount
    });
    setWithdrawAmount('');
    setIsLoading(false);
    displaySuccess(`Withdrawal request of ₹${amount} submitted successfully!`);
  };

  // Handle add money
  const handleAddMoney = async (e) => {
    e.preventDefault();
    if (!addAmount || isNaN(addAmount)) {
      alert('Please enter a valid amount');
      return;
    }

    const amount = parseFloat(addAmount);
    if (amount < 100) {
      alert('Minimum amount to add is ₹100');
      return;
    }

    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Add to transactions
    const newTransaction = {
      id: transactions.length + 1,
      date: new Date().toISOString().split('T')[0],
      type: 'Add Money',
      amount: amount,
      status: 'completed',
      method: selectedAddMethod,
      reference: `REF-${Math.floor(100000 + Math.random() * 900000)}`
    };

    setTransactions([newTransaction, ...transactions]);
    setWalletData({
      ...walletData,
      balance: walletData.balance + amount,
      added: walletData.added + amount
    });
    setAddAmount('');
    setIsLoading(false);
    displaySuccess(`₹${amount} added to your wallet successfully!`);
  };

  // Filter transactions based on search and active tab
  const filteredTransactions = transactions.filter(transaction => {
    const matchesSearch =
      transaction.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.method.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.reference.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesTab =
      activeTab === 'all' ||
      (activeTab === 'deposits' && transaction.type !== 'Withdraw') ||
      (activeTab === 'withdrawals' && transaction.type === 'Withdraw');

    return matchesSearch && matchesTab;
  });

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0
    }).format(amount).replace('₹', '₹');
  };

  // Withdrawal methods
  const withdrawalMethods = [
    {
      method: 'Bank Transfer',
      icon: <FiCreditCard className="text-lg" />,
      badge: 'Fastest'
    },
    {
      method: 'UPI',
      icon: <RiExchangeLine className="text-lg" />
    },
    {
      method: 'PayPal',
      icon: <FaMoneyBillWave className="text-lg" />
    }
  ];

  // Add money methods
  const addMoneyMethods = [
    {
      method: 'Credit/Debit Card',
      icon: <FiCreditCard className="text-lg" />
    },
    {
      method: 'UPI',
      icon: <RiExchangeLine className="text-lg" />
    },
    {
      method: 'Net Banking',
      icon: <FaWallet className="text-lg" />
    }
  ];

  return (
    <div className="flex w-full bg-slate-100">
      <Sidebar />

      <div className="ml-55 min-h-screen text-sm text-gray-800 w-full">
        <DashboardNavbar />

        {/* Success Notification */}
        {showSuccess && (
          <div className="fixed top-20 right-6 z-50">
            <div className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center animate-fade-in-down">
              <FaCheckCircle className="mr-2" />
              <span>{successMessage}</span>
            </div>
          </div>
        )}

        <div className="min-h-screen bg-gray-50 p-6 mt-16">
          {/* Page Header */}
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-800">Wallet Dashboard</h1>
                <p className="text-gray-600 mt-2">Manage your funds, transactions, and payment methods</p>
              </div>

            </div>
          </div>

          {/* Wallet Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
            {/* Total Earnings */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-100 shadow-sm hover:shadow-md transition-all">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-green-800">Total Earnings</p>
                  <p className="text-2xl font-bold mt-1 text-gray-800">{formatCurrency(walletData.earnings)}</p>
                </div>
                <div className="p-3 rounded-lg bg-green-100/50 text-green-600">
                  <FaMoneyBillWave className="text-xl" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm text-green-700">
                <RiExchangeLine className="mr-1" />
                <span>From various sources</span>
              </div>
            </div>

            {/* Withdrawals */}
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-xl border border-amber-100 shadow-sm hover:shadow-md transition-all">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-amber-800">Total Withdrawals</p>
                  <p className="text-2xl font-bold mt-1 text-gray-800">{formatCurrency(walletData.withdrawals)}</p>
                </div>
                <div className="p-3 rounded-lg bg-amber-100/50 text-amber-600">
                  <FaArrowDown className="text-xl" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm text-amber-700">
                <FiArrowDownLeft className="mr-1" />
                <span>Withdrawn to bank</span>
              </div>
            </div>

            {/* Pending */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-100 shadow-sm hover:shadow-md transition-all">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-orange-800">Pending Balance</p>
                  <p className="text-2xl font-bold mt-1 text-gray-800">{formatCurrency(walletData.pending)}</p>
                </div>
                <div className="p-3 rounded-lg bg-orange-100/50 text-orange-600">
                  <FaClock className="text-xl" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm text-orange-700">
                <span>Processing withdrawals</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-100 shadow-sm hover:shadow-md transition-all">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-green-800">Total Added Money</p>
                  <p className="text-2xl font-bold mt-1 text-gray-800">{formatCurrency(walletData.added)}</p>
                </div>
                <div className="p-3 rounded-lg bg-green-100/50 text-green-600">
                  <FaPlusCircle className="text-xl" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm text-green-700">
                <FiArrowUpRight className="mr-1" />
                <span>All time deposits</span>
              </div>
            </div>

          </div>

          {/* Action Forms Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
            {/* Withdraw Form */}
            <div id="withdraw-form" className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                    <div className="p-2 bg-amber-100 rounded-lg text-amber-600">
                      <FaArrowDown className="text-lg" />
                    </div>
                    <span>Withdraw Funds</span>
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">Transfer money to your bank or UPI account</p>
                </div>
                <span className="text-sm font-medium text-gray-500">
                  Available: {formatCurrency(walletData.balance)}
                </span>
              </div>

              <form onSubmit={handleWithdraw} className="space-y-5">
                {/* Amount Input */}
                <div>


                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                    <input
                      id="withdraw-amount"
                      type="number"
                      placeholder="0.00"
                      value={withdrawAmount}
                      onChange={(e) => {
                        const value = Math.min(parseFloat(e.target.value) || 0, walletData.balance);
                        setWithdrawAmount(value || '');
                      }}
                      className="w-full pl-8 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      min="100"
                      max={walletData.balance}
                      step="100"
                      required
                    />
                  </div>

                </div>

                {/* Method Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Withdrawal Method
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {withdrawalMethods.map((option) => (
                      <PaymentMethodCard
                        key={option.method}
                        method={option.method}
                        icon={option.icon}
                        selected={selectedWithdrawMethod === option.method}
                        onClick={() => setSelectedWithdrawMethod(option.method)}
                        badge={option.badge}
                      />
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={!withdrawAmount || withdrawAmount < 100 || isLoading}
                  className={`w-full py-3 text-white font-medium rounded-lg transition-all flex items-center justify-center ${!withdrawAmount || withdrawAmount < 100 || isLoading
                    ? 'bg-gray-300 cursor-not-allowed'
                    : 'bg-amber-500 hover:bg-amber-600 shadow-sm'
                    }`}
                >
                  {isLoading ? (
                    'Processing...'
                  ) : (
                    <>
                      <FaArrowDown className="mr-2" />
                      {withdrawAmount >= 100 ? (
                        `Withdraw ${formatCurrency(withdrawAmount)}`
                      ) : (
                        'Enter withdrawal amount'
                      )}
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Add Money Form */}
            <div id="add-money-form" className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
                <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600">
                  <FaPlusCircle className="text-lg" />
                </div>
                <span>Add Money to Wallet</span>
              </h2>
              <form onSubmit={handleAddMoney} className="space-y-4">
                <div>
                  <label htmlFor="add-amount" className="block text-sm font-medium text-gray-700 mb-1">
                    Amount (₹)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
                    <input
                      id="add-amount"
                      type="number"
                      placeholder="0.00"
                      value={addAmount}
                      onChange={(e) => setAddAmount(e.target.value)}
                      className="w-full pl-8 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      min="100"
                      step="100"
                      required
                    />
                  </div>

                </div>

                <div>
                  <label htmlFor="add-method" className="block text-sm font-medium text-gray-700 mb-2">
                    Payment Method
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {addMoneyMethods.map((option) => (
                      <PaymentMethodCard
                        key={option.method}
                        method={option.method}
                        icon={option.icon}
                        selected={selectedAddMethod === option.method}
                        onClick={() => setSelectedAddMethod(option.method)}
                      />
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center shadow-sm ${isLoading ? 'opacity-75 cursor-not-allowed' : ''
                    }`}
                >
                  {isLoading ? 'Processing...' : (
                    <>
                      <FaPlusCircle className="mr-2" /> Add Money
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Transaction History */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-800">Transaction History</h2>
                <p className="text-sm text-gray-500 mt-1">Recent wallet transactions</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <div className="relative w-full sm:w-64">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaSearch className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search transactions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="flex border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    className={`px-3 py-1.5 text-sm ${activeTab === 'all' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700'}`}
                    onClick={() => setActiveTab('all')}
                  >
                    All
                  </button>
                  <button
                    className={`px-3 py-1.5 text-sm ${activeTab === 'deposits' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700'}`}
                    onClick={() => setActiveTab('deposits')}
                  >
                    Deposits
                  </button>
                  <button
                    className={`px-3 py-1.5 text-sm ${activeTab === 'withdrawals' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700'}`}
                    onClick={() => setActiveTab('withdrawals')}
                  >
                    Withdrawals
                  </button>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Method</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reference</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredTransactions.length > 0 ? (
                    filteredTransactions.map((transaction) => (
                      <tr key={transaction.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(transaction.date).toLocaleDateString('en-IN', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric'
                          })}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          <div className="flex items-center gap-2">
                            {transaction.type === 'Withdraw' ? (
                              <FaArrowDown className="text-amber-500" />
                            ) : transaction.type === 'Add Money' ? (
                              <FaPlusCircle className="text-indigo-500" />
                            ) : (
                              <FaMoneyBillWave className="text-green-500" />
                            )}
                            {transaction.type}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{transaction.method}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-mono">{transaction.reference}</td>
                        <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${transaction.type === 'Withdraw' ? 'text-red-600' : 'text-green-600'
                          }`}>
                          {transaction.type === 'Withdraw' ? '-' : '+'}{formatCurrency(transaction.amount)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <StatusBadge status={transaction.status} />
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="px-6 py-8 text-center">
                        <div className="flex flex-col items-center justify-center text-gray-400">
                          <FaSearch className="text-3xl mb-2" />
                          <p>No transactions found</p>
                          <p className="text-sm mt-1">Try adjusting your search or filter criteria</p>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletPage;