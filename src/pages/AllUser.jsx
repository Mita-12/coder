import React from 'react';
import Sidebar from '../components/Sidebar';

const AllUsers = () => {
  // Sample data with usage types
  const users = [
    {
      id: 1,
      name: 'John Doe',
      usageType: 'CUI/UX Templates',
      referrals: 42,
      earnings: 125.50
    },
    {
      id: 2,
      name: 'Jane Smith',
      usageType: 'Code Libraries',
      referrals: 28,
      earnings: 84.00
    },
    {
      id: 3,
      name: 'Alex Johnson',
      usageType: 'Premium Subscriptions',
      referrals: 15,
      earnings: 45.25
    },
    {
      id: 4,
      name: 'Sarah Williams',
      usageType: 'Domain Services',
      referrals: 36,
      earnings: 108.75
    },
    {
      id: 5,
      name: 'Michael Brown',
      usageType: 'Ads Campaigns',
      referrals: 7,
      earnings: 21.00
    },
  ];

  // Calculate total earnings
  const totalEarnings = users.reduce((sum, user) => sum + user.earnings, 0);

  // Usage type colors mapping
  const usageTypeColors = {
    'CUI/UX Templates': 'bg-purple-100 text-purple-800',
    'Code Libraries': 'bg-blue-100 text-blue-800',
    'Premium Subscriptions': 'bg-yellow-100 text-yellow-800',
    'Domain Services': 'bg-green-100 text-green-800',
    'Ads Campaigns': 'bg-red-100 text-red-800'
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 ml-55 text-sm text-gray-800">
        <div className="flex justify-center p-6 bg-gray-50">
          <div className="w-full max-w-7xl">
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800">Referral Program Analytics</h2>
                  <p className="text-gray-600 mt-1">Track user referrals and earnings</p>
                </div>
                <div className="flex space-x-2">
                  <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
                    Export Data
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        User
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Usage Type
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Purchase Code
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Earnings
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {users.map((user) => {
                      const percentage = (user.earnings / totalEarnings * 100).toFixed(1);
                      return (
                        <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                                <span className="text-indigo-600 font-medium">
                                  {user.name.split(' ').map(n => n[0]).join('')}
                                </span>
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">{user.name}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${usageTypeColors[user.usageType]}`}>
                              {user.usageType}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="w-12 bg-gray-200 rounded-full h-2 mr-2">
                                <div
                                  className="bg-indigo-600 h-2 rounded-full"
                                  style={{ width: `${Math.min(100, (user.referrals / 50) * 100)}%` }}
                                ></div>
                              </div>
                              <span className="text-sm font-medium">{user.referrals}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex flex-col">
                              <span className="text-green-600 font-bold">${user.earnings.toFixed(2)}</span>
                              <span className="text-xs text-gray-500 mt-1">{percentage}% of total</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              Active
                            </span>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>

              <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Top Usage Type</h3>
                    <p className="text-2xl font-bold text-indigo-600">CUI/UX Templates</p>
                    <p className="text-sm text-gray-500">Most referred product category</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Total Referrals</h3>
                    <p className="text-2xl font-bold text-indigo-600">128</p>
                    <p className="text-sm text-gray-500">Across all users</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Total Earnings</h3>
                    <p className="text-2xl font-bold text-indigo-600">${totalEarnings.toFixed(2)}</p>
                    <p className="text-sm text-gray-500">Paid to affiliates</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;