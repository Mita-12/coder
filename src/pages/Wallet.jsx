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

// const WalletPage = () => {
//   const [showAddFundsModal, setShowAddFundsModal] = useState(false);
//   const [showSendMoneyModal, setShowSendMoneyModal] = useState(false);
//   // const [amount, setAmount] = useState('');

//   // Sample wallet data
//   const walletData = {
//     balance: 2845.50,
//     transactions: [
//       { id: 1, type: 'received', amount: 0.01, currency: 'BTC', value: 350, date: 'Today, 10:45 AM', status: 'completed' },
//       { id: 2, type: 'sent', amount: 0.005, currency: 'BTC', value: 175, date: 'Yesterday, 2:30 PM', status: 'completed' },
//       { id: 3, type: 'deposit', amount: 500, currency: 'USD', value: 500, date: 'Mar 15, 9:15 AM', status: 'completed' },
//       { id: 4, type: 'withdrawal', amount: 200, currency: 'USD', value: 200, date: 'Mar 14, 4:20 PM', status: 'pending' }
//     ]
//   };

//   const formatCurrency = (value) => {
//     return new Intl.NumberFormat('en-US', {
//       style: 'currency',
//       currency: 'USD',
//       minimumFractionDigits: 2,
//       maximumFractionDigits: 2
//     }).format(value);
//   };

//   const formatCrypto = (value) => {
//     return parseFloat(value).toLocaleString('en-US', {
//       minimumFractionDigits: 2,
//       maximumFractionDigits: 8
//     });
//   };

//   const getStatusColor = (status) => {
//     switch (status) {
//       case 'completed': return 'bg-green-100 text-green-800';
//       case 'pending': return 'bg-yellow-100 text-yellow-800';
//       default: return 'bg-gray-100 text-gray-800';
//     }
//   };

//   const getTransactionIcon = (type) => {
//     switch (type) {
//       case 'received': return <FiArrowDownLeft className="text-xl text-green-600" />;
//       case 'sent': return <FiArrowUpRight className="text-xl text-red-600" />;
//       case 'deposit': return <MdAdd className="text-xl text-blue-600" />;
//       case 'withdrawal': return <FiArrowUpRight className="text-xl text-orange-600" />;
//       default: return <MdSwapHoriz className="text-xl text-gray-600" />;
//     }
//   };

//   return (
//     <div className="flex">
//       <Sidebar />

//       <div className="ml-55 bg-slate-100 min-h-screen p-6 text-sm text-gray-800 w-full">
//         <DashboardNavbar />

//         <div className="max-w-6xl mx-auto pt-16">
//           {/* Wallet Header */}
//           <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
//             <div>
//               <h1 className="text-2xl md:text-3xl font-bold text-gray-900">My Wallet</h1>
//               <p className="text-gray-500 mt-1">Manage your digital assets and transactions</p>
//             </div>
//           </div>

//           {/* Balance Card */}
//           <div className="bg-white rounded-xl p-6 mb-8 shadow-sm border border-gray-100">
//             <div className="flex justify-between items-start">
//               <div>
//                 <p className="text-sm text-gray-500 uppercase tracking-wider font-medium">Total Balance</p>
//                 <h2 className="text-3xl font-bold mt-1 text-gray-900">{formatCurrency(walletData.balance)}</h2>
//                 <p className="text-sm text-gray-500 mt-2 flex items-center">
//                   <span className="inline-block w-2 h-2 rounded-full bg-green-400 mr-2"></span>
//                   +2.4% (24h)
//                 </p>
//               </div>
//               <div className="bg-blue-100 p-3 rounded-xl text-blue-600">
//                 <MdAccountBalanceWallet className="text-3xl" />
//               </div>
//             </div>

