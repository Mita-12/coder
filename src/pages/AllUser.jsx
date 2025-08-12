// import React from 'react';
// import Sidebar from '../components/Sidebar';

// const AllUsers = () => {
//   // Sample data with usage types
//   const users = [
//     {
//       id: 1,
//       name: 'John Doe',
//       usageType: 'CUI/UX Templates',
//       referrals: 42,
//       earnings: 125.50
//     },
//     {
//       id: 2,
//       name: 'Jane Smith',
//       usageType: 'Code Libraries',
//       referrals: 28,
//       earnings: 84.00
//     },
//     {
//       id: 3,
//       name: 'Alex Johnson',
//       usageType: 'Premium Subscriptions',
//       referrals: 15,
//       earnings: 45.25
//     },
//     {
//       id: 4,
//       name: 'Sarah Williams',
//       usageType: 'Domain Services',
//       referrals: 36,
//       earnings: 108.75
//     },
//     {
//       id: 5,
//       name: 'Michael Brown',
//       usageType: 'Ads Campaigns',
//       referrals: 7,
//       earnings: 21.00
//     },
//   ];

//   // Calculate total earnings
//   const totalEarnings = users.reduce((sum, user) => sum + user.earnings, 0);

//   // Usage type colors mapping
//   const usageTypeColors = {
//     'CUI/UX Templates': 'bg-purple-100 text-purple-800',
//     'Code Libraries': 'bg-blue-100 text-blue-800',
//     'Premium Subscriptions': 'bg-yellow-100 text-yellow-800',
//     'Domain Services': 'bg-green-100 text-green-800',
//     'Ads Campaigns': 'bg-red-100 text-red-800'
//   };

//   return (
//     <div className="flex min-h-screen">
//       <Sidebar />
//       <div className="flex-1 ml-55 text-sm text-gray-800">
//         <div className="flex justify-center p-6 bg-gray-50">
//           <div className="w-full max-w-7xl">
//             <div className="bg-white shadow rounded-lg overflow-hidden">
//               <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
//                 <div>
//                   <h2 className="text-2xl font-semibold text-gray-800">Referral Program Analytics</h2>
//                   <p className="text-gray-600 mt-1">Track user referrals and earnings</p>
//                 </div>
//                 <div className="flex space-x-2">
//                   <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
//                     Export Data
//                   </button>
//                 </div>
//               </div>

//               <div className="overflow-x-auto">
//                 <table className="min-w-full divide-y divide-gray-200">
//                   <thead className="bg-gray-50">
//                     <tr>
//                       <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         User
//                       </th>
//                       <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Usage Type
//                       </th>
//                       <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Purchase Code
//                       </th>
//                       <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Earnings
//                       </th>
//                       <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Status
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody className="bg-white divide-y divide-gray-200">
//                     {users.map((user) => {
//                       const percentage = (user.earnings / totalEarnings * 100).toFixed(1);
//                       return (
//                         <tr key={user.id} className="hover:bg-gray-50 transition-colors">
//                           <td className="px-6 py-4 whitespace-nowrap">
//                             <div className="flex items-center">
//                               <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
//                                 <span className="text-indigo-600 font-medium">
//                                   {user.name.split(' ').map(n => n[0]).join('')}
//                                 </span>
//                               </div>
//                               <div className="ml-4">
//                                 <div className="text-sm font-medium text-gray-900">{user.name}</div>
//                               </div>
//                             </div>
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap">
//                             <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${usageTypeColors[user.usageType]}`}>
//                               {user.usageType}
//                             </span>
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap">
//                             <div className="flex items-center">
//                               <div className="w-12 bg-gray-200 rounded-full h-2 mr-2">
//                                 <div
//                                   className="bg-indigo-600 h-2 rounded-full"
//                                   style={{ width: `${Math.min(100, (user.referrals / 50) * 100)}%` }}
//                                 ></div>
//                               </div>
//                               <span className="text-sm font-medium">{user.referrals}</span>
//                             </div>
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap">
//                             <div className="flex flex-col">
//                               <span className="text-green-600 font-bold">${user.earnings.toFixed(2)}</span>
//                               <span className="text-xs text-gray-500 mt-1">{percentage}% of total</span>
//                             </div>
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap">
//                             <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
//                               Active
//                             </span>
//                           </td>
//                         </tr>
//                       )
//                     })}
//                   </tbody>
//                 </table>
//               </div>

