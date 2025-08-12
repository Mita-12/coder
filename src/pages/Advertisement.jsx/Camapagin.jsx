// src/components/Campaigns.jsx
import React, { useState, useEffect } from 'react';
import {
  MdDelete,
  MdVisibility,
  MdPerson,
  MdCategory,
  MdShoppingBasket,
  MdClose,
  MdArrowBack,
  MdCheck
} from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';

const Campaigns = () => {
  // State management
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedProduct, setSelectedProduct] = useState('');

  // Initialize campaigns from localStorage
  const [campaigns, setCampaigns] = useState(() => {
    const savedCampaigns = localStorage.getItem('campaigns');
    return savedCampaigns ? JSON.parse(savedCampaigns) : [
      {
        id: 1,
        name: 'Summer Sale 2023',
        keywords: 'summer, sale, discount',
        dailyBudget: 250,
        bidPrice: 1.20,
        status: 'active',
        views: 2450,
        clicks: 120
      },
      {
        id: 2,
        name: 'Back to School',
        keywords: 'school, education, supplies',
        dailyBudget: 180,
        bidPrice: 0.95,
        status: 'paused',
        views: 1870,
        clicks: 95
      },
      {
        id: 3,
        name: 'Holiday Special',
        keywords: 'holiday, gift, christmas',
        dailyBudget: 500,
        bidPrice: 2.50,
        status: 'active',
        views: 2890,
        clicks: 145
      }
    ];
  });

  const navigate = useNavigate();

  // Save campaigns to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('campaigns', JSON.stringify(campaigns));
  }, [campaigns]);

  // Sample data
  const users = [
    { id: 1, name: 'John Doe', campaigns: 5 },
    { id: 2, name: 'Jane Smith', campaigns: 8 },
    { id: 3, name: 'Bob Johnson', campaigns: 3 },
    { id: 4, name: 'Alice Williams', campaigns: 12 },
  ];

  const categories = [
    { id: 'electronics', name: 'Electronics' },
    { id: 'fashion', name: 'Fashion' },
    { id: 'home', name: 'Home & Kitchen' },
    { id: 'beauty', name: 'Beauty & Health' },
  ];

  const products = [
    { id: 1, name: 'Smartphone X', category: 'electronics' },
    { id: 2, name: 'Laptop Pro', category: 'electronics' },
    { id: 3, name: 'Summer Dress', category: 'fashion' },
    { id: 4, name: 'Leather Jacket', category: 'fashion' },
    { id: 5, name: 'Coffee Maker', category: 'home' },
    { id: 6, name: 'Blender', category: 'home' },
    { id: 7, name: 'Perfume Set', category: 'beauty' },
    { id: 8, name: 'Skincare Kit', category: 'beauty' },
  ];

  const [filteredProducts, setFilteredProducts] = useState([]);

  // Filter products based on selected category
  useEffect(() => {
    if (selectedCategory) {
      setFilteredProducts(products.filter(p => p.category === selectedCategory));
    } else {
      setFilteredProducts([]);
    }
    setSelectedProduct('');
  }, [selectedCategory]);

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

  // Delete campaign
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this campaign?')) {
      setCampaigns(campaigns.filter(c => c.id !== id));
    }
  };

  // Toggle campaign status
  const toggleStatus = (id, currentStatus) => {
    setCampaigns(campaigns.map(campaign =>
      campaign.id === id
        ? { ...campaign, status: currentStatus === 'active' ? 'paused' : 'active' }
        : campaign
    ));
  };

  // View campaign details
  const viewCampaignDetails = (campaignId) => {
    navigate(`/campaign/${campaignId}`);
  };

  return (
    <div className="flex bg-slate-100">
      <Sidebar />
      <div className="p-6 bg-gray-50 min-h-screen w-full ml-55">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Campaign Management</h1>
              <p className="text-gray-600 mt-2">
                Manage your advertising campaigns
              </p>
            </div>
            <Link
              to="/create-campaign"
              className="mt-4 md:mt-0 flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-lg transition-all"
            >
              Create New Campaign
            </Link>
          </div>

          {/* Selection Section */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8 border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Filter Campaigns</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* User Selection - Updated to dropdown style */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Users
                </label>
                <div className="relative">
                  <button
                    onClick={() => setShowUserDropdown(!showUserDropdown)}
                    className="w-full flex items-center justify-between gap-3 px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100"
                  >
                    <div className="flex items-center gap-2">
                      <MdPerson className="text-gray-500" />
                      <span className="truncate">
                        {selectedUsers.length > 0
                          ? `${selectedUsers.length} user${selectedUsers.length > 1 ? 's' : ''} selected`
                          : 'Select users'}
                      </span>
                    </div>
                    <svg
                      className={`w-5 h-5 text-gray-500 transition-transform ${showUserDropdown ? 'transform rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {showUserDropdown && (
                    <div className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-lg border border-gray-200 max-h-60 overflow-y-auto">
                      <div className="p-2 border-b border-gray-100">
                        <label className="flex items-center p-2 hover:bg-gray-50 rounded cursor-pointer">
                          <input
                            type="checkbox"
                            checked={selectedUsers.length === users.length}
                            onChange={toggleAllUsers}
                            className="mr-2 h-4 w-4 text-indigo-600 rounded"
                          />
                          <span className="text-gray-700 font-medium">Select All</span>
                        </label>
                      </div>
                      <div className="divide-y divide-gray-100">
                        {users.map(user => (
                          <label
                            key={user.id}
                            className="flex items-center p-3 hover:bg-gray-50 cursor-pointer"
                          >
                            <input
                              type="checkbox"
                              checked={selectedUsers.includes(user.id)}
                              onChange={() => toggleUserSelection(user.id)}
                              className="mr-3 h-4 w-4 text-indigo-600 rounded"
                            />
                            <div className="flex-1">
                              <p className="text-gray-800 font-medium">{user.name}</p>
                              <p className="text-xs text-gray-500">{user.campaigns} campaigns</p>
                            </div>
                            {selectedUsers.includes(user.id) && (
                              <MdCheck className="text-indigo-600" />
                            )}
                          </label>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Category Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Category
                </label>
                <div className="relative">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-700 appearance-none"
                  >
                    <option value="">Select a category</option>
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MdCategory className="text-gray-500" />
                  </div>
                </div>
              </div>

              {/* Product Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Product
                </label>
                <div className="relative">
                  <select
                    value={selectedProduct}
                    onChange={(e) => setSelectedProduct(e.target.value)}
                    disabled={!selectedCategory}
                    className={`w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-700 appearance-none ${!selectedCategory ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                  >
                    <option value="">Select a product</option>
                    {filteredProducts.map(product => (
                      <option key={product.id} value={product.id}>
                        {product.name}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MdShoppingBasket className="text-gray-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Campaigns Table Section */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
            <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-800">Campaign History</h2>
              {selectedUsers.length > 0 && (
                <p className="text-sm text-gray-500">
                  Showing campaigns for {selectedUsers.length} selected user(s)
                </p>
              )}
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      SL No
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Campaign Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Keywords
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Daily Budget
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Bid Price
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {campaigns.map((campaign, index) => (
                    <tr key={campaign.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {campaign.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {campaign.keywords}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        ${campaign.dailyBudget.toFixed(2)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        ${campaign.bidPrice.toFixed(2)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${campaign.status === 'active' ? 'bg-green-100 text-green-800' :
                          campaign.status === 'paused' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                          {campaign.status.charAt(0).toUpperCase() + campaign.status.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium flex items-center gap-3">
                        <button
                          onClick={() => toggleStatus(campaign.id, campaign.status)}
                          className={`${campaign.status === 'active'
                            ? 'text-red-600 hover:text-red-900'
                            : 'text-green-600 hover:text-green-900'
                            } flex items-center gap-1`}
                        >
                          {campaign.status === 'active' ? 'Pause' : 'Activate'}
                        </button>
                        <button
                          onClick={() => viewCampaignDetails(campaign.id)}
                          className="text-indigo-600 hover:text-indigo-900 flex items-center gap-1"
                        >
                          <MdVisibility size={16} /> View
                        </button>
                        <button
                          onClick={() => handleDelete(campaign.id)}
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
        </div>
      </div>
    </div>
  );
};

export default Campaigns;