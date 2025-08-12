import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import {
  MdPerson,
  MdCampaign,
  MdVisibility,
  MdTouchApp,
  MdEdit,
  MdDelete,
  MdAdd,
  MdClose,
  MdAttachMoney,
  MdShoppingCart,
  MdBarChart
} from 'react-icons/md';


const Ads = () => {
  // State management
  const [showUserModal, setShowUserModal] = useState(false);
  const [selectedUsers, setSelectedUsers] = useState([]);
 
  // Reset campaigns to initial state without user-added campaigns
  const [campaigns] = useState([
    { id: 1, name: 'Summer Sale 2023', views: 2450, impressions: 9800, dailyBudget: 50, totalInvestment: 1500, sales: 120 },
    { id: 2, name: 'Back to School', views: 1870, impressions: 7500, dailyBudget: 40, totalInvestment: 800, sales: 85 },
    { id: 3, name: 'Holiday Special', views: 2890, impressions: 11560, dailyBudget: 60, totalInvestment: 1800, sales: 210 },
  ]);


  // Calculate stats
  const totalCampaigns = campaigns.length;
  const totalViews = campaigns.reduce((sum, campaign) => sum + campaign.views, 0);
  const totalImpressions = campaigns.reduce((sum, campaign) => sum + campaign.impressions, 0);
  const totalDailyBudget = campaigns.reduce((sum, campaign) => sum + campaign.dailyBudget, 0);
  const totalInvestment = campaigns.reduce((sum, campaign) => sum + campaign.totalInvestment, 0);
  const totalSales = campaigns.reduce((sum, campaign) => sum + campaign.sales, 0);


  // Card data with icons
  const stats = [
    {
      title: 'Total Campaigns',
      value: totalCampaigns,
      change: '+5%',
      icon: <MdCampaign className="text-indigo-600" size={24} />
    },
    {
      title: 'Total Views',
      value: totalViews.toLocaleString(),
      change: '+7.2%',
      icon: <MdVisibility className="text-indigo-600" size={24} />
    },
    {
      title: 'Total Impressions',
      value: totalImpressions.toLocaleString(),
      change: '+15.8%',
      icon: <MdBarChart className="text-indigo-600" size={24} />
    },
    {
      title: 'Total Daily Budget',
      value: `$${totalDailyBudget.toLocaleString()}`,
      change: '+18.3%',
      icon: <MdAttachMoney className="text-indigo-600" size={24} />
    },
    // Added Total Investment card
    {
      title: 'Total Investment',
      value: `$${totalInvestment.toLocaleString()}`,
      change: '+12.5%',
      icon: <MdAttachMoney className="text-indigo-600" size={24} />
    },
    // Added Total Sales card
    {
      title: 'Total Sales',
      value: totalSales.toLocaleString(),
      change: '+22.4%',
      icon: <MdShoppingCart className="text-indigo-600" size={24} />
    },
  ];


  // User selection functions
  const toggleUserSelection = (userId) => {
    if (selectedUsers.includes(userId)) {
      setSelectedUsers(selectedUsers.filter(id => id !== userId));
    } else {
      setSelectedUsers([...selectedUsers, userId]);
    }
  };


  const toggleAllUsers = () => {
    if (selectedUsers.length === users.length) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(users.map(user => user.id));
    }
  };


  // Sample user data
  const users = [
    { id: 1, name: 'John Doe', campaigns: 5 },
    { id: 2, name: 'Jane Smith', campaigns: 8 },
    { id: 3, name: 'Bob Johnson', campaigns: 3 },
    { id: 4, name: 'Alice Williams', campaigns: 12 },
  ];


  return (
    <div className="flex bg-slate-100">
      <Sidebar />
      <div className="p-6 bg-gray-50 min-h-screen ml-55 w-full">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Campaign Dashboard</h1>
          {/* Add Campaign button has been removed as requested */}
        </div>
       
        {/* Stats Cards Section with Icons - Updated for 6 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 relative"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-gray-500 text-sm font-medium flex items-center gap-2">
                    {stat.icon}
                    {stat.title}
                  </h3>
                  <div className="flex items-baseline mt-2">
                    <span className="text-2xl font-bold text-gray-800">{stat.value}</span>
                    <span className="ml-2 text-sm font-medium text-green-500">{stat.change}</span>
                  </div>
                </div>
                {index === 0 && (
                  <button
                    onClick={() => setShowUserModal(true)}
                    className="text-sm text-indigo-600 hover:text-indigo-800 bg-indigo-50 hover:bg-indigo-100 px-3 py-1 rounded-lg"
                  >
                    {selectedUsers.length > 0 ? 'Change' : 'Select'}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>


        {/* Campaigns Table Section */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
          <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-800">Campaigns</h2>
            {selectedUsers.length > 0 && (
              <p className="text-sm text-gray-500">
                Showing campaigns for {selectedUsers.length} selected user(s)
              </p>
            )}
          </div>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SL No</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Campaign Name</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Views</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Impressions</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Daily Budget</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {campaigns.map((campaign, index) => (
                <tr key={campaign.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{campaign.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{campaign.views.toLocaleString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{campaign.impressions.toLocaleString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${campaign.dailyBudget}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium flex gap-3">
                    <button
                      className="text-indigo-600 hover:text-indigo-900 flex items-center gap-1"
                    >
                      <MdEdit size={16} /> Edit
                    </button>
                    <button
                      className="text-red-600 hover:text-red-900 flex items-center gap-1"
                    >
                      <MdDelete size={16} /> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
     
      {/* User Selection Modal */}
      {showUserModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-bold text-gray-800">Select Users</h2>
              <button
                onClick={() => setShowUserModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <MdClose size={24} />
              </button>
            </div>
           
            <div className="p-4">
              <div className="mb-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedUsers.length === users.length}
                    onChange={toggleAllUsers}
                    className="mr-2 h-4 w-4 text-indigo-600 rounded"
                  />
                  <span className="text-gray-700 font-medium">Select All Users</span>
                </label>
              </div>
             
              <div className="max-h-60 overflow-y-auto border border-gray-200 rounded-lg">
                {users.map(user => (
                  <div
                    key={user.id}
                    className="p-3 border-b border-gray-100 hover:bg-gray-50"
                  >
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedUsers.includes(user.id)}
                        onChange={() => toggleUserSelection(user.id)}
                        className="mr-3 h-4 w-4 text-indigo-600 rounded"
                      />
                      <div>
                        <p className="text-gray-800 font-medium">{user.name}</p>
                        <p className="text-sm text-gray-500">{user.campaigns} campaigns</p>
                      </div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
           
            <div className="p-4 border-t flex justify-end">
              <button
                onClick={() => setShowUserModal(false)}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                Apply Selection
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


export default Ads;
