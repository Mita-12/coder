import React from "react";
import { 
  FiUser, 
  FiShoppingBag, 
  FiStar, 
  FiUsers,
  FiRefreshCw,
  FiChevronRight,
  FiCalendar
} from "react-icons/fi";

const activities = [
  {
    id: 1,
    referralName: "John Doe",
    activity: "Signed up using referral code",
    type: "signup",
    date: "2025-07-10",
    time: "10:30 AM",
    status: "completed"
  },
  {
    id: 2,
    referralName: "Jane Smith",
    activity: "Made first purchase ($49.99)",
    type: "purchase",
    date: "2025-07-09",
    time: "2:15 PM",
    status: "completed"
  },
  {
    id: 3,
    referralName: "Michael Clark",
    activity: "Upgraded to premium plan",
    type: "upgrade",
    date: "2025-07-08",
    time: "9:45 AM",
    status: "completed"
  },
  {
    id: 4,
    referralName: "Sarah Johnson",
    activity: "Referred a new customer",
    type: "referral",
    date: "2025-07-07",
    time: "4:20 PM",
    status: "pending"
  },
  {
    id: 5,
    referralName: "David Wilson",
    activity: "Renewed annual subscription",
    type: "renewal",
    date: "2025-07-06",
    time: "11:10 AM",
    status: "completed"
  },
];

const getActivityIcon = (type) => {
  const iconSize = "text-lg";
  switch (type) {
    case "signup":
      return <FiUser className={`${iconSize} text-blue-500`} />;
    case "purchase":
      return <FiShoppingBag className={`${iconSize} text-green-500`} />;
    case "upgrade":
      return <FiStar className={`${iconSize} text-purple-500`} />;
    case "referral":
      return <FiUsers className={`${iconSize} text-amber-500`} />;
    case "renewal":
      return <FiRefreshCw className={`${iconSize} text-teal-500`} />;
    default:
      return <FiUser className={`${iconSize} text-gray-500`} />;
  }
};

const getStatusBadge = (status) => {
  switch (status) {
    case "completed":
      return "bg-green-100 text-green-800";
    case "pending":
      return "bg-yellow-100 text-yellow-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const Activity = () => {
  return (
    <div className="w-full mx-auto p-4">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Recent Activities</h2>
            <p className="text-sm text-gray-500">Track your referral program performance</p>
          </div>
          <div className="flex items-center space-x-2">
            <button className="px-3 py-1.5 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors">
              Filter
            </button>
            <button className="px-3 py-1.5 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors">
              Sort
            </button>
          </div>
        </div>
        
        {/* Activity List */}
        <div className="divide-y divide-gray-100">
          {activities.map((item) => (
            <div key={item.id} className=" hover:bg-gray-50 transition-colors group">
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="mt-1 p-2.5 bg-gray-50 rounded-xl group-hover:bg-white transition-colors">
                  {getActivityIcon(item.type)}
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-gray-800 truncate">
                      {item.referralName}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <span className={`text-xs px-2 py-1 rounded-full ${getStatusBadge(item.status)}`}>
                        {item.status}
                      </span>
                      <span className="text-xs text-gray-400 flex items-center">
                        <FiCalendar className="mr-1" size={12} />
                        {item.date}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600 mt-1">{item.activity}</p>
                  
                  <div className="mt-2 flex items-center justify-between">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      #{item.id}
                    </span>
                    <span className="text-xs text-gray-400">
                      {item.time}
                    </span>
                  </div>
                </div>
                
                {/* Action */}
                <button className="p-1 text-gray-400 hover:text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  <FiChevronRight />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Footer */}
        <div className="px-6 py-3 bg-gray-50 border-t border-gray-100 flex justify-between items-center">
          <p className="text-sm text-gray-500">
            Showing 5 of {activities.length} activities
          </p>
          <button className="text-sm font-medium text-blue-600 hover:text-blue-800 flex items-center">
            View all activities <FiChevronRight className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Activity;