//               <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                   <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
//                     <h3 className="text-lg font-medium text-gray-900 mb-2">Top Usage Type</h3>
//                     <p className="text-2xl font-bold text-indigo-600">CUI/UX Templates</p>
//                     <p className="text-sm text-gray-500">Most referred product category</p>
//                   </div>
//                   <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
//                     <h3 className="text-lg font-medium text-gray-900 mb-2">Total Referrals</h3>
//                     <p className="text-2xl font-bold text-indigo-600">128</p>
//                     <p className="text-sm text-gray-500">Across all users</p>
//                   </div>
//                   <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
//                     <h3 className="text-lg font-medium text-gray-900 mb-2">Total Earnings</h3>
//                     <p className="text-2xl font-bold text-indigo-600">${totalEarnings.toFixed(2)}</p>
//                     <p className="text-sm text-gray-500">Paid to affiliates</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AllUsers;
// AllUsers.js (updated)
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 1
  });
  const [filters, setFilters] = useState({
    search: '',
    status: '',
    usageType: ''
  });
  const [sort, setSort] = useState({
    sortBy: 'created_at',
    sortOrder: 'desc'
  });

  // Usage type colors mapping
  const usageTypeColors = {
    'CUI/UX Templates': 'bg-purple-100 text-purple-800',
    'Code Libraries': 'bg-blue-100 text-blue-800',
    'Premium Subscriptions': 'bg-yellow-100 text-yellow-800',
    'Domain Services': 'bg-green-100 text-green-800',
    'Ads Campaigns': 'bg-red-100 text-red-800'
  };

  useEffect(() => {
//     const fetchUsers = async () => {
//   try {
//     setLoading(true);
//     const token = localStorage.getItem('token');
//     const { page, limit } = pagination;
//     const { search, status } = filters;
//     const { sortBy, sortOrder } = sort;

//     const response = await axios.get('http://localhost:3000/api/affiliate/my-referrals', {
//       params: { page, limit, search, status, sortBy, sortOrder },
//       headers: { Authorization: `Bearer ${token}` }
//     });

//     setUsers(response.data.data);
//     setPagination({
//       ...pagination,
//       total: response.data.pagination.total,
//       totalPages: response.data.pagination.totalPages
//     });
//   } catch (error) {
//     console.error('Error fetching referred users:', error);
//   } finally {
//     setLoading(false);
//   }
// };
const fetchUsers = async () => {
  try {
    setLoading(true);
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('No authentication token found');
    }

    const { page, limit } = pagination;
    const { search, status } = filters;
    const { sortBy, sortOrder } = sort;

    const response = await axios.get(
      'http://localhost:3000/api/affiliate/user/users', // Updated endpoint
      {
        params: {
          page,
          limit,
          ...(search && { search }), // Only include if exists
          ...(status && { status }), // Only include if exists
          sortBy,
          sortOrder
        },
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    setUsers(response.data.data);
    setPagination({
      ...pagination,
      total: response.data.pagination.total,
      totalPages: response.data.pagination.totalPages
    });
  } catch (error) {
    console.error('API Error Details:', {
      url: error.config?.url,
      status: error.response?.status,
      data: error.response?.data,
      headers: error.config?.headers
    });
    setUsers([]);
  } finally {
    setLoading(false);
  }
};
    fetchUsers();
  }, [pagination.page, filters, sort]);

  const handlePageChange = (newPage) => {
    setPagination({ ...pagination, page: newPage });
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
    setPagination({ ...pagination, page: 1 }); // Reset to first page when filters change
  };

  const handleSort = (column) => {
    setSort({
      sortBy: column,
      sortOrder: sort.sortBy === column ? 
        (sort.sortOrder === 'asc' ? 'desc' : 'asc') : 
        'desc'
    });
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

              {/* Filters */}
              <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Search</label>
                    <input
                      type="text"
                      name="search"
                      value={filters.search}
                      onChange={handleFilterChange}
                      placeholder="Search users..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Status</label>
                    <select
                      name="status"
                      value={filters.status}
                      onChange={handleFilterChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                    >
                      <option value="">All Statuses</option>
                      <option value="active">Active</option>
                      <option value="suspended">Suspended</option>
                      <option value="pending">Pending</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Usage Type</label>
                    <select
                      name="usageType"
                      value={filters.usageType}
                      onChange={handleFilterChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                    >
                      <option value="">All Types</option>
                      <option value="CUI/UX Templates">CUI/UX Templates</option>
                      <option value="Code Libraries">Code Libraries</option>
                      <option value="Premium Subscriptions">Premium Subscriptions</option>
                      <option value="Domain Services">Domain Services</option>
                      <option value="Ads Campaigns">Ads Campaigns</option>
                    </select>
                  </div>
                  <div className="flex items-end">
                    <button
                      onClick={() => {
                        setFilters({
                          search: '',
                          status: '',
                          usageType: ''
                        });
                        setPagination({ ...pagination, page: 1 });
                      }}
                      className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors text-sm"
                    >
                      Reset Filters
                    </button>
                  </div>
                </div>
              </div>

              {loading ? (
                <div className="flex justify-center items-center h-64">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
                </div>
              ) : (
                <>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th 
                            scope="col" 
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                            onClick={() => handleSort('name')}
                          >
                            User
                            {sort.sortBy === 'name' && (
                              <span className="ml-1">
                                {sort.sortOrder === 'asc' ? '↑' : '↓'}
                              </span>
                            )}
                          </th>
                          <th 
                            scope="col" 
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                            onClick={() => handleSort('usageType')}
                          >
                            Usage Type
                            {sort.sortBy === 'usageType' && (
                              <span className="ml-1">
                                {sort.sortOrder === 'asc' ? '↑' : '↓'}
                              </span>
                            )}
                          </th>
                          <th 
                            scope="col" 
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                            onClick={() => handleSort('earnCode')}
                          >
                            EarnCode
                            {sort.sortBy === 'earnCode' && (
                              <span className="ml-1">
                                {sort.sortOrder === 'asc' ? '↑' : '↓'}
                              </span>
                            )}
                          </th>
                          <th 
                            scope="col" 
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                            onClick={() => handleSort('referrals')}
                          >
                            Referrals
                            {sort.sortBy === 'referrals' && (
                              <span className="ml-1">
                                {sort.sortOrder === 'asc' ? '↑' : '↓'}
                              </span>
                            )}
                          </th>
                          <th 
                            scope="col" 
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                            onClick={() => handleSort('earnings')}
                          >
                            Earnings
                            {sort.sortBy === 'earnings' && (
                              <span className="ml-1">
                                {sort.sortOrder === 'asc' ? '↑' : '↓'}
                              </span>
                            )}
                          </th>
                          <th 
                            scope="col" 
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                            onClick={() => handleSort('status')}
                          >
                            Status
                            {sort.sortBy === 'status' && (
                              <span className="ml-1">
                                {sort.sortOrder === 'asc' ? '↑' : '↓'}
                              </span>
                            )}
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {users.map((user) => (
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
                                  <div className="text-sm text-gray-500">{user.email}</div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${usageTypeColors[user.usageType] || 'bg-gray-100 text-gray-800'}`}>
                                {user.usageType || 'N/A'}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900 font-mono">{user.earnCode}</div>
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
                              <span className="text-green-600 font-bold">${user.earnings}</span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              {/* <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                user.status === 'active' ? 'bg-green-100 text-green-800' : 
                                user.status === 'suspended' ? 'bg-red-100 text-red-800' : 
                                'bg-yellow-100 text-yellow-800'
                              }`}>
                                {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                              </span> */}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Pagination */}
                  <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 flex items-center justify-between">
                    <div className="text-sm text-gray-700">
                      Showing <span className="font-medium">{(pagination.page - 1) * pagination.limit + 1}</span> to{' '}
                      <span className="font-medium">{Math.min(pagination.page * pagination.limit, pagination.total)}</span> of{' '}
                      <span className="font-medium">{pagination.total}</span> users
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handlePageChange(pagination.page - 1)}
                        disabled={pagination.page === 1}
                        className={`px-3 py-1 border border-gray-300 rounded-md text-sm ${pagination.page === 1 ? 'bg-gray-100 cursor-not-allowed' : 'hover:bg-gray-50'}`}
                      >
                        Previous
                      </button>
                      {Array.from({ length: Math.min(5, pagination.totalPages) }, (_, i) => {
                        let pageNum;
                        if (pagination.totalPages <= 5) {
                          pageNum = i + 1;
                        } else if (pagination.page <= 3) {
                          pageNum = i + 1;
                        } else if (pagination.page >= pagination.totalPages - 2) {
                          pageNum = pagination.totalPages - 4 + i;
                        } else {
                          pageNum = pagination.page - 2 + i;
                        }
                        
                        return (
                          <button
                            key={pageNum}
                            onClick={() => handlePageChange(pageNum)}
                            className={`px-3 py-1 border rounded-md text-sm ${
                              pagination.page === pageNum
                                ? 'bg-indigo-600 text-white border-indigo-600'
                                : 'border-gray-300 hover:bg-gray-50'
                            }`}
                          >
                            {pageNum}
                          </button>
                        );
                      })}
                      <button
                        onClick={() => handlePageChange(pagination.page + 1)}
                        disabled={pagination.page === pagination.totalPages}
                        className={`px-3 py-1 border border-gray-300 rounded-md text-sm ${pagination.page === pagination.totalPages ? 'bg-gray-100 cursor-not-allowed' : 'hover:bg-gray-50'}`}
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </>
              )}

              <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Top Usage Type</h3>
                    {/* <p className="text-2xl font-bold text-indigo-600">
                      {users.length > 0 ? 
                        users.reduce((acc, user) => {
                          acc[user.usageType] = (acc[user.usageType] || 0) + 1;
                          return acc;
                        }, {}) |> Object.entries |> entries => 
                          entries.reduce((a, b) => a[1] > b[1] ? a : b)[0] : 
                        'N/A'}
                    </p> */}
                    <p className="text-sm text-gray-500">Most common product category</p>
                  </div>
                 <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
  <h3 className="text-lg font-medium text-gray-900 mb-2">Total Referrals</h3>
  <p className="text-2xl font-bold text-indigo-600">
    {new Set(users.map(user => user.earnCode)).size}
  </p>
  <p className="text-sm text-gray-500">Unique referred users</p>
</div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Total Earnings</h3>
                    <p className="text-2xl font-bold text-indigo-600">
                      ${users.reduce((sum, user) => sum + user.earnings, 0).toFixed(2)}
                    </p>
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