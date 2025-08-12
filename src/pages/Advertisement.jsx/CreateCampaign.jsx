import React, { useState, useEffect } from 'react';
import {
  MdPerson,
  MdCategory,
  MdShoppingBasket,
  MdClose,
  MdArrowBack,
  MdCheck
} from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';

const CreateCampaign = () => {
  const navigate = useNavigate();
  // State management
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedProduct, setSelectedProduct] = useState('');
  const [formData, setFormData] = useState({
    campaignName: '',
    keywords: '',
    dailyBudget: '100',
    bidPrice: '0.25',
  });

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

  // Form handling
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create campaign object
    const newCampaign = {
      id: Date.now(),
      name: formData.campaignName,
      keywords: formData.keywords,
      dailyBudget: parseFloat(formData.dailyBudget),
      bidPrice: parseFloat(formData.bidPrice),
      status: 'active',
      views: 0,
      clicks: 0,
      createdAt: new Date().toISOString(),
      users: [...selectedUsers],
      category: selectedCategory,
      product: parseInt(selectedProduct)
    };

    // Save to localStorage
    const existingCampaigns = JSON.parse(localStorage.getItem('campaigns') || '[]');
    const updatedCampaigns = [...existingCampaigns, newCampaign];
    localStorage.setItem('campaigns', JSON.stringify(updatedCampaigns));

    // Redirect to campaigns history
    navigate('/campaigns');
  };

  // Helper functions to get names
  const getCategoryName = (id) => {
    return categories.find(cat => cat.id === id)?.name || id;
  };

  const getProductName = (id) => {
    return products.find(prod => prod.id === parseInt(id))?.name || id;
  };

  const getUserNames = () => {
    if (selectedUsers.length === 0) return 'No users selected';
    if (selectedUsers.length === users.length) return 'All users selected';
    if (selectedUsers.length > 3) return `${selectedUsers.length} users selected`;

    return selectedUsers.map(userId => {
      const user = users.find(u => u.id === userId);
      return user ? user.name : `User ${userId}`;
    }).join(', ');
  };

  return (
    <div className="flex bg-slate-100">
      <Sidebar />
      <div className="p-6 bg-gray-50 min-h-screen w-full ml-55">
        <div className="">
          <div className="mb-8">
            <Link
              to="/campaigns"
              className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 mb-4"
            >
              <MdArrowBack size={20} />
              Back to Campaigns
            </Link>
            <h1 className="text-3xl font-bold text-gray-800">Create New Campaign</h1>
            <p className="text-gray-600 mt-2">
              Set up a new advertising campaign with the options below
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
            <div className="grid grid-cols-1 gap-6 mb-8">
              {/* Campaign Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Campaign Name
                </label>
                <input
                  type="text"
                  name="campaignName"
                  value={formData.campaignName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter campaign name"
                  required
                />
              </div>

              {/* Keywords */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Keywords
                </label>
                <input
                  type="text"
                  name="keywords"
                  value={formData.keywords}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="e.g. summer sale discount"
                  required
                />
              </div>

              {/* Budget and Bid Price in one row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Daily Budget */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Daily Budget ($)
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                      $
                    </span>
                    <input
                      type="number"
                      name="dailyBudget"
                      value={formData.dailyBudget}
                      onChange={handleInputChange}
                      className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      min="100"
                      step="0.01"
                      required
                    />
                  </div>
                  <p className="mt-1 text-xs text-gray-500">Minimum $100.00 per day</p>
                </div>

                {/* Bid Price */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Bid Price ($)
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                      $
                    </span>
                    <input
                      type="number"
                      name="bidPrice"
                      value={formData.bidPrice}
                      onChange={handleInputChange}
                      className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      min="0.25"
                      step="0.01"
                      required
                    />
                  </div>
                  <p className="mt-1 text-xs text-gray-500">Minimum $0.25 per bid</p>
                </div>
              </div>

              {/* Selection row - User, Category, Product */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* User Selection - Updated to dropdown style */}
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Target Users
                  </label>
                  <div className="relative">
                    <button
                      type="button"
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
                  {selectedUsers.length > 0 && (
                    <div className="mt-1 text-xs text-gray-600 truncate">
                      {getUserNames()}
                    </div>
                  )}
                </div>

                {/* Category Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <div className="relative">
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-700 appearance-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      required
                    >
                      <option value="">Select category</option>
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
                  {selectedCategory && (
                    <div className="mt-1 text-xs text-gray-600 truncate">
                      {getCategoryName(selectedCategory)}
                    </div>
                  )}
                </div>

                {/* Product Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Product
                  </label>
                  <div className="relative">
                    <select
                      value={selectedProduct}
                      onChange={(e) => setSelectedProduct(e.target.value)}
                      disabled={!selectedCategory}
                      className={`w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-700 appearance-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${!selectedCategory ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                      required
                    >
                      <option value="">Select product</option>
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
                  {selectedProduct && (
                    <div className="mt-1 text-xs text-gray-600 truncate">
                      {getProductName(selectedProduct)}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-end gap-3">
              <Link
                to="/campaigns"
                className="px-6 py-3 text-gray-700 font-medium bg-gray-100 rounded-lg hover:bg-gray-200"
              >
                Cancel
              </Link>
              <button
                type="submit"
                className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700"
              >
                Create Campaign
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateCampaign;