// src/App.js
import React, { useState } from 'react';
import { FiUser, FiMail, FiLock, FiMapPin, FiEdit, FiCamera, FiCheck, FiGlobe } from 'react-icons/fi';
import Sidebar from '../components/Sidebar';
import { FiMenu } from "react-icons/fi";
import {
  MdOutlineAddShoppingCart,
  MdOutlinePersonAddAlt,
  MdSearch,
  MdSettings,
  MdLogout,
  MdAccountCircle
} from "react-icons/md";
import { RiArrowDownSLine, } from "react-icons/ri";



const DashboardNavbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <div className="fixed top-0 left-50 right-0 h-16 bg-white z-10 flex border-b border-gray-200 items-center justify-between px-6 ">
      {/* Left side - Search and Menu */}
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-lg hover:bg-gray-50 lg:hidden">
          <FiMenu className="text-gray-600 text-xl" />
        </button>
      </div>

      {/* Right side - Icons and Profile */}
      <div className="flex items-center space-x-5  ">

        <div className="relative hidden lg:block w-72">
          <MdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
          <input
            type="text"
            placeholder="Search campaigns, reports..."
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:bg-white focus:border-indigo-300 text-sm transition-all duration-200"
          />
        </div>

        {/* Profile Dropdown */}
        <div className="relative ">
          <button
            className="flex items-center space-x-2 group"
            onClick={() => setIsProfileOpen(!isProfileOpen)}
          >
            <div className="w-9 h-9 rounded-full bg-indigo-600 flex items-center justify-center">
              <span className="text-white font-medium text-sm">NH</span>
            </div>
            <div className="hidden md:flex flex-col items-start">
              <span className="text-sm font-medium text-gray-700">Neha