//             {/* Action Buttons */}
//             <div className="mt-8 grid grid-cols-2 gap-4">
//               <button
//                 onClick={() => setShowAddFundsModal(true)}
//                 className="flex items-center justify-center px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-sm"
//               >
//                 <MdAdd className="mr-2 text-lg" /> Add Funds
//               </button>
//               <button
//                 onClick={() => setShowSendMoneyModal(true)}
//                 className="flex items-center justify-center px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all shadow-sm"
//               >
//                 <FiArrowUpRight className="mr-2 text-lg" /> Withdraw
//               </button>
//             </div>
//           </div>

//           {/* Transaction History */}
//           <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
//             <div className="flex justify-between items-center mb-6">
//               <h3 className="text-lg font-semibold text-gray-900">Recent Transactions</h3>
//               <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
//                 View All
//               </button>
//             </div>

//             <div className="space-y-4">
//               {walletData.transactions.map((tx) => (
//                 <div key={tx.id} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors">
//                   <div className="flex items-center space-x-4">
//                     <div className={`p-3 rounded-lg ${tx.type === 'received' ? 'bg-green-50' : 
//                       tx.type === 'sent' ? 'bg-red-50' : 
//                       tx.type === 'deposit' ? 'bg-blue-50' : 'bg-orange-50'}`}>
//                       {getTransactionIcon(tx.type)}
//                     </div>
//                     <div>
//                       <p className="font-medium text-gray-900 capitalize">{tx.type}</p>
//                       <p className="text-sm text-gray-500">{tx.date}</p>
//                     </div>
//                   </div>
//                   <div className="text-right">
//                     <p className={`font-semibold ${tx.type === 'received' || tx.type === 'deposit' ? 'text-green-600' : 'text-red-600'}`}>
//                       {tx.type === 'received' || tx.type === 'deposit' ? '+' : '-'}
//                       {tx.currency === 'USD' ? formatCurrency(tx.amount) : formatCrypto(tx.amount)} {tx.currency}
//                     </p>
//                     <p className="text-sm text-gray-500">
//                       {tx.currency !== 'USD' && formatCurrency(tx.value)}
//                     </p>
//                     <span className={`mt-1 px-2 py-1 inline-flex text-xs leading-4 font-medium rounded-full ${getStatusColor(tx.status)}`}>
//                       {tx.status}
//                     </span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Add Funds Modal */}
//           {showAddFundsModal && (
//             <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//               <div className="bg-white rounded-xl max-w-md w-full p-6 animate-fade-in shadow-lg">
//                 {/* ... (keep your existing add funds modal code) ... */}
//               </div>
//             </div>
//           )}

//           {/* Withdrawal Modal */}
//           {showSendMoneyModal && (
//             <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//               <div className="bg-white rounded-xl max-w-md w-full p-6 animate-fade-in shadow-lg">
//                 {/* ... (keep your existing withdrawal modal code) ... */}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };



const WalletPage = () => {
  const [activeTab, setActiveTab] = useState('balance');
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const [showAddFundsModal, setShowAddFundsModal] = useState(false);
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [addFundsAmount, setAddFundsAmount] = useState('');
  const [bankDetails, setBankDetails] = useState({
    name: '',
    accountNumber: '',
    bankName: '',
    ifscCode: ''
  });

  // Wallet data
  const walletData = {
    totalBalance: 2450.00,
    totalEarned: 8750.00,
    withdrawalLimit: {
      used: 1950,
      total: 3000,
      percentage: 65
    },
    fundsSummary: {
      received: 3250.00,
      sent: 1200.00,
      withdrawals: 800.00
    },
    transactions: [
      { id: 1, date: '2023-06-11', description: 'Payment Received', amount: 500.00, status: 'Completed', type: 'credit' },
      { id: 2, date: '2023-06-12', description: 'Withdrawal', amount: 100.00, status: 'Processing', type: 'debit' },
      { id: 3, date: '2023-06-13', description: 'Product Sale', amount: 150.00, status: 'Completed', type: 'credit' },
      { id: 4, date: '2023-06-10', description: 'Service Payment', amount: 200.00, status: 'Completed', type: 'credit' },
      { id: 5, date: '2023-06-09', description: 'Money Transfer', amount: 300.00, status: 'Completed', type: 'debit' }
    ]
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(value);
  };

  const handleWithdraw = (e) => {
    e.preventDefault();
    // Handle withdrawal logic here
    console.log('Withdrawing:', withdrawAmount, bankDetails);
    setShowWithdrawModal(false);
    setWithdrawAmount('');
    setBankDetails({
      name: '',
      accountNumber: '',
      bankName: '',
      ifscCode: ''
    });
  };

  const handleAddFunds = (e) => {
    e.preventDefault();
    // Handle add funds logic here
    console.log('Adding funds:', addFundsAmount, bankDetails);
    setShowAddFundsModal(false);
    setAddFundsAmount('');
    setBankDetails({
      name: '',
      accountNumber: '',
      bankName: '',
      ifscCode: ''
    });
  };

  const handleBankDetailsChange = (e) => {
    const { name, value } = e.target;
    setBankDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />
      <div className="ml-55 bg-slate-100 min-h-screen p-6 text-sm text-gray-800 w-full">    
        <DashboardNavbar />

        <div className="max-w-6xl mx-auto pt-16">
          {/* Action Buttons - Top Right Corner */}
          <div className="flex justify-end space-x-4 mb-6">
            <button
              onClick={() => setShowAddFundsModal(true)}
              className="flex items-center px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              <FiPlus className="mr-2" />
              Add Funds
            </button>
            <button
              onClick={() => setShowWithdrawModal(true)}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              <FiCreditCard className="mr-2" />
              Withdraw
            </button>
          </div>

          <h2 className="text-2xl font-bold mb-2">Wallet Balance</h2>
          <p className="text-gray-600 mb-6">Your current balance and transactions</p>

          {/* Tabs */}
          <div className="flex border-b mb-6">
            <button
              className={`px-4 py-2 font-medium ${activeTab === 'balance' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
              onClick={() => setActiveTab('balance')}
            >
              Balance Overview
            </button>
            <button
              className={`px-4 py-2 font-medium ${activeTab === 'history' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
              onClick={() => setActiveTab('history')}
            >
              Transaction History
            </button>
          </div>

          {/* Balance Overview */}
          {activeTab === 'balance' && (
            <div className="space-y-6">
              {/* Balance Card */}
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-gray-500 text-sm font-medium mb-2">Total Balance</h3>
                    <p className="text-3xl font-bold">{formatCurrency(walletData.totalBalance)}</p>
                  </div>
                  <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                    <FiDollarSign className="text-2xl" />
                  </div>
                </div>
                
                {/* Withdrawal Progress */}
                <div>
                  <h3 className="text-gray-500 text-sm font-medium mt-6 mb-2">Withdrawal Progress</h3>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{ width: `${walletData.withdrawalLimit.percentage}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{walletData.withdrawalLimit.percentage}% of monthly limit used</span>
                    <span>{formatCurrency(walletData.withdrawalLimit.used)} of {formatCurrency(walletData.withdrawalLimit.total)}</span>
                  </div>
                </div>
              </div>

              {/* Funds Summary */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-gray-500 text-sm font-medium mb-2">Total Received</h3>
                      <p className="text-xl font-bold text-green-600">{formatCurrency(walletData.fundsSummary.received)}</p>
                    </div>
                    <div className="bg-green-100 p-2 rounded-lg text-green-600">
                      <FiArrowDown className="text-xl" />
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-gray-500 text-sm font-medium mb-2">Total Sent</h3>
                      <p className="text-xl font-bold text-orange-600">{formatCurrency(walletData.fundsSummary.sent)}</p>
                    </div>
                    <div className="bg-orange-100 p-2 rounded-lg text-orange-600">
                      <FiArrowUp className="text-xl" />
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-gray-500 text-sm font-medium mb-2">Total Withdrawn</h3>
                      <p className="text-xl font-bold text-red-600">{formatCurrency(walletData.fundsSummary.withdrawals)}</p>
                    </div>
                    <div className="bg-red-100 p-2 rounded-lg text-red-600">
                      <FiCreditCard className="text-xl" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Total Earned */}
              {/* <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-gray-500 text-sm font-medium mb-2">Total Earned</h3>
                <p className="text-2xl font-bold">{formatCurrency(walletData.totalEarned)}</p>
              </div> */}
            </div>
          )}

          {/* Transaction History */}
          {activeTab === 'history' && (
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="p-6 border-b">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold">Transaction History</h3>
                    <p className="text-gray-500">Your recent wallet transactions</p>
                  </div>
                  <div className="flex space-x-2">
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                      Received: {formatCurrency(walletData.fundsSummary.received)}
                    </span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">
                      Sent: {formatCurrency(walletData.fundsSummary.sent)}
                    </span>
                    <span className="px-3 py-1 bg-red-100 text-red-800 text-sm rounded-full">
                      Withdrawn: {formatCurrency(walletData.fundsSummary.withdrawals)}
                    </span>
                  </div>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {walletData.transactions.map((tx) => (
                      <tr key={tx.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{tx.date}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{tx.description}</td>
                        <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                          tx.type === 'credit' ? 'text-green-600' : 'text-red-600'
                        }`}>
                          <div className="flex items-center">
                            {tx.type === 'credit' ? (
                              <FiArrowDown className="mr-1 text-green-500" />
                            ) : (
                              <FiArrowUp className="mr-1 text-red-500" />
                            )}
                            {formatCurrency(tx.amount)}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            tx.status === 'Completed' ? 'bg-green-100 text-green-800' :
                            tx.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-blue-100 text-blue-800'
                          }`}>
                            {tx.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        {/* Add Funds Modal */}
        {showAddFundsModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
              <h3 className="text-xl font-bold mb-4">Add Funds</h3>
              <form onSubmit={handleAddFunds}>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Amount to Add</label>
                  <input
                    type="number"
                    className="w-full p-2 border rounded"
                    value={addFundsAmount}
                    onChange={(e) => setAddFundsAmount(e.target.value)}
                    placeholder="Enter amount"
                    min="1"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Bank Name</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded"
                    name="bankName"
                    value={bankDetails.bankName}
                    onChange={handleBankDetailsChange}
                    placeholder="Enter bank name"
                    required
                  />
                </div>
                <div className="flex justify-end space-x-3">
                  <button
                    type="button"
                    className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                    onClick={() => setShowAddFundsModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                  >
                    Add Funds
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Withdraw Modal */}
        {showWithdrawModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
              <h3 className="text-xl font-bold mb-4">Withdraw Funds</h3>
              <form onSubmit={handleWithdraw}>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Amount to Withdraw</label>
                  <input
                    type="number"
                    className="w-full p-2 border rounded"
                    value={withdrawAmount}
                    onChange={(e) => setWithdrawAmount(e.target.value)}
                    placeholder="Enter amount"
                    min="1"
                    max={walletData.totalBalance}
                    required
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Available: {formatCurrency(walletData.totalBalance)}
                  </p>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Name on Account</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded"
                    name="name"
                    value={bankDetails.name}
                    onChange={handleBankDetailsChange}
                    placeholder="Enter account holder name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Account Number</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded"
                    name="accountNumber"
                    value={bankDetails.accountNumber}
                    onChange={handleBankDetailsChange}
                    placeholder="Enter account number"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Bank Name</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded"
                    name="bankName"
                    value={bankDetails.bankName}
                    onChange={handleBankDetailsChange}
                    placeholder="Enter bank name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">IFSC Code</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded"
                    name="ifscCode"
                    value={bankDetails.ifscCode}
                    onChange={handleBankDetailsChange}
                    placeholder="Enter IFSC code"
                    required
                  />
                </div>
                <div className="flex justify-end space-x-3">
                  <button
                    type="button"
                    className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                    onClick={() => setShowWithdrawModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Confirm Withdrawal
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};


export default WalletPage;


