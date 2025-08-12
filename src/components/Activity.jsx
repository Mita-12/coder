import React, { useState } from "react";
import {
  FiDownload
} from "react-icons/fi";

const activities = [
  {
    id: 1,
    referralName: "John Doe",
    email: "john.doe@example.com",
    activity: "CUI/UX Templates",
    type: "signup",
    date: "2025-07-10",
    time: "10:30 AM",
    status: "completed",
    referralCode: "DEV25",
    earnings: "$5.00",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    commissionRate: "10%",
  },
  {
    id: 2,
    referralName: "Jane Smith",
    email: "jane.smith@example.com",
    activity: "Domain Services",
    type: "purchase",
    date: "2025-07-09",
    time: "2:15 PM",
    status: "completed",
    referralCode: "WELCOME10",
    earnings: "$10.00",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    commissionRate: "20%",
  },
  {
    id: 3,
    referralName: "Michael Clark",
    email: "michael.clark@example.com",
    activity: "Premium Subscriptions",
    type: "upgrade",
    date: "2025-07-08",
    time: "9:45 AM",
    status: "completed",
    referralCode: "UPGRADE15",
    earnings: "$15.00",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    commissionRate: "15%",
  },
  {
    id: 4,
    referralName: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    activity: "Domain Services",
    type: "referral",
    date: "2025-07-07",
    time: "4:20 PM",
    status: "pending",
    referralCode: "REFER25",
    earnings: "$0.00",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    commissionRate: "25%",
  },
  {
    id: 5,
    referralName: "David Wilson",
    email: "david.wilson@example.com",
    activity: "Code Libraries",
    type: "renewal",
    date: "2025-07-06",
    time: "11:10 AM",
    status: "completed",
    referralCode: "LOYALTY30",
    earnings: "$7.50",
    image: "https://randomuser.me/api/portraits/men/81.jpg",
    commissionRate: "30%",
  },
];

const getStatusBadge = (status) => {
  switch (status) {
    case "completed":
      return "bg-green-50 text-green-700 border-green-100";
    case "pending":
      return "bg-amber-50 text-amber-700 border-amber-100";
    default:
      return "bg-gray-50 text-gray-700 border-gray-100";
  }
};

const Activity = () => {
  const [expandedRow, setExpandedRow] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const toggleRow = (id) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  const filteredActivities = activities.filter(activity => {
    const matchesSearch = activity.referralName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      activity.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      activity.activity.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === "All" ||
      activity.status.toLowerCase() === selectedStatus.toLowerCase();
    const matchesType = selectedType === "All" ||
      activity.type.toLowerCase() === selectedType.toLowerCase();
    return matchesSearch && matchesStatus && matchesType;
  });

  const totalPages = Math.ceil(filteredActivities.length / itemsPerPage);
  const paginatedActivities = filteredActivities.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="w-full mx-auto pr-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Header */}
        <div className="px-6 py-5 border-b border-gray-100 bg-white">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Referral Activities</h2>
              <p className="text-sm text-gray-500 mt-1">Track your referral earnings and conversions</p>
            </div>
            <div className="flex items-center space-x-3">
              <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg border border-gray-200 flex items-center transition-all hover:shadow-xs">
                <FiDownload className="mr-2" />
                Export
              </button>
            </div>
          </div>
        </div>

        {/* Table View */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">Referral</th>
                <th className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">Activity</th>
                <th className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">Earnings</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {paginatedActivities.map((item) => (
                <React.Fragment key={item.id}>
                  <tr
                    className="hover:bg-gray-50 transition cursor-pointer"
                    onClick={() => toggleRow(item.id)}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img
                            src={item.image}
                            alt={item.referralName}
                            className="h-10 w-10 rounded-full object-cover border-2 border-white shadow-xs"
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{item.referralName}</div>
                          <div className="text-sm text-gray-500">{item.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{item.activity}</div>
                      <div className="text-xs text-gray-500 capitalize">{item.type}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{item.date}</div>
                      <div className="text-xs text-gray-500">{item.time}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${getStatusBadge(item.status)}`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {item.earnings}
                    </td>
                  </tr>
                  {expandedRow === item.id && (
                    <tr className="bg-blue-50">
                      <td colSpan="5" className="px-6 py-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Referral Details</h4>
                            <div className="mt-2 space-y-1">
                              <p className="text-sm text-gray-700">
                                <span className="font-medium">Code:</span> {item.referralCode}
                              </p>
                              <p className="text-sm text-gray-700">
                                <span className="font-medium">Commission Rate:</span> {item.commissionRate}
                              </p>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Activity Details</h4>
                            <div className="mt-2 space-y-1">
                              <p className="text-sm text-gray-700 capitalize">
                                <span className="font-medium">Type:</span> {item.type}
                              </p>
                              <p className="text-sm text-gray-700">
                                <span className="font-medium">Completed:</span> {item.date} at {item.time}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center justify-end">
                            <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-xs text-sm font-medium text-gray-700 hover:bg-gray-50 transition">
                              View Full Details
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>

          {paginatedActivities.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">No matching referrals found</div>
              <button
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedStatus("All");
                  setSelectedType("All");
                }}
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-white border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            Showing <span className="font-medium">{(currentPage - 1) * itemsPerPage + 1}</span> to <span className="font-medium">
              {Math.min(currentPage * itemsPerPage, filteredActivities.length)}
            </span> of <span className="font-medium">{filteredActivities.length}</span> results
          </p>
          <div className="flex items-center space-x-2">
            <button
              className="px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg border border-gray-200 transition disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Previous
            </button>
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              let pageNum;
              if (totalPages <= 5) {
                pageNum = i + 1;
              } else if (currentPage <= 3) {
                pageNum = i + 1;
              } else if (currentPage >= totalPages - 2) {
                pageNum = totalPages - 4 + i;
              } else {
                pageNum = currentPage - 2 + i;
              }

              return (
                <button
                  key={pageNum}
                  className={`px-3 py-1.5 text-sm font-medium rounded-lg transition ${currentPage === pageNum
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-50 border border-gray-200'
                    }`}
                  onClick={() => handlePageChange(pageNum)}
                >
                  {pageNum}
                </button>
              );
            })}
            {totalPages > 5 && currentPage < totalPages - 2 && (
              <>
                <span className="px-2 text-gray-500">...</span>
                <button
                  className="px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg border border-gray-200 transition"
                  onClick={() => handlePageChange(totalPages)}
                >
                  {totalPages}
                </button>
              </>
            )}
            <button
              className="px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg border border-gray-200 transition disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
