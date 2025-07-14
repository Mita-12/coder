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
        </div>        {/* All Members Dropdown Section */}
        {/* <div className="relative inline-block text-left mb-4 ">
          <div>
            <button
              type="button"
              onClick={() => setShowDropdown(!showDropdown)}
              className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
            >
              All Members
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.584l3.71-4.354a.75.75 0 111.14.976l-4.25 5a.75.75 0 01-1.14 0l-4.25-5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {showDropdown && (
            <div className="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-20">
              <div className="py-1">
                <a
                  href="/instructor-dashboard"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Instructor       </a>
                <Link
                  to="/students-dashboard"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Student
                </Link>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Collage
                </a>
              </div>
            </div>
          )}
        </div> */}

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
