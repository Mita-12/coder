import React from 'react';

const Prize = () => {
  // Prize data
  const prizes = [
    {
      id: 1,
      name: "Gold Achievement",
      targetPrice: "$10,000",
      description: "Top performer with highest annual sales",
      certificate: "https://example.com/certificates/gold.png",
      yearlyTarget: "$120,000",
      winner: {
        id: "USER-789",
        name: "Alex Johnson",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        totalSales: "$132,450",
        totalEarnings: "$13,245",
        achievementDate: "2023-12-15"
      }
    },
    {
      id: 2,
      name: "Silver Excellence",
      targetPrice: "$7,500",
      description: "Consistent high performance throughout the year",
      certificate: "https://example.com/certificates/silver.png",
      yearlyTarget: "$90,000",
      winner: {
        id: "USER-456",
        name: "Sarah Williams",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        totalSales: "$98,720",
        totalEarnings: "$9,872",
        achievementDate: "2023-12-10"
      }
    },
    {
      id: 3,
      name: "Bronze Star",
      targetPrice: "$5,000",
      description: "Outstanding performance for new achievers",
      certificate: "https://example.com/certificates/bronze.png",
      yearlyTarget: "$60,000",
      winner: {
        id: "USER-123",
        name: "Michael Brown",
        image: "https://randomuser.me/api/portraits/men/22.jpg",
        totalSales: "$72,310",
        totalEarnings: "$7,231",
        achievementDate: "2023-12-05"
      }
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Annual Achievement Prizes</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Recognizing our top performers who exceeded their yearly sales targets and earned special rewards
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {prizes.map((prize) => (
          <div key={prize.id} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow">
            {/* Prize Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-6 text-white">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold">{prize.name}</h2>
                  <p className="text-blue-100">{prize.description}</p>
                </div>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">Target: {prize.yearlyTarget}</span>
              </div>
            </div>

            <div className="p-6">
              {/* Certificate Preview */}
              <div className="mb-6 border border-gray-200 rounded-lg overflow-hidden">
                <div className="bg-gray-50 p-4 text-center">
                  <img 
                    src={prize.certificate} 
                    alt={`${prize.name} Certificate`} 
                    className="mx-auto h-40 object-contain"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/300x200?text=Certificate+Preview";
                    }}
                  />
                </div>
                <div className="bg-gray-100 px-4 py-2 text-center text-sm text-gray-600">
                  {prize.name} Certificate
                </div>
              </div>

              {/* Winner Information */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Current Winner</h3>
                <div className="flex items-center space-x-4">
                  <img 
                    src={prize.winner.image} 
                    alt={prize.winner.name} 
                    className="w-16 h-16 rounded-full border-2 border-blue-500"
                  />
                  <div>
                    <h4 className="font-medium text-gray-900">{prize.winner.name}</h4>
                    <p className="text-sm text-gray-500">ID: {prize.winner.id}</p>
                    <p className="text-sm text-gray-500">Achieved: {prize.winner.achievementDate}</p>
                  </div>
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Target Price:</span>
                  <span className="font-bold text-blue-600">{prize.targetPrice}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Sales:</span>
                  <span className="font-bold text-green-600">{prize.winner.totalSales}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Earnings:</span>
                  <span className="font-bold text-purple-600">{prize.winner.totalEarnings}</span>
                </div>
              </div>

              {/* View Details Button */}
              <button className="mt-6 w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                View Full Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Summary Section */}
      <div className="mt-12 bg-white rounded-xl shadow-lg p-6 border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Prize Program Summary</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">Total Prize Value</h3>
            <p className="text-3xl font-bold text-blue-600">$22,500</p>
            <p className="text-sm text-blue-500 mt-1">Across all achievement levels</p>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg border border-green-100">
            <h3 className="text-lg font-semibold text-green-800 mb-2">Total Sales Generated</h3>
            <p className="text-3xl font-bold text-green-600">$303,480</p>
            <p className="text-sm text-green-500 mt-1">By prize winners</p>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
            <h3 className="text-lg font-semibold text-purple-800 mb-2">Total Earnings Paid</h3>
            <p className="text-3xl font-bold text-purple-600">$30,348</p>
            <p className="text-sm text-purple-500 mt-1">To participants</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prize;