</span>
              <span className="text-xs text-gray-500">Admin</span>
            </div>
            <RiArrowDownSLine className={`text-gray-500 text-lg transition-transform duration-200 ${isProfileOpen ? 'transform rotate-180' : ''}`} />
          </button>



          {/* Profile Dropdown Menu */}
          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-1 border border-gray-100">
              
              <Link to="/" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50">
                <MdAccountCircle className="mr-3 text-gray-500 text-lg" />
                ViweProfile
              </Link>
              <Link to="/profile" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50">
                <MdSettings className="mr-3 text-gray-500 text-lg" />
                UpdateProfile
              </Link>
              <div className="border-t border-gray-100"></div>
              <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50">
                <MdLogout className="mr-3 text-gray-500 text-lg" />
                Log out
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Profile = () => {
    const [userData, setUserData] = useState({
        fullName: "Nafsa Humalra",
        email: "hello@example.com",
        address: "U.S. Central Square, Brooklyn",
        PhoneNo: "10001",
        city: "New York",
        country: "United States",
        password: "••••••••"
    });

    const [editingField, setEditingField] = useState(null);
    const [tempValue, setTempValue] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const [isEditingAvatar, setIsEditingAvatar] = useState(false);

    const countries = [
        "United States",
        "Canada",
        "United Kingdom",
        "Australia",
        "Germany",
        "France"
    ];

    const handleEdit = (field) => {
        setEditingField(field);
        setTempValue(userData[field]);
    };

    const handleSave = (field) => {
        setUserData({ ...userData, [field]: tempValue });
        setEditingField(null);
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedFile(file);
        }
    };

    return (
         <div className="flex w-full bg-slate-100">
      <Sidebar />

      <div className="ml-64 min-h-screen  text-sm text-gray-800 w-full">
        {/* Dashboard Navbar */}
        <DashboardNavbar />
       
        <div className="  mt-20 p-4 w-full">
            <div className="max-w-8xl mx-auto">
                <header className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">User Profile</h1>
                    <p className="text-gray-600">Manage your personal information and account settings</p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left Column - Profile Overview */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-2xl shadow-md p-6">
                            <div className="relative flex justify-center mb-6">
                                <div className="relative">
                                    <div className="w-32 h-32 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 flex items-center justify-center text-white text-4xl">
                                        <span>NH</span>
                                    </div>

                                    {isEditingAvatar ? (
                                        <div className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-md">
                                            <label className="cursor-pointer">
                                                <FiCamera className="text-indigo-600 text-lg" />
                                                <input
                                                    type="file"
                                                    className="hidden"
                                                    accept="image/*"
                                                    onChange={handleFileChange}
                                                />
                                            </label>
                                            <button
                                                className="ml-2 text-green-500"
                                                onClick={() => setIsEditingAvatar(false)}
                                            >
                                                <FiCheck />
                                            </button>
                                        </div>
                                    ) : (
                                        <button
                                            className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-50"
                                            onClick={() => setIsEditingAvatar(true)}
                                        >
                                            <FiCamera className="text-indigo-600 text-lg" />
                                        </button>
                                    )}
                                </div>
                            </div>

                            <div className="text-center mb-6">
                                <h2 className="text-2xl font-bold text-gray-800">{userData.fullName}</h2>
                                <p className="text-gray-600 flex items-center justify-center">
                                    <FiMail className="mr-2" />
                                    {userData.email}
                                </p>
                            </div>

                            <div className="bg-indigo-50 rounded-xl p-4 mb-6">
                                <h3 className="font-medium text-indigo-700 mb-2">Account Verification</h3>
                                <p className="text-sm text-indigo-600 mb-3">
                                    Net.16s axis is 20mb - Verification document required
                                </p>
                                <div className="relative">
                                    <input
                                        type="file"
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                        onChange={handleFileChange}
                                    />
                                    <div className="bg-white border border-indigo-300 rounded-lg py-2 px-4 text-center cursor-pointer">
                                        {selectedFile ? (
                                            <span className="text-indigo-600 font-medium truncate">
                                                {selectedFile.name}
                                            </span>
                                        ) : (
                                            <span className="text-gray-500">Choose file...</span>
                                        )}
                                    </div>
                                </div>
                                <button className="w-full mt-3 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                                    Upload Document
                                </button>
                            </div>

                            <div className="bg-gray-50 rounded-xl p-4">
                                <h3 className="font-medium text-gray-700 mb-2">Account Status</h3>
                                <div className="flex items-center">
                                    <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                                    <span className="text-green-700">Verified Account</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - User Details */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-2xl shadow-md p-6 mb-6 ">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-xl font-bold text-gray-800 flex items-center">
                                    <FiUser className="mr-2 text-indigo-600" />
                                    Personal Information
                                </h2>
                            </div>

                            <div className="space-y-4">
                                {/* Full Name */}
                                <div className="flex flex-col md:flex-row md:items-center justify-between border-b pb-4">
                                    <div>
                                        <label className="text-sm font-medium text-gray-500">Full Name</label>
                                        {editingField === 'fullName' ? (
                                            <div className="flex mt-1">
                                                <input
                                                    type="text"
                                                    value={tempValue}
                                                    onChange={(e) => setTempValue(e.target.value)}
                                                    className="border border-gray-300 rounded-l-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                                />
                                                <button
                                                    onClick={() => handleSave('fullName')}
                                                    className="bg-indigo-600 text-white px-4 rounded-r-lg"
                                                >
                                                    Save
                                                </button>
                                            </div>
                                        ) : (
                                            <p className="text-gray-800 font-medium mt-1">{userData.fullName}</p>
                                        )}
                                    </div>
                                    <button
                                        onClick={() => handleEdit('fullName')}
                                        className="mt-2 md:mt-0 text-indigo-600 hover:text-indigo-800 flex items-center"
                                    >
                                        <FiEdit className="mr-1" /> Edit
                                    </button>
                                </div>

                                {/* Address */}
                                <div className="flex flex-col md:flex-row md:items-center justify-between border-b pb-4">
                                    <div>
                                        <label className="text-sm font-medium text-gray-500">Address</label>
                                        {editingField === 'address' ? (
                                            <div className="flex mt-1">
                                                <input
                                                    type="text"
                                                    value={tempValue}
                                                    onChange={(e) => setTempValue(e.target.value)}
                                                    className="border border-gray-300 rounded-l-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                                />
                                                <button
                                                    onClick={() => handleSave('address')}
                                                    className="bg-indigo-600 text-white px-4 rounded-r-lg"
                                                >
                                                    Save
                                                </button>
                                            </div>
                                        ) : (
                                            <p className="text-gray-800 font-medium mt-1 flex items-center">
                                                <FiMapPin className="mr-2 text-indigo-500" />
                                                {userData.address}
                                            </p>
                                        )}
                                    </div>
                                    <button
                                        onClick={() => handleEdit('address')}
                                        className="mt-2 md:mt-0 text-indigo-600 hover:text-indigo-800 flex items-center"
                                    >
                                        <FiEdit className="mr-1" /> Edit
                                    </button>
                                </div>

                                {/* Location Group */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {/* Post Code */}
                                    <div className="border-b pb-4">
                                        <label className="text-sm font-medium text-gray-500">Phone no</label>
                                        {editingField === 'postCode' ? (
                                            <div className="flex mt-1">
                                                <input
                                                    type="text"
                                                    value={tempValue}
                                                    onChange={(e) => setTempValue(e.target.value)}
                                                    className="border border-gray-300 rounded-l-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                                />
                                                <button
                                                    onClick={() => handleSave('postCode')}
                                                    className="bg-indigo-600 text-white px-4 rounded-r-lg"
                                                >
                                                    Save
                                                </button>
                                            </div>
                                        ) : (
                                            <p className="text-gray-800 font-medium mt-1">{userData.postCode}</p>
                                        )}
                                        <button
                                            onClick={() => handleEdit('postCode')}
                                            className="mt-2 text-indigo-600 hover:text-indigo-800 flex items-center text-sm"
                                        >
                                            <FiEdit className="mr-1" /> Edit
                                        </button>
                                    </div>

                                    {/* City */}
                                    <div className="border-b pb-4">
                                        <label className="text-sm font-medium text-gray-500">City</label>
                                        {editingField === 'city' ? (
                                            <div className="flex mt-1">
                                                <input
                                                    type="text"
                                                    value={tempValue}
                                                    onChange={(e) => setTempValue(e.target.value)}
                                                    className="border border-gray-300 rounded-l-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                                />
                                                <button
                                                    onClick={() => handleSave('city')}
                                                    className="bg-indigo-600 text-white px-4 rounded-r-lg"
                                                >
                                                    Save
                                                </button>
                                            </div>
                                        ) : (
                                            <p className="text-gray-800 font-medium mt-1">{userData.city}</p>
                                        )}
                                        <button
                                            onClick={() => handleEdit('city')}
                                            className="mt-2 text-indigo-600 hover:text-indigo-800 flex items-center text-sm"
                                        >
                                            <FiEdit className="mr-1" /> Edit
                                        </button>
                                    </div>

                                    {/* Country */}
                                    <div className="border-b pb-4">
                                        <label className="text-sm font-medium text-gray-500">Country</label>
                                        {editingField === 'country' ? (
                                            <div className="mt-1">
                                                <select
                                                    value={tempValue}
                                                    onChange={(e) => setTempValue(e.target.value)}
                                                    className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                                >
                                                    {countries.map((country) => (
                                                        <option key={country} value={country}>{country}</option>
                                                    ))}
                                                </select>
                                                <div className="flex mt-2">
                                                    <button
                                                        onClick={() => setEditingField(null)}
                                                        className="flex-1 border border-gray-300 py-2 rounded-l-lg"
                                                    >
                                                        Cancel
                                                    </button>
                                                    <button
                                                        onClick={() => handleSave('country')}
                                                        className="flex-1 bg-indigo-600 text-white py-2 rounded-r-lg"
                                                    >
                                                        Save
                                                    </button>
                                                </div>
                                            </div>
                                        ) : (
                                            <p className="text-gray-800 font-medium mt-1 flex items-center">
                                                <FiGlobe className="mr-2 text-indigo-500" />
                                                {userData.country}
                                            </p>
                                        )}
                                        <button
                                            onClick={() => handleEdit('country')}
                                            className="mt-2 text-indigo-600 hover:text-indigo-800 flex items-center text-sm"
                                        >
                                            <FiEdit className="mr-1" /> Edit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-md p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-xl font-bold text-gray-800 flex items-center">
                                    <FiLock className="mr-2 text-indigo-600" />
                                    Account Security
                                </h2>
                            </div>

                            <div className="space-y-6">
                                {/* Email */}
                                <div className="border-b pb-6">
                                    <label className="text-sm font-medium text-gray-500">Email Address</label>
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mt-1">
                                        <p className="text-gray-800 font-medium">{userData.email}</p>
                                        <button className="mt-2 md:mt-0 bg-indigo-50 text-indigo-600 hover:bg-indigo-100 py-2 px-4 rounded-lg flex items-center">
                                            <FiEdit className="mr-2" /> Update Email
                                        </button>
                                    </div>
                                </div>

                                {/* Password */}
                                <div className="border-b pb-6">
                                    <label className="text-sm font-medium text-gray-500">Password</label>
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mt-1">
                                        <p className="text-gray-800 font-medium">{userData.password}</p>
                                        <button className="mt-2 md:mt-0 bg-indigo-50 text-indigo-600 hover:bg-indigo-100 py-2 px-4 rounded-lg flex items-center">
                                            <FiEdit className="mr-2" /> Change Password
                                        </button>
                                    </div>
                                    <p className="text-sm text-gray-500 mt-3">
                                        Details can be further authenticated on the security page
                                    </p>
                                </div>

                                {/* Security Note */}
                                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                                    <h3 className="font-medium text-yellow-700 mb-2">Security Note</h3>
                                    <p className="text-sm text-yellow-600">
                                        For enhanced security, please enable two-factor authentication and regularly update your password.
                                    </p>
                                </div>
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

export default Profile;