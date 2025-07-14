// GraphSection.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    date: "May 20",
    clicks: 0,
    signups: 0,
  },
  {
    date: "May 21",
    clicks: 1,
    signups: 2,
  },
  {
    date: "May 22",
    clicks: 0,
    signups: 1,
  },
  {
    date: "May 23",
    clicks: 2,
    signups: 2,
  },
  {
    date: "May 24",
    clicks: 2,
    signups: 2,
  },
];

const GraphSection = () => {
  // const [showDropdown, setShowDropdown] = React.useState(false);

  return (
    <div className="bg-white rounded-lg p-6 mb-6 shadow ">

      <div className="flex justify-between items-center mb-4">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Overview</h1>
          <div className="flex space-x-6 mt-2 text-sm text-gray-500">
            <div className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              <span>Last 30 days</span>
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-gray-300 rounded-full mr-2"></span>
              <span>Previous 30 days</span>
            </div>
          </div>
        </div>       
        <div className="flex items-center gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Last 30day</label>
            <input
              type="date"
              className="border rounded px-3 py-1 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="clicks"
            stroke="#8884d8"
            activeDot={{ r: 6 }}
            name="Clicks"
          />
          <Line
            type="monotone"
            dataKey="signups"
            stroke="#82ca9d"
            name="Signups"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraphSection;
